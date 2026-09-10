import type { AchievementId } from "@/data/achievements";
import type { SkillId } from "@/data/skills";
import { getTrack } from "@/data/tracks";
import { apiFetch } from "@/lib/api";
import { getAppleAccessToken } from "@/lib/appleSession";
import { cacheAvatarLocally, readCachedAvatar } from "@/lib/avatar";
import { authClient, db, isNeonConfigured } from "@/lib/neon";
import type { ActivityLog, LabSessionProgress } from "@/store/learningStore";
import { useCertificationStore } from "@/store/certificationStore";
import { useLearningStore } from "@/store/learningStore";
import { useLocaleStore } from "@/store/localeStore";
import { useOnboardingStore } from "@/store/onboardingStore";
import { usePrivacyStore } from "@/store/privacyStore";
import { getSessionBridge } from "@/lib/sessionBridge";
import { useSyncStore } from "@/store/syncStore";
import { useThemeStore } from "@/store/themeStore";
import { useTrackStore } from "@/store/trackStore";
import { useUnitStore } from "@/store/unitStore";
import type { UserCertEntry } from "@/types/certification";
import type { TrackId } from "@/types/learning";
import NetInfo from "@react-native-community/netinfo";
import { Platform } from "react-native";

function isAppleSession(): boolean {
  return getSessionBridge().getState().authProvider === "apple";
}

function canSyncRemote(): boolean {
  return isAppleSession() || isNeonConfigured();
}

type ProfileRow = {
  user_id: string;
  email: string | null;
  first_name: string | null;
  avatar_url: string | null;
  selected_track: string | null;
  locale: string;
  dark_mode: boolean;
  sound_enabled: boolean;
  analytics_enabled: boolean;
  notifications_enabled: boolean;
  has_seen_product_tour: boolean;
};

type LearningRow = {
  user_id: string;
  total_xp: number;
  xp_today: number;
  daily_goal: number;
  streak: number;
  streak_freezes: number;
  last_active_date: string | null;
  completed_lesson_ids: string[];
  unlocked_achievement_ids: AchievementId[];
  review_question_ids: string[];
  completed_challenge_ids: string[];
  completed_lab_ids: string[];
  perfect_lab_ids: string[];
  rewarded_lab_ids: string[];
  started_lab_ids: string[];
  lab_sessions: Record<string, LabSessionProgress>;
  labs_day_key: string | null;
  labs_started_today: string[];
  active_days: string[];
  skill_xp: Partial<Record<SkillId, number>>;
  activity_logs: ActivityLog[];
  activity_seen_at: string | null;
  selected_unit_ids: Record<string, string>;
};

function asArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

function asObject<T extends object>(value: unknown, fallback: T): T {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as T)
    : fallback;
}

function buildLearningPayload() {
  const learning = useLearningStore.getState();
  const unitId = useUnitStore.getState().selectedUnitId;
  return {
    total_xp: learning.totalXP,
    xp_today: learning.xpToday,
    daily_goal: learning.dailyGoal,
    streak: learning.streak,
    streak_freezes: learning.streakFreezes,
    last_active_date: learning.lastActiveDate,
    completed_lesson_ids: learning.completedLessonIds,
    unlocked_achievement_ids: learning.unlockedAchievementIds,
    review_question_ids: learning.reviewQuestionIds,
    completed_challenge_ids: learning.completedChallengeIds,
    completed_lab_ids: learning.completedLabIds,
    perfect_lab_ids: learning.perfectLabIds,
    rewarded_lab_ids: learning.rewardedLabIds,
    started_lab_ids: learning.startedLabIds,
    lab_sessions: learning.labSessions,
    labs_day_key: learning.labsDayKey,
    labs_started_today: learning.labsStartedToday,
    active_days: learning.activeDays,
    skill_xp: learning.skillXP,
    activity_logs: learning.activityLogs,
    activity_seen_at: learning.activitySeenAt,
    selected_unit_ids: { default: unitId },
  };
}

function applyProfileSnapshot(userId: string, p: ProfileRow) {
  if (p.avatar_url) {
    getSessionBridge().patch({ avatarUri: p.avatar_url });
    void cacheAvatarLocally(userId, p.avatar_url);
  }
  if (p.selected_track) {
    const trackId = p.selected_track as TrackId;
    if (getTrack(trackId)) {
      useTrackStore.getState().setSelectedTrack(trackId);
    }
  }
  if (p.locale === "fr" || p.locale === "en") {
    useLocaleStore.getState().setLocale(p.locale);
  }
  useThemeStore.getState().setDarkMode(Boolean(p.dark_mode));
  usePrivacyStore.getState().setAnalyticsEnabled(Boolean(p.analytics_enabled));
  usePrivacyStore
    .getState()
    .setNotificationsEnabled(Boolean(p.notifications_enabled));
  if (p.has_seen_product_tour) {
    useOnboardingStore.getState().completeProductTour();
  } else {
    useOnboardingStore.getState().resetProductTour();
  }
}

function applyLearningSnapshot(row: LearningRow) {
  useLearningStore.setState({
    totalXP: row.total_xp ?? 0,
    xpToday: row.xp_today ?? 0,
    dailyGoal: row.daily_goal ?? 20,
    streak: row.streak ?? 0,
    streakFreezes: row.streak_freezes ?? 0,
    lastActiveDate: row.last_active_date,
    completedLessonIds: asArray(row.completed_lesson_ids),
    unlockedAchievementIds: asArray(row.unlocked_achievement_ids),
    reviewQuestionIds: asArray(row.review_question_ids),
    completedChallengeIds: asArray(row.completed_challenge_ids),
    completedLabIds: asArray(row.completed_lab_ids),
    perfectLabIds: asArray(row.perfect_lab_ids),
    rewardedLabIds: asArray(row.rewarded_lab_ids),
    startedLabIds: asArray(row.started_lab_ids),
    labSessions: asObject(row.lab_sessions, {}),
    labsDayKey: row.labs_day_key,
    labsStartedToday: asArray(row.labs_started_today),
    activeDays: asArray(row.active_days),
    skillXP: asObject(row.skill_xp, {}),
    activityLogs: asArray(row.activity_logs),
    activitySeenAt: row.activity_seen_at,
  });
  const unitMap = asObject<Record<string, string>>(row.selected_unit_ids, {});
  if (unitMap.default) {
    useUnitStore.getState().setSelectedUnitId(unitMap.default);
  }
}

async function pullViaAppleApi(userId: string) {
  const token = await getAppleAccessToken();
  if (!token) throw new Error("Apple session missing");

  const response = await apiFetch("/api/sync", {
    method: "GET",
    accessToken: token,
  });
  if (!response.ok) {
    throw new Error(`Apple sync pull failed (${response.status})`);
  }

  const data = (await response.json()) as {
    profile: Omit<ProfileRow, "user_id"> | null;
    learning: Omit<LearningRow, "user_id"> | null;
    certifications: Array<{
      certification_id: string;
      status: string;
      payload: UserCertEntry;
    }>;
  };

  if (data.profile) {
    applyProfileSnapshot(userId, {
      user_id: userId,
      ...data.profile,
    });
  } else {
    const cached = await readCachedAvatar(userId);
    if (cached) {
      getSessionBridge().patch({ avatarUri: cached });
    }
  }

  if (data.learning) {
    applyLearningSnapshot({ user_id: userId, ...data.learning } as LearningRow);
  }

  if (data.certifications?.length) {
    const entries: Record<string, UserCertEntry> = {};
    for (const row of data.certifications) {
      entries[row.certification_id] = {
        ...(row.payload ?? {}),
        status: (row.payload?.status ?? row.status) as UserCertEntry["status"],
        progress: row.payload?.progress ?? 0,
      };
    }
    useCertificationStore.setState({ entries });
  }
}

async function pushViaAppleApi(userId: string) {
  const token = await getAppleAccessToken();
  if (!token) throw new Error("Apple session missing");

  const session = getSessionBridge().getState();
  const track = useTrackStore.getState().selectedTrack;
  const locale = useLocaleStore.getState().locale;
  const darkMode = useThemeStore.getState().darkMode;
  const privacy = usePrivacyStore.getState();
  const hasSeenTour = useOnboardingStore.getState().hasSeenProductTour;
  const entries = useCertificationStore.getState().entries;

  const response = await apiFetch("/api/sync", {
    method: "PUT",
    accessToken: token,
    body: JSON.stringify({
      profile: {
        email: session.email,
        first_name: session.firstName,
        avatar_url: session.avatarUri,
        selected_track: track,
        locale,
        dark_mode: darkMode,
        sound_enabled: false,
        analytics_enabled: privacy.analyticsEnabled,
        notifications_enabled: privacy.notificationsEnabled,
        has_seen_product_tour: hasSeenTour,
      },
      learning: buildLearningPayload(),
      certifications: Object.entries(entries).map(([certificationId, entry]) => ({
        certification_id: certificationId,
        status: entry.status,
        payload: entry,
      })),
    }),
  });
  if (!response.ok) {
    throw new Error(`Apple sync push failed (${response.status})`);
  }
}

export async function ensureUserProfile(input: {
  userId: string;
  email?: string | null;
  firstName?: string | null;
  /** Pass explicitly to set/clear; omit to keep the existing remote avatar. */
  avatarUrl?: string | null;
}) {
  if (!canSyncRemote()) return;

  if (isAppleSession()) {
    if (input.avatarUrl !== undefined) {
      getSessionBridge().patch({ avatarUri: input.avatarUrl });
    }
    if (input.email !== undefined || input.firstName !== undefined) {
      getSessionBridge().patch({
        ...(input.email !== undefined ? { email: input.email } : {}),
        ...(input.firstName !== undefined
          ? { firstName: input.firstName }
          : {}),
      });
    }
    await pushViaAppleApi(input.userId);
    return;
  }

  const track = useTrackStore.getState().selectedTrack;
  const locale = useLocaleStore.getState().locale;
  const darkMode = useThemeStore.getState().darkMode;
  const analytics = usePrivacyStore.getState().analyticsEnabled;
  const notifications = usePrivacyStore.getState().notificationsEnabled;
  const hasSeenTour = useOnboardingStore.getState().hasSeenProductTour;

  let avatarUrl = input.avatarUrl;
  if (avatarUrl === undefined) {
    avatarUrl =
      getSessionBridge().getState().avatarUri ??
      (
        await db
          .from("profiles")
          .select("avatar_url")
          .eq("user_id", input.userId)
          .maybeSingle()
      ).data?.avatar_url ??
      null;
  }

  const row: ProfileRow = {
    user_id: input.userId,
    email: input.email ?? null,
    first_name: input.firstName ?? null,
    avatar_url: avatarUrl ?? null,
    selected_track: track,
    locale,
    dark_mode: darkMode,
    sound_enabled: false,
    analytics_enabled: analytics,
    notifications_enabled: notifications,
    has_seen_product_tour: hasSeenTour,
  };

  const { error } = await db.from("profiles").upsert(row, {
    onConflict: "user_id",
  });
  if (error) throw error;

  const progress: LearningRow = {
    user_id: input.userId,
    ...buildLearningPayload(),
  };

  const { error: progressError } = await db
    .from("learning_progress")
    .upsert(progress, { onConflict: "user_id" });
  if (progressError) throw progressError;
}

export async function pullRemoteState(userId: string) {
  if (!canSyncRemote()) return;

  if (isAppleSession()) {
    await pullViaAppleApi(userId);
    return;
  }

  const { data: profile, error: profileError } = await db
    .from("profiles")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();
  if (profileError) throw profileError;

  if (profile) {
    const p = profile as ProfileRow;
    if (p.avatar_url) {
      getSessionBridge().patch({ avatarUri: p.avatar_url });
      void cacheAvatarLocally(userId, p.avatar_url);
    } else {
      const cached = await readCachedAvatar(userId);
      if (cached) {
        getSessionBridge().patch({ avatarUri: cached });
      }
    }
    applyProfileSnapshot(userId, p);
  } else {
    const cached = await readCachedAvatar(userId);
    if (cached) {
      getSessionBridge().patch({ avatarUri: cached });
    }
  }

  const { data: progress, error: progressError } = await db
    .from("learning_progress")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();
  if (progressError) throw progressError;

  if (progress) {
    applyLearningSnapshot(progress as LearningRow);
  }

  const { data: certs, error: certError } = await db
    .from("certification_entries")
    .select("*")
    .eq("user_id", userId);
  if (certError) throw certError;

  if (certs?.length) {
    const entries: Record<string, UserCertEntry> = {};
    for (const row of certs as Array<{
      certification_id: string;
      payload: UserCertEntry;
      status: string;
    }>) {
      entries[row.certification_id] = {
        ...(row.payload ?? {}),
        status: (row.payload?.status ?? row.status) as UserCertEntry["status"],
        progress: row.payload?.progress ?? 0,
      };
    }
    useCertificationStore.setState({ entries });
  }
}

export async function pushRemoteState(userId: string) {
  if (!canSyncRemote() || !userId) return;

  if (isAppleSession()) {
    await pushViaAppleApi(userId);
    return;
  }

  const learning = useLearningStore.getState();
  const track = useTrackStore.getState().selectedTrack;
  const locale = useLocaleStore.getState().locale;
  const darkMode = useThemeStore.getState().darkMode;
  const privacy = usePrivacyStore.getState();
  const hasSeenTour = useOnboardingStore.getState().hasSeenProductTour;
  const unitId = useUnitStore.getState().selectedUnitId;
  const session = await authClient.getSession();
  const user = session.data?.user;
  let avatarUrl = getSessionBridge().getState().avatarUri;
  if (!avatarUrl) {
    const { data: existing } = await db
      .from("profiles")
      .select("avatar_url")
      .eq("user_id", userId)
      .maybeSingle();
    avatarUrl = existing?.avatar_url ?? null;
  }

  const { error: profileError } = await db.from("profiles").upsert(
    {
      user_id: userId,
      email: user?.email ?? null,
      first_name: user?.name ?? null,
      avatar_url: avatarUrl,
      selected_track: track,
      locale,
      dark_mode: darkMode,
      sound_enabled: false,
      analytics_enabled: privacy.analyticsEnabled,
      notifications_enabled: privacy.notificationsEnabled,
      has_seen_product_tour: hasSeenTour,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" }
  );
  if (profileError) throw profileError;

  const { error: progressError } = await db.from("learning_progress").upsert(
    {
      user_id: userId,
      total_xp: learning.totalXP,
      xp_today: learning.xpToday,
      daily_goal: learning.dailyGoal,
      streak: learning.streak,
      streak_freezes: learning.streakFreezes,
      last_active_date: learning.lastActiveDate,
      completed_lesson_ids: learning.completedLessonIds,
      unlocked_achievement_ids: learning.unlockedAchievementIds,
      review_question_ids: learning.reviewQuestionIds,
      completed_challenge_ids: learning.completedChallengeIds,
      completed_lab_ids: learning.completedLabIds,
      perfect_lab_ids: learning.perfectLabIds,
      rewarded_lab_ids: learning.rewardedLabIds,
      started_lab_ids: learning.startedLabIds,
      lab_sessions: learning.labSessions,
      labs_day_key: learning.labsDayKey,
      labs_started_today: learning.labsStartedToday,
      active_days: learning.activeDays,
      skill_xp: learning.skillXP,
      activity_logs: learning.activityLogs,
      activity_seen_at: learning.activitySeenAt,
      selected_unit_ids: { default: unitId },
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" }
  );
  if (progressError) throw progressError;

  const entries = useCertificationStore.getState().entries;
  const rows = Object.entries(entries).map(([certificationId, entry]) => ({
    user_id: userId,
    certification_id: certificationId,
    status: entry.status,
    payload: entry,
    updated_at: new Date().toISOString(),
  }));

  const { error: wipeCertError } = await db
    .from("certification_entries")
    .delete()
    .eq("user_id", userId);
  if (wipeCertError) throw wipeCertError;

  if (rows.length > 0) {
    const { error: certError } = await db
      .from("certification_entries")
      .upsert(rows, { onConflict: "user_id,certification_id" });
    if (certError) throw certError;
  }
}

let syncTimer: ReturnType<typeof setTimeout> | null = null;
let syncInFlight: Promise<void> | null = null;

async function isDeviceOnline(): Promise<boolean> {
  if (Platform.OS === "web") return true;
  try {
    const state = await NetInfo.fetch();
    return Boolean(state.isConnected && state.isInternetReachable !== false);
  } catch {
    return true;
  }
}

export function cancelScheduledRemoteSync() {
  if (syncTimer) {
    clearTimeout(syncTimer);
    syncTimer = null;
  }
}

export async function flushPendingRemoteSync(userId: string | null | undefined) {
  if (!userId || !canSyncRemote()) return;
  if (!(await isDeviceOnline())) {
    useSyncStore.getState().setOnline(false);
    useSyncStore.getState().markPending();
    return;
  }

  if (syncInFlight) return syncInFlight;

  useSyncStore.getState().markSyncing();
  syncInFlight = pushRemoteState(userId)
    .then(() => {
      useSyncStore.getState().markSynced();
    })
    .catch((err) => {
      const message =
        err instanceof Error ? err.message : "Sync failed";
      console.warn("[sync] sync failed", err);
      useSyncStore.getState().markError(message);
    })
    .finally(() => {
      syncInFlight = null;
    });

  return syncInFlight;
}

export function scheduleRemoteSync(userId: string | null | undefined) {
  if (!userId || !canSyncRemote()) return;
  useSyncStore.getState().markPending();
  cancelScheduledRemoteSync();
  syncTimer = setTimeout(() => {
    void flushPendingRemoteSync(userId);
  }, 800);
}

/**
 * Wipe remote learning progress + certifications for the signed-in user.
 * Keeps auth account and `profiles` row (account still exists).
 */
export async function wipeRemoteLearningData(userId: string) {
  if (!canSyncRemote() || !userId) return;
  cancelScheduledRemoteSync();

  if (isAppleSession()) {
    const token = await getAppleAccessToken();
    if (!token) throw new Error("Apple session missing");
    const response = await apiFetch("/api/sync?scope=learning", {
      method: "DELETE",
      accessToken: token,
    });
    if (!response.ok) {
      throw new Error(`Apple wipe learning failed (${response.status})`);
    }
    return;
  }

  const { error: certError } = await db
    .from("certification_entries")
    .delete()
    .eq("user_id", userId);
  if (certError) throw certError;

  await pushRemoteState(userId);
}

/**
 * Wipe app tables for this user (profile CASCADE → learning + certs).
 * Call while the session is still valid.
 */
export async function deleteRemoteUserData(userId: string) {
  if (!canSyncRemote() || !userId) return;
  cancelScheduledRemoteSync();

  if (isAppleSession()) {
    const token = await getAppleAccessToken();
    if (!token) throw new Error("Apple session missing");
    const response = await apiFetch("/api/sync?scope=account", {
      method: "DELETE",
      accessToken: token,
    });
    if (!response.ok) {
      throw new Error(`Apple delete account failed (${response.status})`);
    }
    return;
  }

  const { error: profileError } = await db
    .from("profiles")
    .delete()
    .eq("user_id", userId);
  if (profileError) throw profileError;
}
