import { Inngest } from "inngest";
import { sentryMiddleware } from "@inngest/middleware-sentry";

export const inngest = new Inngest({
  id: "rome",
  middleware: [
    sentryMiddleware({
      // Sentry will be initialized from your existing Sentry config
    })
  ],
  // Use event key from environment if available, otherwise undefined for local dev
  eventKey: process.env.INNGEST_EVENT_KEY,
});
