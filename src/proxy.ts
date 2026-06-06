import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';

/**
 * Next.js Middleware for Clerk Authentication and Cross-Origin Isolation
 * 
 * This middleware:
 * 1. Handles Clerk authentication for protected routes
 * 2. Sets COEP and COOP headers for cross-origin isolation (required for WebContainer)
 * 
 * Cross-Origin Isolation Headers:
 * - Cross-Origin-Embedder-Policy: credentialless
 *   Allows loading cross-origin resources without credentials
 * 
 * - Cross-Origin-Opener-Policy: same-origin
 *   Isolates the browsing context from cross-origin documents
 * 
 * These headers enable `self.crossOriginIsolated === true` in the browser,
 * which is required for WebContainer to transfer SharedArrayBuffer in Web Workers.
 */

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher(["/api/inngest(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // Protect routes that aren't public
  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  // Get the response
  const response = NextResponse.next();
  
  // Set cross-origin isolation headers for all responses
  response.headers.set('Cross-Origin-Embedder-Policy', 'credentialless');
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  
  return response;
});

/**
 * Configure which routes the middleware applies to
 * Matches all routes except Next.js internals and static files
 */
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
