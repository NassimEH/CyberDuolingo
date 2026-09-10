-- Google Sign-In identities (Stack users, parallel to apple_identities).
-- No automatic merge by email (prevents account takeover).

CREATE TABLE IF NOT EXISTS public.google_identities (
  google_user_id text PRIMARY KEY,
  user_id text NOT NULL UNIQUE REFERENCES public.profiles (user_id) ON DELETE CASCADE,
  email text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS google_identities_user_id_idx
  ON public.google_identities (user_id);
