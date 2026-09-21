/**
 * Client-safe helpers for Apple profile completeness.
 * (Keep free of Node-only imports — used from screens.)
 */

export function isApplePrivateRelayEmail(
  email: string | null | undefined
): boolean {
  return Boolean(email?.toLowerCase().endsWith("@privaterelay.appleid.com"));
}

export function isPlaceholderAppleName(
  firstName: string | null | undefined,
  email?: string | null
): boolean {
  const name = firstName?.trim();
  if (!name || name === "Learner") return true;
  if (
    email &&
    isApplePrivateRelayEmail(email) &&
    name === email.split("@")[0]
  ) {
    return true;
  }
  return false;
}

/** True when Apple hid name and/or email — user must complete Stack profile. */
export function needsAppleProfileCompletion(input: {
  authProvider: string | null | undefined;
  firstName: string | null | undefined;
  email: string | null | undefined;
}): boolean {
  if (input.authProvider !== "apple") return false;
  return (
    isPlaceholderAppleName(input.firstName, input.email) ||
    !input.email?.includes("@") ||
    isApplePrivateRelayEmail(input.email)
  );
}
