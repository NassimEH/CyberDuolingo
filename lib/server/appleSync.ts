import { getServerSql } from "@/lib/server/db";

export type AppleSyncSnapshot = {
  profile: {
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
  } | null;
  learning: Record<string, unknown> | null;
  certifications: Array<{
    certification_id: string;
    status: string;
    payload: unknown;
  }>;
};

export async function pullAppleUserState(
  userId: string
): Promise<AppleSyncSnapshot> {
  const sql = getServerSql();

  const profiles = await sql`
    SELECT
      email, first_name, avatar_url, selected_track, locale,
      dark_mode, sound_enabled, analytics_enabled, notifications_enabled,
      has_seen_product_tour
    FROM public.profiles
    WHERE user_id = ${userId}
    LIMIT 1
  `;

  const learning = await sql`
    SELECT *
    FROM public.learning_progress
    WHERE user_id = ${userId}
    LIMIT 1
  `;

  const certs = await sql`
    SELECT certification_id, status, payload
    FROM public.certification_entries
    WHERE user_id = ${userId}
  `;

  const learningRow = learning[0] as Record<string, unknown> | undefined;
  if (learningRow) {
    delete learningRow.user_id;
  }

  return {
    profile: (profiles[0] as AppleSyncSnapshot["profile"]) ?? null,
    learning: learningRow ?? null,
    certifications: certs as AppleSyncSnapshot["certifications"],
  };
}

export type ApplePushBody = {
  profile?: {
    email?: string | null;
    first_name?: string | null;
    avatar_url?: string | null;
    selected_track?: string | null;
    locale?: string;
    dark_mode?: boolean;
    sound_enabled?: boolean;
    analytics_enabled?: boolean;
    notifications_enabled?: boolean;
    has_seen_product_tour?: boolean;
  };
  learning?: Record<string, unknown>;
  certifications?: Array<{
    certification_id: string;
    status: string;
    payload: unknown;
  }>;
};

export async function pushAppleUserState(
  userId: string,
  body: ApplePushBody
): Promise<void> {
  const sql = getServerSql();
  const p = body.profile ?? {};

  // Read current avatar when client omits avatar_url (avoid wiping).
  let avatarUrl: string | null = null;
  if (p.avatar_url !== undefined) {
    avatarUrl = p.avatar_url;
  } else {
    const existing = await sql`
      SELECT avatar_url FROM public.profiles WHERE user_id = ${userId} LIMIT 1
    `;
    avatarUrl =
      (existing[0] as { avatar_url: string | null } | undefined)?.avatar_url ??
      null;
  }

  await sql`
    UPDATE public.profiles SET
      email = COALESCE(${p.email ?? null}, email),
      first_name = COALESCE(${p.first_name ?? null}, first_name),
      avatar_url = ${avatarUrl},
      selected_track = ${p.selected_track ?? null},
      locale = ${p.locale ?? "fr"},
      dark_mode = ${Boolean(p.dark_mode)},
      sound_enabled = ${Boolean(p.sound_enabled)},
      analytics_enabled = ${p.analytics_enabled !== false},
      notifications_enabled = ${Boolean(p.notifications_enabled)},
      has_seen_product_tour = ${Boolean(p.has_seen_product_tour)},
      updated_at = now()
    WHERE user_id = ${userId}
  `;

  const l = body.learning ?? {};
  await sql`
    INSERT INTO public.learning_progress (
      user_id,
      total_xp, xp_today, daily_goal, streak, streak_freezes, last_active_date,
      completed_lesson_ids, unlocked_achievement_ids, review_question_ids,
      completed_challenge_ids, completed_lab_ids, perfect_lab_ids, rewarded_lab_ids,
      started_lab_ids, lab_sessions, labs_day_key, labs_started_today, active_days,
      skill_xp, activity_logs, activity_seen_at, selected_unit_ids, updated_at
    ) VALUES (
      ${userId},
      ${Number(l.total_xp ?? 0)},
      ${Number(l.xp_today ?? 0)},
      ${Number(l.daily_goal ?? 50)},
      ${Number(l.streak ?? 0)},
      ${Number(l.streak_freezes ?? 0)},
      ${typeof l.last_active_date === "string" ? l.last_active_date : null},
      ${JSON.stringify(l.completed_lesson_ids ?? [])}::jsonb,
      ${JSON.stringify(l.unlocked_achievement_ids ?? [])}::jsonb,
      ${JSON.stringify(l.review_question_ids ?? [])}::jsonb,
      ${JSON.stringify(l.completed_challenge_ids ?? [])}::jsonb,
      ${JSON.stringify(l.completed_lab_ids ?? [])}::jsonb,
      ${JSON.stringify(l.perfect_lab_ids ?? [])}::jsonb,
      ${JSON.stringify(l.rewarded_lab_ids ?? [])}::jsonb,
      ${JSON.stringify(l.started_lab_ids ?? [])}::jsonb,
      ${JSON.stringify(l.lab_sessions ?? {})}::jsonb,
      ${typeof l.labs_day_key === "string" ? l.labs_day_key : null},
      ${JSON.stringify(l.labs_started_today ?? [])}::jsonb,
      ${JSON.stringify(l.active_days ?? [])}::jsonb,
      ${JSON.stringify(l.skill_xp ?? {})}::jsonb,
      ${JSON.stringify(l.activity_logs ?? [])}::jsonb,
      ${typeof l.activity_seen_at === "string" ? l.activity_seen_at : null},
      ${JSON.stringify(l.selected_unit_ids ?? {})}::jsonb,
      now()
    )
    ON CONFLICT (user_id) DO UPDATE SET
      total_xp = EXCLUDED.total_xp,
      xp_today = EXCLUDED.xp_today,
      daily_goal = EXCLUDED.daily_goal,
      streak = EXCLUDED.streak,
      streak_freezes = EXCLUDED.streak_freezes,
      last_active_date = EXCLUDED.last_active_date,
      completed_lesson_ids = EXCLUDED.completed_lesson_ids,
      unlocked_achievement_ids = EXCLUDED.unlocked_achievement_ids,
      review_question_ids = EXCLUDED.review_question_ids,
      completed_challenge_ids = EXCLUDED.completed_challenge_ids,
      completed_lab_ids = EXCLUDED.completed_lab_ids,
      perfect_lab_ids = EXCLUDED.perfect_lab_ids,
      rewarded_lab_ids = EXCLUDED.rewarded_lab_ids,
      started_lab_ids = EXCLUDED.started_lab_ids,
      lab_sessions = EXCLUDED.lab_sessions,
      labs_day_key = EXCLUDED.labs_day_key,
      labs_started_today = EXCLUDED.labs_started_today,
      active_days = EXCLUDED.active_days,
      skill_xp = EXCLUDED.skill_xp,
      activity_logs = EXCLUDED.activity_logs,
      activity_seen_at = EXCLUDED.activity_seen_at,
      selected_unit_ids = EXCLUDED.selected_unit_ids,
      updated_at = now()
  `;

  await sql`
    DELETE FROM public.certification_entries WHERE user_id = ${userId}
  `;

  const certs = body.certifications ?? [];
  for (const cert of certs) {
    if (!cert.certification_id) continue;
    await sql`
      INSERT INTO public.certification_entries (
        user_id, certification_id, status, payload, updated_at
      ) VALUES (
        ${userId},
        ${cert.certification_id},
        ${cert.status ?? "wishlist"},
        ${JSON.stringify(cert.payload ?? {})}::jsonb,
        now()
      )
    `;
  }
}

export async function deleteAppleUserData(userId: string): Promise<void> {
  const sql = getServerSql();
  await sql`DELETE FROM public.profiles WHERE user_id = ${userId}`;
}

export async function wipeAppleLearningData(userId: string): Promise<void> {
  const sql = getServerSql();
  await sql`DELETE FROM public.certification_entries WHERE user_id = ${userId}`;
  await sql`
    UPDATE public.learning_progress SET
      total_xp = 0,
      xp_today = 0,
      streak = 0,
      streak_freezes = 0,
      last_active_date = null,
      completed_lesson_ids = '[]'::jsonb,
      unlocked_achievement_ids = '[]'::jsonb,
      review_question_ids = '[]'::jsonb,
      completed_challenge_ids = '[]'::jsonb,
      completed_lab_ids = '[]'::jsonb,
      perfect_lab_ids = '[]'::jsonb,
      rewarded_lab_ids = '[]'::jsonb,
      started_lab_ids = '[]'::jsonb,
      lab_sessions = '{}'::jsonb,
      labs_day_key = null,
      labs_started_today = '[]'::jsonb,
      active_days = '[]'::jsonb,
      skill_xp = '{}'::jsonb,
      activity_logs = '[]'::jsonb,
      activity_seen_at = null,
      selected_unit_ids = '{}'::jsonb,
      updated_at = now()
    WHERE user_id = ${userId}
  `;
}
