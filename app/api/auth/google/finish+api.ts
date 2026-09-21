import {
  GoogleAccountNotFoundError,
  authenticateWithGoogle,
  type GoogleAuthMode,
} from "@/lib/server/googleAuthService";
import { redeemGoogleOAuthTicket } from "@/lib/server/googleOAuthCallback";
import { jsonError } from "@/lib/server/httpAuth";

/**
 * POST /api/auth/google/finish
 * Body: { ticket, mode? }
 * Redeems the OAuth ticket → verifies Google id_token → Stack session (like Apple).
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      ticket?: string;
      mode?: GoogleAuthMode | null;
    };
    const ticket = body.ticket?.trim();
    if (!ticket) {
      return jsonError("ticket is required", 400);
    }

    const idToken = await redeemGoogleOAuthTicket(ticket);
    if (!idToken) {
      return jsonError("Invalid or expired Google ticket", 401);
    }

    const mode: GoogleAuthMode =
      body.mode === "signIn" || body.mode === "signUp" ? body.mode : "signUp";

    const result = await authenticateWithGoogle(idToken, mode);
    return Response.json(result);
  } catch (err) {
    if (err instanceof GoogleAccountNotFoundError) {
      return Response.json(
        {
          error:
            "Aucun compte Stack n’est lié à ce compte Google. Crée un compte d’abord.",
          code: err.code,
        },
        { status: 404 }
      );
    }

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
