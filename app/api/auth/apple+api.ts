import { authenticateWithApple } from "@/lib/server/appleAuthService";
import { jsonError } from "@/lib/server/httpAuth";

/**
 * POST /api/auth/apple
 * Body: { identityToken, nonce?, fullName? }
 * Verifies Apple JWT server-side, find-or-create user, returns Stack session.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      identityToken?: string;
      nonce?: string | null;
      fullName?: string | null;
    };

    if (!body.identityToken?.trim()) {
      return jsonError("identityToken is required", 400);
    }

    const result = await authenticateWithApple({
      identityToken: body.identityToken,
      nonce: body.nonce,
      fullName: body.fullName,
    });

    return Response.json(result);
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Apple authentication failed";
    console.error("[auth/apple]", message);
    const status =
      /audience|issuer|nonce|signature|expired|JWT|token/i.test(message)
        ? 401
        : 500;
    return jsonError(
      status === 401 ? "Invalid Apple identity token" : "Server error",
      status
    );
  }
}
