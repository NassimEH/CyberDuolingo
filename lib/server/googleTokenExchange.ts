/**
 * Exchange a Google OAuth authorization code for tokens (server-side).
 * Uses the Web client ID + secret so the id_token `aud` matches Neon Auth.
 * PKCE `code_verifier` is optional (native flow exchanges on the HTTPS callback without PKCE).
 */
export async function exchangeGoogleAuthCode(input: {
  code: string;
  redirectUri: string;
  codeVerifier?: string;
}): Promise<{ idToken: string; accessToken?: string }> {
  const clientId =
    process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID?.trim() ||
    process.env.GOOGLE_WEB_CLIENT_ID?.trim() ||
    "";
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim() || "";

  if (!clientId) {
    throw new Error("EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID is not configured");
  }
  if (!clientSecret) {
    throw new Error("GOOGLE_CLIENT_SECRET is not configured");
  }

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    code: input.code,
    redirect_uri: input.redirectUri,
    grant_type: "authorization_code",
  });
  if (input.codeVerifier?.trim()) {
    body.set("code_verifier", input.codeVerifier.trim());
  }

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const json = (await res.json()) as {
    id_token?: string;
    access_token?: string;
    error?: string;
    error_description?: string;
  };

  if (!res.ok || !json.id_token) {
    const detail =
      json.error_description || json.error || `HTTP ${res.status}`;
    throw new Error(`Google token exchange failed: ${detail}`);
  }

  return {
    idToken: json.id_token,
    ...(json.access_token ? { accessToken: json.access_token } : {}),
  };
}
