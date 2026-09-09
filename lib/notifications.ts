import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

import type { Locale } from "@/lib/i18n/translations";
import { todayKey } from "@/lib/level";

/** Stable ids so we never stack the same reminder. */
export const NOTIF_IDS = {
  streakGuard: "stack.streak-guard",
  softNudge: "stack.soft-nudge",
  dailyGoal: "stack.daily-goal",
} as const;

const CHANNEL_ID = "stack-reminders";
const LAST_SOFT_KEY = "stack.notifications.lastSoftDay";

/** Evening streak reminder — local time. */
const STREAK_HOUR = 20;
const STREAK_MINUTE = 0;
/** Soft nudge — local time, quieter than streak. */
const SOFT_HOUR = 18;
const SOFT_MINUTE = 0;
/** Daily XP goal reminder if not yet reached. */
const GOAL_HOUR = 17;
const GOAL_MINUTE = 0;
/** Never notify after this local hour. */
const QUIET_AFTER_HOUR = 21;
/** Soft nudge at most once every N calendar days. */
const SOFT_MIN_GAP_DAYS = 3;
/** Soft nudge only after this many inactive days. */
const SOFT_INACTIVE_DAYS = 2;

type Copy = { title: string; body: string };

function localDateKey(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function addDaysLocal(base: Date, days: number): Date {
  const d = new Date(base);
  d.setDate(d.getDate() + days);
  return d;
}

function atLocalTime(
  day: Date,
  hour: number,
  minute: number
): Date {
  const d = new Date(day);
  d.setHours(hour, minute, 0, 0);
  return d;
}

function daysBetweenLocal(a: string, b: string): number {
  const ms = Date.parse(`${b}T12:00:00`) - Date.parse(`${a}T12:00:00`);
  return Math.round(ms / (24 * 60 * 60 * 1000));
}

function practicedToday(lastActiveDate: string | null): boolean {
  if (!lastActiveDate) return false;
  // Learning store uses UTC `todayKey`; also accept local calendar day.
  return lastActiveDate === todayKey() || lastActiveDate === localDateKey();
}

function streakCopy(locale: Locale, streak: number): Copy {
  if (locale === "en") {
    return {
      title: "Your streak is at risk",
      body:
        streak <= 1
          ? "A short lesson tonight is enough to keep it going."
          : `A little time remains to keep your ${streak}-day streak.`,
    };
  }
  return {
    title: "Ta série est en jeu",
    body:
      streak <= 1
        ? "Une courte leçon ce soir suffit pour la prolonger."
        : `Il te reste encore un peu de temps pour garder ta série de ${streak} jours.`,
  };
}

function softCopy(locale: Locale): Copy {
  if (locale === "en") {
    return {
      title: "Pick up where you left off",
      body: "A short session is enough to move forward, at your own pace.",
    };
  }
  return {
    title: "Reprendre où tu en étais",
    body: "Une session courte suffit pour avancer, sans pression.",
  };
}

function dailyGoalCopy(
  locale: Locale,
  xpToday: number,
  dailyGoal: number
): Copy {
  const left = Math.max(dailyGoal - xpToday, 0);
  if (locale === "en") {
    return {
      title: "Daily goal still open",
      body:
        left > 0
          ? `${left} XP left to hit today's goal. A quick lesson is enough.`
          : "You're close — finish a short lesson to lock the day.",
    };
  }
  return {
    title: "Objectif du jour encore ouvert",
    body:
      left > 0
        ? `Il te reste ${left} XP pour l’objectif. Une courte leçon suffit.`
        : "Tu y es presque — une courte leçon pour valider la journée.",
  };
}

function isNativeSupported(): boolean {
  return Platform.OS === "ios" || Platform.OS === "android";
}

async function ensureAndroidChannel() {
  if (Platform.OS !== "android") return;
  await Notifications.setNotificationChannelAsync(CHANNEL_ID, {
    name: "Reminders",
    importance: Notifications.AndroidImportance.DEFAULT,
    vibrationPattern: [0, 120],
    lightColor: "#2563EB",
    bypassDnd: false,
  });
}

export async function getNotificationPermissionGranted(): Promise<boolean> {
  if (!isNativeSupported()) return false;
  const current = await Notifications.getPermissionsAsync();
  return (
    current.granted ||
    current.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
  );
}

/** Ask OS permission. Returns true only if granted (or provisional on iOS). */
export async function requestNotificationPermission(): Promise<boolean> {
  if (!isNativeSupported()) return false;

  const current = await Notifications.getPermissionsAsync();
  if (
    current.granted ||
    current.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
  ) {
    return true;
  }

  if (!current.canAskAgain) return false;

  const next = await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
    },
  });
  return (
    next.granted ||
    next.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
  );
}

export async function cancelStackNotifications() {
  if (!isNativeSupported()) return;
  for (const id of Object.values(NOTIF_IDS)) {
    try {
      await Notifications.cancelScheduledNotificationAsync(id);
    } catch {
      /* not scheduled */
    }
  }
}

function canUseTriggerApi(): boolean {
  // Expo Go on Android has limited notification support in recent SDKs.
  if (Platform.OS === "android" && Constants.appOwnership === "expo") {
    return false;
  }
  return isNativeSupported();
}

async function scheduleOnce(
  id: string,
  when: Date,
  copy: Copy
): Promise<boolean> {
  if (when.getTime() <= Date.now() + 15_000) return false;
  if (when.getHours() >= QUIET_AFTER_HOUR) return false;

  await Notifications.scheduleNotificationAsync({
    identifier: id,
    content: {
      title: copy.title,
      body: copy.body,
      sound: true,
      ...(Platform.OS === "android" ? { channelId: CHANNEL_ID } : {}),
      data: { type: id },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DATE,
      date: when,
      ...(Platform.OS === "android" ? { channelId: CHANNEL_ID } : {}),
    },
  });
  return true;
}

export type NotificationSyncInput = {
  enabled: boolean;
  locale: Locale;
  streak: number;
  lastActiveDate: string | null;
  xpToday: number;
  dailyGoal: number;
};

/**
 * Rebuild the local schedule from learning + privacy state.
 * Intentionally sparse: at most one reminder per day, quiet evenings.
 */
export async function syncNotificationSchedule(
  input: NotificationSyncInput
): Promise<void> {
  if (!canUseTriggerApi()) return;

  try {
    await cancelStackNotifications();

    if (!input.enabled) return;

    const granted = await getNotificationPermissionGranted();
    if (!granted) return;

    await ensureAndroidChannel();

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowBanner: true,
        shouldShowList: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    const now = new Date();
    const todayLocal = localDateKey(now);
    const didPractice = practicedToday(input.lastActiveDate);
    const goalMet =
      input.dailyGoal > 0 && input.xpToday >= input.dailyGoal;

    // --- Streak guard (priority) ---
    if (input.streak >= 1 && !didPractice) {
      let when = atLocalTime(now, STREAK_HOUR, STREAK_MINUTE);
      if (when.getTime() <= now.getTime()) {
        // Same evening catch-up, still before quiet hours.
        when = new Date(now.getTime() + 45 * 60 * 1000);
      }
      if (when.getHours() < QUIET_AFTER_HOUR) {
        const ok = await scheduleOnce(
          NOTIF_IDS.streakGuard,
          when,
          streakCopy(input.locale, input.streak)
        );
        if (ok) return; // Max one notif / day — streak wins.
      }
    }

    // --- Daily goal reminder (if streak ok / already practiced) ---
    if (!goalMet && input.dailyGoal > 0) {
      let goalWhen = atLocalTime(now, GOAL_HOUR, GOAL_MINUTE);
      if (goalWhen.getTime() <= now.getTime()) {
        goalWhen = new Date(now.getTime() + 30 * 60 * 1000);
      }
      if (goalWhen.getHours() < QUIET_AFTER_HOUR) {
        const ok = await scheduleOnce(
          NOTIF_IDS.dailyGoal,
          goalWhen,
          dailyGoalCopy(input.locale, input.xpToday, input.dailyGoal)
        );
        if (ok) return;
      }
    }

    // --- Soft nudge (only if no streak/goal reminder) ---
    const lastActive = input.lastActiveDate ?? "1970-01-01";
    const inactiveDays = Math.max(
      daysBetweenLocal(lastActive.slice(0, 10), todayLocal),
      0
    );
    if (inactiveDays < SOFT_INACTIVE_DAYS) return;

    const lastSoft = (await AsyncStorage.getItem(LAST_SOFT_KEY)) ?? "";
    if (lastSoft) {
      const gap = daysBetweenLocal(lastSoft, todayLocal);
      if (gap < SOFT_MIN_GAP_DAYS) return;
    }

    let softDay = now;
    let softWhen = atLocalTime(softDay, SOFT_HOUR, SOFT_MINUTE);
    if (softWhen.getTime() <= now.getTime()) {
      softDay = addDaysLocal(now, 1);
      softWhen = atLocalTime(softDay, SOFT_HOUR, SOFT_MINUTE);
    }

    const scheduled = await scheduleOnce(
      NOTIF_IDS.softNudge,
      softWhen,
      softCopy(input.locale)
    );
    if (scheduled) {
      await AsyncStorage.setItem(LAST_SOFT_KEY, localDateKey(softDay));
    }
  } catch (err) {
    console.warn("[notifications] sync failed", err);
  }
}

/** Convenience: read stores and reschedule. */
export async function refreshNotificationSchedule(getState: {
  notificationsEnabled: boolean;
  locale: Locale;
  streak: number;
  lastActiveDate: string | null;
  xpToday: number;
  dailyGoal: number;
}) {
  await syncNotificationSchedule({
    enabled: getState.notificationsEnabled,
    locale: getState.locale,
    streak: getState.streak,
    lastActiveDate: getState.lastActiveDate,
    xpToday: getState.xpToday,
    dailyGoal: getState.dailyGoal,
  });
}
