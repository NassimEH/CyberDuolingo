import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

import { useOnboardingStore } from "@/store/onboardingStore";
import { useSessionStore } from "@/store/sessionStore";
import { useTrackStore } from "@/store/trackStore";

/**
 * Instant routing from persisted session/track/onboarding.
 * Neon session verification runs in the background (NeonSessionBridge).
 */
export default function Index() {
  const isSignedIn = useSessionStore((s) => s.isSignedIn);
  const selectedTrack = useTrackStore((s) => s.selectedTrack);
  const hasSeenProductTour = useOnboardingStore((s) => s.hasSeenProductTour);
  const [bootReady, setBootReady] = useState(
    () =>
      useSessionStore.persist.hasHydrated() &&
      useTrackStore.persist.hasHydrated() &&
      useOnboardingStore.persist.hasHydrated()
  );

  useEffect(() => {
    if (bootReady) return;

    const finish = () => {
      if (
        useSessionStore.persist.hasHydrated() &&
        useTrackStore.persist.hasHydrated() &&
        useOnboardingStore.persist.hasHydrated()
      ) {
        setBootReady(true);
      }
    };

    finish();
    const unsubSession = useSessionStore.persist.onFinishHydration(finish);
    const unsubTrack = useTrackStore.persist.onFinishHydration(finish);
    const unsubOnboarding =
      useOnboardingStore.persist.onFinishHydration(finish);
    const timer = setTimeout(() => setBootReady(true), 250);

    return () => {
      unsubSession();
      unsubTrack();
      unsubOnboarding();
      clearTimeout(timer);
    };
  }, [bootReady]);

  if (!bootReady) {
    return null;
  }

  if (!isSignedIn) {
    // After the product tour, send users to auth — not back to slide 1.
    return (
      <Redirect
        href={hasSeenProductTour ? "/(auth)/sign-in" : "/onboarding"}
      />
    );
  }

  if (!selectedTrack) {
    return <Redirect href="/language-select" />;
  }

  return <Redirect href="/(tabs)" />;
}
