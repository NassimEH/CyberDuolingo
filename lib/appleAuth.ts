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

/**
 * Cryptographically random nonce for Apple Sign-In.
 * Passed raw to ASAuthorizationAppleIDRequest — iOS SHA-256-hashes it before
 * sending to Apple; the hash appears in the identity token `nonce` claim.
 */
async function createAppleNonce(): Promise<string> {
  const bytes = await Crypto.getRandomBytesAsync(16);
  let binary = "";
  for (let i = 0; i < bytes.length; i += 1) {
    binary += String.fromCharCode(bytes[i]!);
  }
  if (typeof globalThis.btoa === "function") {
    return globalThis
      .btoa(binary)
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  }
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

function pickNamePart(value: string | null | undefined): string {
  return value?.trim() ?? "";
}

export async function promptAppleIdToken(): Promise<{
  idToken?: string;
  nonce?: string;
  email?: string | null;
  givenName?: string | null;
  familyName?: string | null;
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

  const nonce = await createAppleNonce();

  try {
    const credential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ],
      // Raw nonce — iOS hashes with SHA-256 before Apple; do NOT pre-hash.
      nonce,
    });

    if (!credential.identityToken) {
      return { error: "Apple n’a pas renvoyé de jeton d’identité." };
    }

    const givenName = pickNamePart(credential.fullName?.givenName) || null;
    const familyName = pickNamePart(credential.fullName?.familyName) || null;
    const fullName =
      [givenName, familyName].filter(Boolean).join(" ") || null;

    return {
      idToken: credential.identityToken,
      nonce,
      // Only present on first authorization (or when user shares email).
      email: credential.email ?? null,
      givenName,
      familyName,
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
