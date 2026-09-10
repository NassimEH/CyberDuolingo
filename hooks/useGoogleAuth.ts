import { useCallback, useState } from "react";

import { useSessionStore } from "@/store/sessionStore";

/**
 * Google sign-in via Neon Managed Auth browser OAuth (`signIn.social`).
 *
 * We intentionally do NOT use expo-auth-session + Web Client ID on native:
 * Google returns Error 400 invalid_request ("doesn't comply with OAuth 2.0 policy")
 * when a Web client is paired with a custom / Expo redirect scheme.
 *
 * Neon Auth redirects to Google with an HTTPS callback, which is policy-compliant.
 */
export function useGoogleAuth() {
  const signInWithGoogleWeb = useSessionStore((s) => s.signInWithGoogleWeb);
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = useCallback(async (): Promise<{ error?: string }> => {
    setLoading(true);
    try {
      return await signInWithGoogleWeb();
    } finally {
      setLoading(false);
    }
  }, [signInWithGoogleWeb]);

  return { signInWithGoogle, loading };
}
