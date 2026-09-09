import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

import { useSessionStore } from "@/store/sessionStore";
import { useTrackStore } from "@/store/trackStore";

/**
 * Instant routing from persisted session/track.
 * Neon session verification runs in the background (NeonSessionBridge).
 */
export default function Index() {
  const isSignedIn = useSessionStore((s) => s.isSignedIn);
  const selectedTrack = useTrackStore((s) => s.selectedTrack);
  const [bootReady, setBootReady] = useState(
    () =>
      useSessionStore.persist.hasHydrated() &&
      useTrackStore.persist.hasHydrated()
  );

  useEffect(() => {
    if (bootReady) return;

    const finish = () => {
      if (
        useSessionStore.persist.hasHydrated() &&
        useTrackStore.persist.hasHydrated()
      ) {
        setBootReady(true);
      }
    };

    finish();
    const unsubSession = useSessionStore.persist.onFinishHydration(finish);
    const unsubTrack = useTrackStore.persist.onFinishHydration(finish);
    // Failsafe: never spin; native splash covers the brief gap.
    const timer = setTimeout(() => setBootReady(true), 250);

    return () => {
      unsubSession();
      unsubTrack();
      clearTimeout(timer);
    };
  }, [bootReady]);

  // Keep native splash visible — no ActivityIndicator.
  if (!bootReady) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  if (!selectedTrack) {
    return <Redirect href="/language-select" />;
  }

  return <Redirect href="/(tabs)" />;
}
