-- Stack app schema: user profile + learning progress + certifications
-- Secured with RLS via Neon Auth JWT (auth.user_id())

CREATE TABLE IF NOT EXISTS public.profiles (
  user_id text PRIMARY KEY,
  email text,
  first_name text,
  avatar_url text,
  selected_track text,
  locale text NOT NULL DEFAULT 'fr',
  dark_mode boolean NOT NULL DEFAULT false,
  sound_enabled boolean NOT NULL DEFAULT false,
  analytics_enabled boolean NOT NULL DEFAULT true,
  notifications_enabled boolean NOT NULL DEFAULT false,
  has_seen_product_tour boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.learning_progress (
  user_id text PRIMARY KEY REFERENCES public.profiles (user_id) ON DELETE CASCADE,
  total_xp integer NOT NULL DEFAULT 0,
  xp_today integer NOT NULL DEFAULT 0,
  daily_goal integer NOT NULL DEFAULT 50,
  streak integer NOT NULL DEFAULT 0,
  streak_freezes integer NOT NULL DEFAULT 0,
  last_active_date text,
  completed_lesson_ids jsonb NOT NULL DEFAULT '[]'::jsonb,
  unlocked_achievement_ids jsonb NOT NULL DEFAULT '[]'::jsonb,
  review_question_ids jsonb NOT NULL DEFAULT '[]'::jsonb,
  completed_challenge_ids jsonb NOT NULL DEFAULT '[]'::jsonb,
  completed_lab_ids jsonb NOT NULL DEFAULT '[]'::jsonb,
  perfect_lab_ids jsonb NOT NULL DEFAULT '[]'::jsonb,
  rewarded_lab_ids jsonb NOT NULL DEFAULT '[]'::jsonb,
  started_lab_ids jsonb NOT NULL DEFAULT '[]'::jsonb,
  lab_sessions jsonb NOT NULL DEFAULT '{}'::jsonb,
  labs_day_key text,
  labs_started_today jsonb NOT NULL DEFAULT '[]'::jsonb,
  active_days jsonb NOT NULL DEFAULT '[]'::jsonb,
  skill_xp jsonb NOT NULL DEFAULT '{}'::jsonb,
  activity_logs jsonb NOT NULL DEFAULT '[]'::jsonb,
  activity_seen_at text,
  selected_unit_ids jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.certification_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL REFERENCES public.profiles (user_id) ON DELETE CASCADE,
  certification_id text NOT NULL,
  status text NOT NULL DEFAULT 'wishlist',
  payload jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, certification_id)
);

CREATE INDEX IF NOT EXISTS certification_entries_user_id_idx
  ON public.certification_entries (user_id);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.learning_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certification_entries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS profiles_own ON public.profiles;
CREATE POLICY profiles_own ON public.profiles
  FOR ALL TO authenticated
  USING (auth.user_id() = user_id)
  WITH CHECK (auth.user_id() = user_id);

DROP POLICY IF EXISTS learning_progress_own ON public.learning_progress;
CREATE POLICY learning_progress_own ON public.learning_progress
  FOR ALL TO authenticated
  USING (auth.user_id() = user_id)
  WITH CHECK (auth.user_id() = user_id);

DROP POLICY IF EXISTS certification_entries_own ON public.certification_entries;
CREATE POLICY certification_entries_own ON public.certification_entries
  FOR ALL TO authenticated
  USING (auth.user_id() = user_id)
  WITH CHECK (auth.user_id() = user_id);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.learning_progress TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.certification_entries TO authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;
