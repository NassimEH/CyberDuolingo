import * as Google from "expo-auth-session/providers/google";
import { Platform } from "react-native";
import { useCallback, useState } from "react";

import {
  getGoogleIdTokenAuthConfig,
  getGoogleWebClientId,
  isGoogleNativeConfigured,
} from "@/lib/googleAuth";
import { useSessionStore } from "@/store/sessionStore";

/**
 * Google sign-in:
 * - Web → Neon Managed Auth browser redirect (`signIn.social`)
 * - Native → Google ID token via expo-auth-session, then Neon `idToken` sign-in
 *   (Neon Auth has no `/expo-authorization-proxy`, so the Expo OAuth proxy flow cannot be used)
 */
export function useGoogleAuth() {
  const signInWithGoogleWeb = useSessionStore((s) => s.signInWithGoogleWeb);
  const signInWithGoogleIdToken = useSessionStore(
    (s) => s.signInWithGoogleIdToken
  );
  const [loading, setLoading] = useState(false);

  const config = getGoogleIdTokenAuthConfig();
  const [, , promptAsync] = Google.useIdTokenAuthRequest(
    Platform.OS === "web" ? {} : config
  );

  const signInWithGoogle = useCallback(async (): Promise<{ error?: string }> => {
    setLoading(true);
    try {
      if (Platform.OS === "web") {
        return await signInWithGoogleWeb();
      }

      if (!isGoogleNativeConfigured()) {
        return {
          error:
            "Ajoute EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID dans .env.local (Client ID Google public, le même que dans Neon), puis relance Expo.",
        };
      }

      if (!getGoogleWebClientId() && !config.iosClientId && !config.androidClientId) {
        return {
          error:
            "Client ID Google manquant. Vérifie EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID.",
        };
      }

      const result = await promptAsync();
      if (result.type === "cancel" || result.type === "dismiss") {
        return { error: "Connexion Google annulée." };
      }
      if (result.type !== "success") {
        return { error: "Connexion Google impossible." };
      }

      const idToken =
        "params" in result
          ? (result.params.id_token as string | undefined)
          : undefined;
      if (!idToken) {
        return {
          error:
            "Google n’a pas renvoyé d’id_token. Vérifie le type de client OAuth (Web) et les Client IDs.",
        };
      }

      return await signInWithGoogleIdToken(idToken);
    } finally {
      setLoading(false);
    }
  }, [promptAsync, signInWithGoogleIdToken, signInWithGoogleWeb, config.androidClientId, config.iosClientId]);

  return { signInWithGoogle, loading };
}
