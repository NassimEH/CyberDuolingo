import { useEffect, useRef } from "react";
import { AppState, Platform } from "react-native";

import { syncNotificationSchedule } from "@/lib/notifications";
import { useLearningStore } from "@/store/learningStore";
import { useLocaleStore } from "@/store/localeStore";
import { usePrivacyStore } from "@/store/privacyStore";

/**
 * Keeps local reminder schedule aligned with privacy + streak state.
 * No-op on web.
 */
export function NotificationScheduler() {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (Platform.OS === "web") return;

    const run = () => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        const privacy = usePrivacyStore.getState();
        const learning = useLearningStore.getState();
        const locale = useLocaleStore.getState().locale;
        void syncNotificationSchedule({
          enabled: privacy.notificationsEnabled,
          locale,
          streak: learning.streak,
          lastActiveDate: learning.lastActiveDate,
          xpToday: learning.xpToday,
          dailyGoal: learning.dailyGoal,
        });
      }, 400);
    };

    run();

    const unsubs = [
      usePrivacyStore.subscribe(run),
      useLearningStore.subscribe(run),
      useLocaleStore.subscribe(run),
    ];

    const appSub = AppState.addEventListener("change", (state) => {
      if (state === "active") run();
    });

    return () => {
      if (timer.current) clearTimeout(timer.current);
      for (const unsub of unsubs) unsub();
      appSub.remove();
    };
  }, []);

  return null;
}
