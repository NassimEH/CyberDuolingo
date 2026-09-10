import * as AppleAuthentication from "expo-apple-authentication";
import * as Crypto from "expo-crypto";
import { Platform } from "react-native";

/** Sign in with Apple is an iOS capability (required with Google for App Store 4.8). */
export async function isAppleAuthAvailable(): Promise<boolean> {
  if (Platform.OS !== "ios") return false;
  try {
    return await AppleAuthentication.isAvailableAsync();
  } catch {
    return false;
  }
}

export async function promptAppleIdToken(): Promise<{
  idToken?: string;
  nonce?: string;
  email?: string | null;
  fullName?: string | null;
  error?: string;
}> {
  if (Platform.OS !== "ios") {
    return {
      error: "Sign in with Apple est disponible uniquement sur iPhone / iPad.",
    };
  }

  const available = await AppleAuthentication.isAvailableAsync();
  if (!available) {
    return {
      error: "Sign in with Apple n’est pas disponible sur cet appareil.",
    };
  }

  const nonce = Crypto.randomUUID();

  try {
    const credential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ],
      nonce,
    });

    if (!credential.identityToken) {
      return { error: "Apple n’a pas renvoyé de jeton d’identité." };
    }

    const given = credential.fullName?.givenName?.trim() ?? "";
    const family = credential.fullName?.familyName?.trim() ?? "";
    const fullName = [given, family].filter(Boolean).join(" ") || null;

    return {
      idToken: credential.identityToken,
      nonce,
      email: credential.email,
      fullName,
    };
  } catch (err) {
    const code =
      err && typeof err === "object" && "code" in err
        ? String((err as { code?: string }).code)
        : "";
    if (code === "ERR_REQUEST_CANCELED") {
      return { error: "Connexion Apple annulée." };
    }
    const message =
      err instanceof Error ? err.message : "Connexion Apple impossible.";
    return { error: message };
  }
}
