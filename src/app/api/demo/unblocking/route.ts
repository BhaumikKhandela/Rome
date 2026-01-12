import { generateText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { inngest } from "@/inngest/client";

const google = createGoogleGenerativeAI({
  apiKey: "AIzaSyCTzTmJ26HqoFruuKpW3Ilo4fccfUxHMVA",
});
export async function POST() {
  await inngest.send({
    name: "demo/generate",
    data: {},
  });

  return Response.json(
    {
      status: "Started",
    },
    {
      status: 200,
    }
  );
}
