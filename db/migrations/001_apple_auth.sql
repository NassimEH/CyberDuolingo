-- Apple Sign-In identities + Stack app sessions (additive, non-destructive)
-- Apple users are Stack users (profiles.user_id) distinct from Neon Auth accounts.
-- No automatic merge by email (prevents account takeover).

CREATE TABLE IF NOT EXISTS public.apple_identities (
  apple_user_id text PRIMARY KEY,
  user_id text NOT NULL UNIQUE REFERENCES public.profiles (user_id) ON DELETE CASCADE,
  email text,
  email_is_private boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS apple_identities_user_id_idx
  ON public.apple_identities (user_id);

CREATE TABLE IF NOT EXISTS public.app_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL REFERENCES public.profiles (user_id) ON DELETE CASCADE,
  token_hash text NOT NULL UNIQUE,
  auth_provider text NOT NULL DEFAULT 'apple',
  expires_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  revoked_at timestamptz
);

CREATE INDEX IF NOT EXISTS app_sessions_user_id_idx
  ON public.app_sessions (user_id);

CREATE INDEX IF NOT EXISTS app_sessions_expires_at_idx
  ON public.app_sessions (expires_at);

-- Service-role access for Expo API routes (DATABASE_URL owner already has rights).
-- RLS stays enabled on profiles/progress; Apple sync uses DATABASE_URL (bypasses RLS).
