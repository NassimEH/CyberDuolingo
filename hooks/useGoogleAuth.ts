import * as Application from "expo-application";
import {
  AuthRequest,
  AccessTokenRequest,
  makeRedirectUri,
  ResponseType,
  type AuthRequestPromptOptions,
} from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { Platform } from "react-native";
import { useCallback, useState } from "react";

import {
  getGoogleAndroidClientId,
  getGoogleIosClientId,
  getGoogleWebClientId,
} from "@/lib/googleAuth";
import { useSessionStore } from "@/store/sessionStore";

WebBrowser.maybeCompleteAuthSession();

const googleDiscovery = {
  authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
  tokenEndpoint: "https://oauth2.googleapis.com/token",
  revocationEndpoint: "https://oauth2.googleapis.com/revoke",
  userInfoEndpoint: "https://openidconnect.googleapis.com/v1/userinfo",
} as const;

const GOOGLE_SCOPES = [
  "openid",
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email",
];

function getNativeGoogleClientId(): string {
  if (Platform.OS === "ios") return getGoogleIosClientId();
  if (Platform.OS === "android") return getGoogleAndroidClientId();
  return "";
}

/**
 * Imperative Google ID-token prompt (no useIdTokenAuthRequest hook).
 * Avoids render-time crash when EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID is missing.
 */
async function promptNativeGoogleIdToken(): Promise<
  { idToken: string } | { error: string }
> {
  const clientId = getNativeGoogleClientId();
  if (!clientId) {
    return {
      error:
        "Sur iPhone il faut EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID (client OAuth type iOS dans Google Cloud, Bundle ID me.nassimelh.stack). EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID sert au web / Neon, pas au téléphone. Crée le client iOS, ajoute la variable, relance avec npx expo start -c. En attendant teste Google sur le navigateur (localhost).",
    };
  }

  const redirectUri = makeRedirectUri({
    native: `${Application.applicationId ?? "me.nassimelh.stack"}:/oauthredirect`,
  });

  const request = new AuthRequest({
    clientId,
    scopes: GOOGLE_SCOPES,
    redirectUri,
    responseType: ResponseType.Code,
    usePKCE: true,
    extraParams: {},
  });

  await request.makeAuthUrlAsync(googleDiscovery);

  const promptOptions: AuthRequestPromptOptions = {
    showInRecents: true,
  };
  const result = await request.promptAsync(googleDiscovery, promptOptions);

  if (result.type === "cancel" || result.type === "dismiss") {
    return { error: "Connexion Google annulée." };
  }
  if (result.type !== "success") {
    return { error: "Connexion Google impossible." };
  }

  const code = result.params.code;
  if (!code) {
    return { error: "Google n’a pas renvoyé de code d’autorisation." };
  }

  const token = await new AccessTokenRequest({
    clientId,
    code,
    redirectUri,
    scopes: GOOGLE_SCOPES,
    extraParams: {
      code_verifier: request.codeVerifier ?? "",
    },
  }).performAsync(googleDiscovery);

  const idToken = token.idToken;
  if (!idToken) {
    return {
      error:
        "Google n’a pas renvoyé d’id_token. Vérifie que le Client ID est bien de type iOS (pas Web).",
    };
  }

  return { idToken };
}

/**
 * Google sign-in:
 * - Web → Neon Managed Auth (`signIn.social`) — uses WEB client ID
 * - Native → Google ID token then Neon — needs IOS/ANDROID client ID
 */
export function useGoogleAuth() {
  const signInWithGoogleWeb = useSessionStore((s) => s.signInWithGoogleWeb);
  const signInWithGoogleIdToken = useSessionStore(
    (s) => s.signInWithGoogleIdToken
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

      const prompted = await promptNativeGoogleIdToken();
      if ("error" in prompted) {
        return { error: prompted.error };
      }
      return await signInWithGoogleIdToken(prompted.idToken);
    } finally {
      setLoading(false);
    }
  }, [signInWithGoogleIdToken, signInWithGoogleWeb]);

  return { signInWithGoogle, loading };
}
