import { z } from "zod";
import { NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";

import { inngest } from "@/inngest/client";

const requestSchema = z.object({
  projectId: z.string(),
  repoName: z.string().min(1).max(100),
  visibility: z.enum(["public", "private"]).default("private"),
  description: z.string().max(350).optional(),
});

export async function POST(request: Request) {
  const { userId, has } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const hasPro = has({ plan: "pro" });

  if (!hasPro) {
    return NextResponse.json(
      { error: "Pro plan required" },
      {
        status: 403,
      },
    );
  }

  const body = await request.json().catch(() => null);
  if (body === null) {
    return NextResponse.json(
      {
        error: "Invalid JSON Body",
      },
      {
        status: 400,
      },
    );
  }

  const parsedSchema = requestSchema.safeParse(body);

  if (!parsedSchema.success) {
    return NextResponse.json(
      {
        error: "Schema mismatch",
      },
      {
        status: 400,
      },
    );
  }
  const { projectId, repoName, visibility, description } = parsedSchema.data;

  const client = await clerkClient();
  const tokens = await client.users.getUserOauthAccessToken(userId, "github");

  const githubToken = tokens.data[0]?.token;

  if (!githubToken) {
    return NextResponse.json(
      {
        error: "GitHub not connected. Please reconnect your GitHub account.",
      },
      { status: 400 },
    );
  }

  const internalKey = process.env.ROME_CONVEX_INTERNAL_KEY;

  if (!internalKey) {
    return NextResponse.json(
      {
        error: "Server configuration error",
      },
      {
        status: 500,
      },
    );
  }

  const event = await inngest.send({
    name: "github/export.repo",
    data: {
      projectId,
      repoName,
      visibility,
      description,
      githubToken,
    },
  });

  return NextResponse.json({ success: true, projectId, eventId: event.ids[0] });
}
