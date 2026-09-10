import {
  appendQueryToDeepLink,
  completeGoogleOAuthCallback,
  extractAppReturnUrl,
} from "@/lib/server/googleOAuthCallback";

/**
 * GET /api/auth/google/callback
 *
 * Google redirects here (HTTPS). We exchange the auth code server-side, then
 * 302 to the app deep link with a short ticket (`gt=`) so iOS can dismiss
 * ASWebAuthenticationSession (https alone never closes the sheet).
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");
  const state = url.searchParams.get("state") || "";

  try {
    const deepLink = await completeGoogleOAuthCallback({
      code,
      error,
      state,
    });

    if (deepLink) {
      return new Response(null, {
        status: 302,
        headers: {
          Location: deepLink,
          "Cache-Control": "no-store",
        },
      });
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "oauth_failed";
    console.error("[auth/google/callback]", message);
    const appReturnUrl = extractAppReturnUrl(state);
    if (appReturnUrl) {
      let errorCode = "exchange_failed";
      if (/GOOGLE_CLIENT_SECRET is not configured/i.test(message)) {
        errorCode = "missing_secret";
      } else if (/EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID is not configured/i.test(message)) {
        errorCode = "missing_client_id";
      } else if (/EXPO_PUBLIC_API_BASE_URL is not configured/i.test(message)) {
        errorCode = "missing_api_base";
      } else if (/DATABASE_URL/i.test(message)) {
        errorCode = "missing_db";
      } else if (/redirect_uri/i.test(message)) {
        errorCode = "redirect_uri";
      } else if (/invalid_client/i.test(message)) {
        errorCode = "invalid_client";
      } else if (/invalid_grant/i.test(message)) {
        errorCode = "invalid_grant";
      }

      // Short safe detail for debugging (no secrets).
      const detail = message
        .replace(/Google token exchange failed:\s*/i, "")
        .slice(0, 120);

      const dest = appendQueryToDeepLink(appReturnUrl, {
        error: errorCode,
        detail,
      });
      return new Response(null, {
        status: 302,
        headers: { Location: dest, "Cache-Control": "no-store" },
      });
    }
  }

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Stack — Google</title>
  <style>
    body { font-family: system-ui, sans-serif; display: grid; place-items: center;
      min-height: 100vh; margin: 0; background: #0B1220; color: #e2e8f0; text-align: center; padding: 24px; }
    p { opacity: 0.85; line-height: 1.4; }
  </style>
</head>
<body>
  <p>Impossible de terminer la connexion Google. Ferme cette fenêtre et réessaie.</p>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
