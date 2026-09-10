import type { Locale } from "@/lib/i18n/translations";

export const NOTIF_IDS = {
  streakGuard: "stack.streak-guard",
  softNudge: "stack.soft-nudge",
  dailyGoal: "stack.daily-goal",
} as const;

export async function getNotificationPermissionGranted(): Promise<boolean> {
  return false;
}

export async function requestNotificationPermission(): Promise<boolean> {
  return false;
}

export async function cancelStackNotifications(): Promise<void> {}

export type NotificationSyncInput = {
  enabled: boolean;
  locale: Locale;
  streak: number;
  lastActiveDate: string | null;
  xpToday: number;
  dailyGoal: number;
};

/** Web: local push reminders are unsupported — no-op (avoids expo-notifications warning). */
export async function syncNotificationSchedule(
  _input: NotificationSyncInput
): Promise<void> {}

export async function refreshNotificationSchedule(_getState: {
  notificationsEnabled: boolean;
  locale: Locale;
  streak: number;
  lastActiveDate: string | null;
  xpToday: number;
  dailyGoal: number;
}): Promise<void> {}
