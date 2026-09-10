import { exchangeGoogleAuthCode } from "@/lib/server/googleTokenExchange";
import { jsonError } from "@/lib/server/httpAuth";

/**
 * POST /api/auth/google/exchange
 * Body: { code, codeVerifier, redirectUri }
 * Exchanges the auth code (PKCE) for a Google id_token using the Web client secret.
 * The id_token audience matches Neon Auth’s configured Google client ID.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      code?: string;
      codeVerifier?: string;
      redirectUri?: string;
    };

    if (!body.code?.trim() || !body.redirectUri?.trim()) {
      return jsonError("code and redirectUri are required", 400);
    }

    const tokens = await exchangeGoogleAuthCode({
      code: body.code.trim(),
      redirectUri: body.redirectUri.trim(),
      ...(body.codeVerifier?.trim()
        ? { codeVerifier: body.codeVerifier.trim() }
        : {}),
    });

    return Response.json({
      idToken: tokens.idToken,
      ...(tokens.accessToken ? { accessToken: tokens.accessToken } : {}),
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Google token exchange failed";
    console.error("[auth/google/exchange]", message);

    if (/GOOGLE_CLIENT_SECRET|EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID/.test(message)) {
      return jsonError("Google OAuth server is not configured", 500);
    }
    if (/token exchange failed/i.test(message)) {
      return Response.json(
        {
          error: "Invalid Google authorization code",
          detail: message.replace(/^Google token exchange failed:\s*/i, "").slice(0, 200),
        },
        { status: 401 }
      );
    }
    return jsonError("Server error", 500);
  }
}
