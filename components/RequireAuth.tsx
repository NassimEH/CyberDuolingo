import { Redirect } from "expo-router";
import type { ReactNode } from "react";

import { useOnboardingStore } from "@/store/onboardingStore";
import { useSessionStore } from "@/store/sessionStore";

type Props = {
  children: ReactNode;
};

/**
 * Protects screens using persisted/optimistic session.
 * No spinner — cold start stays instant; invalid sessions redirect after verify.
 */
export function RequireAuth({ children }: Props) {
  const isSignedIn = useSessionStore((s) => s.isSignedIn);
  const authReady = useSessionStore((s) => s.authReady);
  const hasSeenProductTour = useOnboardingStore((s) => s.hasSeenProductTour);

  if (!isSignedIn) {
    // Still booting stores: keep blank under splash instead of a spinner.
    if (!authReady) return null;
    return (
      <Redirect
        href={hasSeenProductTour ? "/(auth)/sign-in" : "/onboarding"}
      />
    );
  }

  return <>{children}</>;
}
