import {
  AppleAccountNotFoundError,
  authenticateWithApple,
  type AppleAuthMode,
} from "@/lib/server/appleAuthService";
import { jsonError } from "@/lib/server/httpAuth";

function isAppleTokenClientError(message: string): boolean {
  return /audience|issuer|nonce|signature|expired|JWT|JWS|compact|claim|token/i.test(
    message
  );
}

/**
 * POST /api/auth/apple
 * Body: { identityToken, nonce?, mode?, emailHint?, givenName?, familyName?, fullName? }
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      identityToken?: string;
      nonce?: string | null;
      mode?: AppleAuthMode | null;
      emailHint?: string | null;
      givenName?: string | null;
      familyName?: string | null;
      fullName?: string | null;
    };

    if (!body.identityToken?.trim()) {
      return jsonError("identityToken is required", 400);
    }

    const result = await authenticateWithApple({
      identityToken: body.identityToken,
      nonce: body.nonce,
      mode: body.mode,
      emailHint: body.emailHint,
      givenName: body.givenName,
      familyName: body.familyName,
      fullName: body.fullName,
    });

    return Response.json(result);
  } catch (err) {
    if (err instanceof AppleAccountNotFoundError) {
      return Response.json(
        {
          error:
            "Aucun compte Stack n’est lié à cet Apple ID. Crée un compte d’abord.",
          code: err.code,
        },
        { status: 404 }
      );
    }

    const message =
      err instanceof Error ? err.message : "Apple authentication failed";
    console.error("[auth/apple]", message);
    if (err instanceof Error && err.stack) {
      console.error(
        "[auth/apple] stack",
        err.stack.split("\n").slice(0, 4).join(" | ")
      );
    }

    const status = isAppleTokenClientError(message) ? 401 : 500;
    return jsonError(
      status === 401 ? "Invalid Apple identity token" : "Server error",
      status
    );
  }
}
