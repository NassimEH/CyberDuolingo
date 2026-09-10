import { useCallback, useEffect, useState } from "react";
import { Platform } from "react-native";

import { isAppleAuthAvailable, promptAppleIdToken } from "@/lib/appleAuth";
import { useSessionStore } from "@/store/sessionStore";

/**
 * Sign in with Apple (iOS native → Stack backend JWT verify → session).
 * Email/password and Google continue to use Neon Auth unchanged.
 */
export function useAppleAuth() {
  const signInWithAppleIdToken = useSessionStore((s) => s.signInWithAppleIdToken);
  const [loading, setLoading] = useState(false);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void isAppleAuthAvailable().then((ok) => {
      if (!cancelled) setAvailable(ok);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const signInWithApple = useCallback(async (): Promise<{ error?: string }> => {
    if (Platform.OS !== "ios") {
      return {
        error: "Sign in with Apple est disponible uniquement sur iOS.",
      };
    }

    setLoading(true);
    try {
      const prompted = await promptAppleIdToken();
      if (prompted.error || !prompted.idToken) {
        // User dismiss: stay on screen, no error toast.
        if (prompted.error === "Connexion Apple annulée.") {
          return {};
        }
        return { error: prompted.error ?? "Connexion Apple impossible." };
      }
      return await signInWithAppleIdToken({
        idToken: prompted.idToken,
        nonce: prompted.nonce,
        fullName: prompted.fullName,
      });
    } finally {
      setLoading(false);
    }
  }, [signInWithAppleIdToken]);

  return { signInWithApple, loading, available };
}
