import { generateText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  apiKey: "AIzaSyCTzTmJ26HqoFruuKpW3Ilo4fccfUxHMVA",
});
export async function POST() {
  const response = await generateText({
    model: google("gemini-2.5-flash"),
    prompt: "Write a vegetarian lasgna recipe for 4 people",
  });

  return Response.json(
    {
      response,
    },
    {
      status: 200,
    }
  );
}
