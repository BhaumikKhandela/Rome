import { z } from "zod";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { inngest } from "@/inngest/client";
import { convex } from "@/lib/convex-client";

import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";
import { ConvexError } from "convex/values";

const requestSchema = z.object({
  projectId: z.string(),
});

export async function POST(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { projectId } = requestSchema.parse(body);

    const internalKey = process.env.ROME_CONVEX_INTERNAL_KEY;

    if (!internalKey) {
      return NextResponse.json(
        { error: "Internal key not configured" },
        { status: 500 },
      );
    }

    // Find all processing messages in this project
    const processingMessages = await convex.query(
      api.system.getProcessingMessages,
      {
        internalKey,
        projectId: projectId as Id<"projects">,
      },
    );

    if (processingMessages.length === 0) {
      return NextResponse.json(
        { success: true, cancelled: false, message: "No active messages" },
        { status: 200 },
      );
    }

    // Cancel all processing messages
    const results = await Promise.all(
      processingMessages.map(async (msg) => {
        try {
          await inngest.send({
            name: "message/cancel",
            data: {
              messageId: msg._id,
            },
          });
          await convex.mutation(api.system.updateMessageStatus, {
            internalKey,
            messageId: msg._id,
            status: "cancelled",
          });

          return { id: msg._id, success: true };
        } catch (error) {
          console.error("Cancel failed for message", {
            messageId: msg._id,
            error,
          });
          return { id: msg._id, success: false };
        }
      }),
    );

    const successCount = results.filter((r) => r.success).length;
    const failCount = results.length - successCount;

    let status = 200;
    if (successCount > 0 && failCount > 0) status = 207; // partial success
    if (successCount === 0) status = 500;
    return NextResponse.json(
      {
        success: true,
        summary: {
          total: results.length,
          cancelled: successCount,
          failed: failCount,
        },
        results,
      },
      { status },
    );
  } catch (error) {
    console.error("Error occurred while cancelling LLM calls", error);
    return handleError(error);
  }
}

function handleError(error: unknown) {
  console.error("Cancel route error:", error);

  if (error instanceof z.ZodError) {
    return NextResponse.json(
      { error: "Invalid Request Body" },
      { status: 400 },
    );
  }

  if (error instanceof ConvexError) {
    return NextResponse.json(
      { error: error.data ?? "Convex Error" },
      { status: 400 },
    );
  }

  return NextResponse.json({ error: "Internal server error" }, { status: 500 });
}
