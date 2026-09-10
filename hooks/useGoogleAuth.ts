import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { Platform } from "react-native";
import { useCallback, useState } from "react";

import { apiFetch } from "@/lib/api";
import {
  getGoogleNativeRedirectUri,
  getGoogleWebClientId,
} from "@/lib/googleAuth";
import { useSessionStore } from "@/store/sessionStore";

WebBrowser.maybeCompleteAuthSession();

const GOOGLE_AUTH_ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth";

const GOOGLE_SCOPES = [
  "openid",
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email",
].join(" ");

function randomNonce(bytes = 16): string {
  const alphabet = "abcdef0123456789";
  let out = "";
  for (let i = 0; i < bytes * 2; i += 1) {
    out += alphabet[Math.floor(Math.random() * alphabet.length)]!;
  }
  return out;
}

function buildOAuthState(appReturnUrl: string): string {
  return `${randomNonce()}.${encodeURIComponent(appReturnUrl)}`;
}

function getQueryParam(url: string, key: string): string | null {
  const parsed = Linking.parse(url);
  const fromLink = parsed.queryParams?.[key];
  if (typeof fromLink === "string" && fromLink.length > 0) {
    return fromLink;
  }
  if (Array.isArray(fromLink) && typeof fromLink[0] === "string") {
    return fromLink[0];
  }

  const qIndex = url.indexOf("?");
  if (qIndex < 0) return null;
  return new URLSearchParams(url.slice(qIndex + 1)).get(key);
}

function buildGoogleAuthUrl(input: {
  clientId: string;
  redirectUri: string;
  state: string;
}): string {
  const params = new URLSearchParams({
    client_id: input.clientId,
    redirect_uri: input.redirectUri,
    response_type: "code",
    scope: GOOGLE_SCOPES,
    state: input.state,
    include_granted_scopes: "true",
  });
  return `${GOOGLE_AUTH_ENDPOINT}?${params.toString()}`;
}

/**
 * Native Google → HTTPS OAuth → ticket → Stack session (same pattern as Apple).
 * Neon Managed Auth ignores idToken and only returns browser OAuth redirects.
 */
async function promptNativeGoogleStackSession(): Promise<
  | {
      accessToken: string;
      user: {
        id: string;
        email: string | null;
        firstName: string | null;
        avatarUri: string | null;
      };
    }
  | { error: string }
> {
  const clientId = getGoogleWebClientId();
  if (!clientId) {
    return {
      error:
        "Ajoute EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID dans .env.local (même ID que Neon Auth → Google).",
    };
  }

  const redirectUri = getGoogleNativeRedirectUri();
  if (!/^https:\/\//i.test(redirectUri)) {
    return {
      error:
        "EXPO_PUBLIC_API_BASE_URL doit être une URL HTTPS pour Google sur mobile.",
    };
  }

  const appReturnUrl = Linking.createURL("oauth/google");
  const state = buildOAuthState(appReturnUrl);
  const authUrl = buildGoogleAuthUrl({ clientId, redirectUri, state });

  const result = await WebBrowser.openAuthSessionAsync(authUrl, appReturnUrl, {
    showInRecents: true,
  });

  if (result.type === "cancel" || result.type === "dismiss") {
    return { error: "Connexion Google annulée." };
  }
  if (result.type !== "success" || !("url" in result) || !result.url) {
    return {
      error:
        "Connexion Google refusée. Ajoute cette URI dans Google Cloud → Client Web : " +
        redirectUri,
    };
  }

  const oauthError = getQueryParam(result.url, "error");
  if (oauthError) {
    const detail = getQueryParam(result.url, "detail");
    const base = `Connexion Google refusée (${oauthError}).`;
    return { error: detail ? `${base} ${detail}` : base };
  }

  const ticket = getQueryParam(result.url, "gt");
  if (!ticket) {
    return { error: "Ticket Google manquant. Relance avec npx expo start -c." };
  }

  const finishRes = await apiFetch("/api/auth/google/finish", {
    method: "POST",
    body: JSON.stringify({ ticket }),
  });

  const payload = (await finishRes.json().catch(() => ({}))) as {
    accessToken?: string;
    user?: {
      id: string;
      email: string | null;
      firstName: string | null;
      avatarUri: string | null;
    };
    error?: string;
  };

  if (!finishRes.ok || !payload.accessToken || !payload.user?.id) {
    return {
      error:
        payload.error ||
        "Impossible de finaliser la connexion Google (ticket expiré ?).",
    };
  }

  return {
    accessToken: payload.accessToken,
    user: {
      id: payload.user.id,
      email: payload.user.email,
      firstName: payload.user.firstName,
      avatarUri: payload.user.avatarUri,
    },
  };
}

export function useGoogleAuth() {
  const signInWithGoogleWeb = useSessionStore((s) => s.signInWithGoogleWeb);
  const signInWithGoogleStackSession = useSessionStore(
    (s) => s.signInWithGoogleStackSession
  );
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = useCallback(async (): Promise<{ error?: string }> => {
    setLoading(true);
    try {
      if (Platform.OS === "web") {
        if (!getGoogleWebClientId()) {
          return {
            error:
              "Ajoute EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID dans .env.local (même ID que Neon Auth → Google).",
          };
        }
        return await signInWithGoogleWeb();
      }

      const prompted = await promptNativeGoogleStackSession();
      if ("error" in prompted) {
        return { error: prompted.error };
      }
      return await signInWithGoogleStackSession(prompted);
    } finally {
      setLoading(false);
    }
  }, [signInWithGoogleStackSession, signInWithGoogleWeb]);

  return { signInWithGoogle, loading };
}
