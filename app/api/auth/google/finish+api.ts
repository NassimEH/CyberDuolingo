import { authenticateWithGoogle } from "@/lib/server/googleAuthService";
import { redeemGoogleOAuthTicket } from "@/lib/server/googleOAuthCallback";
import { jsonError } from "@/lib/server/httpAuth";

/**
 * POST /api/auth/google/finish
 * Body: { ticket }
 * Redeems the OAuth ticket → verifies Google id_token → Stack session (like Apple).
 * Neon Managed Auth does not support idToken social sign-in (always returns redirect).
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { ticket?: string };
    const ticket = body.ticket?.trim();
    if (!ticket) {
      return jsonError("ticket is required", 400);
    }

    const idToken = await redeemGoogleOAuthTicket(ticket);
    if (!idToken) {
      return jsonError("Invalid or expired Google ticket", 401);
    }

    const result = await authenticateWithGoogle(idToken);
    return Response.json(result);
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Google finish failed";
    console.error("[auth/google/finish]", message);

    if (/audience|issuer|signature|expired|JWT|token|subject/i.test(message)) {
      return jsonError("Invalid Google identity token", 401);
    }
    if (/Google client ID is not configured/i.test(message)) {
      return jsonError("Google OAuth server is not configured", 500);
    }
    return jsonError("Server error", 500);
  }
}
