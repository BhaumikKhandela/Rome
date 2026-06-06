import OpenAI from "openai";

interface BluesMindsModelConfig {
  temperature?: number;
  max_tokens?: number;
}

/**
 * Creates a custom model adapter for BluesMinds AI gateway.
 * BluesMinds is an OpenAI-compatible unified gateway that handles model routing automatically.
 *
 * @param config - Optional configuration for temperature and max_tokens
 * @returns A Model instance compatible with @inngest/agent-kit
 *
 * @example
 * ```ts
 * const model = bluesmindsModel({ temperature: 0.3, max_tokens: 16000 });
 * ```
 */
export function bluesmindsModel(config: BluesMindsModelConfig = {}) {
  const apiKey = process.env.BLUESMINDS_API_KEY;

  if (!apiKey) {
    throw new Error(
      "BLUESMINDS_API_KEY is not configured. Please add it to your .env file."
    );
  }

  const client = new OpenAI({
    apiKey,
    baseURL: "https://api.bluesminds.com/v1", // As per BluesMinds docs
  });

  // ✅ Return an object with a `request` method – this is what AgentKit expects.
  return {
    request: async ({
      messages,
      tools,
      tool_choice,
      temperature,
      max_tokens,
    }: any) => {
      const finalTemperature = temperature ?? config.temperature;
      const finalMaxTokens = max_tokens ?? config.max_tokens;

      const completion = await client.chat.completions.create({
        model: "auto", // Let BluesMinds route to the best model
        messages,
        tools,
        tool_choice,
        temperature: finalTemperature,
        max_tokens: finalMaxTokens,
      });

      // Return in the shape AgentKit expects
      return {
        id: completion.id,
        choices: completion.choices.map((choice: any) => ({
          message: {
            role: choice.message.role,
            content: choice.message.content,
            tool_calls: choice.message.tool_calls,
          },
        })),
      };
    },
  } as any;
}




