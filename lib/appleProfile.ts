/**
 * Client-safe helpers for Apple profile display.
 * Keep free of Node-only imports — used from screens.
 *
 * App Store Guideline 4 / Sign in with Apple:
 * Do NOT require name or email after SIWA when Authentication Services
 * already provided them (including Hide My Email / private relay).
 */

export function isApplePrivateRelayEmail(
  email: string | null | undefined
): boolean {
  return Boolean(email?.toLowerCase().endsWith("@privaterelay.appleid.com"));
}

/**
 * @deprecated Display-only heuristic. Never use to block Sign in with Apple.
 */
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

/**
 * Never force a post-SIWA profile form (Apple Guideline 4).
 * Name + email from Authentication Services (incl. private relay) are enough.
 */
export function needsAppleProfileCompletion(_input: {
  authProvider: string | null | undefined;
  firstName: string | null | undefined;
  email: string | null | undefined;
}): boolean {
  return false;
}
