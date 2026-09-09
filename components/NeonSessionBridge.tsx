import { useEffect, useRef } from "react";

import { scheduleRemoteSync } from "@/lib/remoteSync";
import { useCertificationStore } from "@/store/certificationStore";
import { useLearningStore } from "@/store/learningStore";
import { useLocaleStore } from "@/store/localeStore";
import { useOnboardingStore } from "@/store/onboardingStore";
import { usePrivacyStore } from "@/store/privacyStore";
import { useSessionStore } from "@/store/sessionStore";
import { useThemeStore } from "@/store/themeStore";
import { useTrackStore } from "@/store/trackStore";
import { useUnitStore } from "@/store/unitStore";

/** Hydrate Neon Auth session once, then debounce progress sync to Postgres. */
export function NeonSessionBridge() {
  const hydrateFromNeon = useSessionStore((s) => s.hydrateFromNeon);
  const userId = useSessionStore((s) => s.userId);
  const isSignedIn = useSessionStore((s) => s.isSignedIn);
  const hydratedOnce = useRef(false);

  useEffect(() => {
    if (hydratedOnce.current) return;
    hydratedOnce.current = true;
    void hydrateFromNeon();
  }, [hydrateFromNeon]);

  useEffect(() => {
    if (!isSignedIn || !userId) return;

    const sync = () => scheduleRemoteSync(userId);
    const unsubs = [
      useLearningStore.subscribe(sync),
      useCertificationStore.subscribe(sync),
      useTrackStore.subscribe(sync),
      useUnitStore.subscribe(sync),
      useLocaleStore.subscribe(sync),
      useThemeStore.subscribe(sync),
      usePrivacyStore.subscribe(sync),
      useOnboardingStore.subscribe(sync),
    ];

    return () => {
      for (const unsub of unsubs) unsub();
    };
  }, [isSignedIn, userId]);

  return null;
}
