import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { persistStorage } from "@/lib/persistStorage";

import { apiFetch } from "@/lib/api";
import {
  cacheAvatarLocally,
  clearCachedAvatar,
} from "@/lib/avatar";
import {
  clearAppleAccessToken,
  getAppleAccessToken,
  saveAppleAccessToken,
} from "@/lib/appleSession";
import {
  authClient,
  getAuthCallbackURL,
  isNeonConfigured,
} from "@/lib/neon";
import {
  deleteRemoteUserData,
  ensureUserProfile,
  pullRemoteState,
  pushRemoteState,
  wipeRemoteLearningData,
  cancelScheduledRemoteSync,
} from "@/lib/remoteSync";
import {
  bindSessionBridge,
  type AuthProvider,
} from "@/lib/sessionBridge";
import { useCertificationStore } from "@/store/certificationStore";
import { useLearningStore } from "@/store/learningStore";

export type { AuthProvider };

interface SessionState {
  userId: string | null;
  email: string | null;
  firstName: string | null;
  avatarUri: string | null;
  isSignedIn: boolean;
  authReady: boolean;
  /** True after hydrateFromNeon finished — safe to schedule remote sync. */
  syncReady: boolean;
  /** neon = email/password (+ Google web) via Neon Auth; apple/google = Stack session */
  authProvider: AuthProvider;
  setFromRemoteUser: (input: {
    userId: string;
    email?: string | null;
    firstName?: string | null;
    avatarUri?: string | null;
    authProvider?: AuthProvider;
  }) => void;
  signInWithPassword: (input: {
    email: string;
    password: string;
  }) => Promise<{ error?: string }>;
  signUpWithPassword: (input: {
    email: string;
    password: string;
    firstName: string;
  }) => Promise<{ error?: string }>;
  /** Browser OAuth redirect — web / Expo web (Neon Auth). */
  signInWithGoogleWeb: () => Promise<{ error?: string }>;
  /**
   * Native Google → Stack session (Neon Managed Auth does not support idToken).
   */
  signInWithGoogleStackSession: (input: {
    accessToken: string;
    user: {
      id: string;
      email: string | null;
      firstName: string | null;
      avatarUri?: string | null;
    };
  }) => Promise<{ error?: string }>;
  /** Native Apple identity token → Stack backend (not Neon Auth). */
  signInWithAppleIdToken: (input: {
    idToken: string;
    nonce?: string | null;
    mode?: "signIn" | "signUp";
    emailHint?: string | null;
    givenName?: string | null;
    familyName?: string | null;
    fullName?: string | null;
  }) => Promise<{ error?: string; code?: string }>;
  setAvatarUri: (uri: string | null) => Promise<void>;
  updateProfile: (input: {
    firstName: string;
    email: string;
  }) => Promise<{ error?: string }>;
  hydrateFromNeon: () => Promise<void>;
  deleteLearningData: () => Promise<{ error?: string }>;
  deleteAccount: (input?: { password?: string }) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
}

const signedOutState = {
  userId: null as string | null,
  email: null as string | null,
  firstName: null as string | null,
  avatarUri: null as string | null,
  isSignedIn: false,
  authProvider: null as AuthProvider,
  syncReady: false,
};

export const useSessionStore = create<SessionState>()(
  persist(
    (set, get) => ({
      ...signedOutState,
      authReady: false,
      setFromRemoteUser: ({
        userId,
        email,
        firstName,
        avatarUri,
        authProvider,
      }) =>
        set({
          userId,
          email: email ?? null,
          firstName: firstName ?? email?.split("@")[0] ?? "Learner",
          ...(avatarUri ? { avatarUri } : {}),
          isSignedIn: true,
          syncReady: true,
          ...(authProvider ? { authProvider } : {}),
        }),
      signInWithPassword: async ({ email, password }) => {
        if (!isNeonConfigured()) {
          return { error: "Neon Auth n'est pas configuré." };
        }
        await clearAppleAccessToken();
        const result = await authClient.signIn.email({
          email,
          password,
        });
        if (result.error) {
          return { error: result.error.message ?? "Connexion impossible." };
        }
        const user =
          result.data?.user ??
          (await authClient.getSession()).data?.user ??
          null;
        if (!user?.id) {
          return { error: "Session introuvable après connexion." };
        }
        get().setFromRemoteUser({
          userId: user.id,
          email: user.email,
          firstName: user.name,
          authProvider: "neon",
          ...(user.image ? { avatarUri: user.image } : {}),
        });
        await pullRemoteState(user.id);
        await ensureUserProfile({
          userId: user.id,
          email: user.email,
          firstName: user.name,
        });
        return {};
      },
      signUpWithPassword: async ({ email, password, firstName }) => {
        if (!isNeonConfigured()) {
          return { error: "Neon Auth n'est pas configuré." };
        }
        const name = firstName.trim();
        if (name.length < 2) {
          return { error: "Entre ton prénom (au moins 2 caractères)." };
        }
        await clearAppleAccessToken();
        const result = await authClient.signUp.email({
          email,
          password,
          name,
        });
        if (result.error) {
          return { error: result.error.message ?? "Inscription impossible." };
        }
        const user =
          result.data?.user ??
          (await authClient.getSession()).data?.user ??
          null;
        if (!user?.id) {
          return { error: "Session introuvable après inscription." };
        }
        get().setFromRemoteUser({
          userId: user.id,
          email: user.email,
          firstName: user.name ?? name,
          authProvider: "neon",
          ...(user.image ? { avatarUri: user.image } : {}),
        });
        await ensureUserProfile({
          userId: user.id,
          email: user.email,
          firstName: user.name ?? name,
        });
        await pushRemoteState(user.id);
        return {};
      },
      signInWithGoogleWeb: async () => {
        if (!isNeonConfigured()) {
          return { error: "Neon Auth n'est pas configuré." };
        }
        await clearAppleAccessToken();
        const callbackURL = getAuthCallbackURL();
        const result = await authClient.signIn.social({
          provider: "google",
          callbackURL,
          newUserCallbackURL: callbackURL,
          errorCallbackURL: callbackURL,
        });
        if (result.error) {
          return {
            error: result.error.message ?? "Connexion Google impossible.",
          };
        }
        const user = (await authClient.getSession()).data?.user ?? null;
        if (!user?.id) {
          return {};
        }
        get().setFromRemoteUser({
          userId: user.id,
          email: user.email,
          firstName: user.name,
          authProvider: "neon",
          ...(user.image ? { avatarUri: user.image } : {}),
        });
        await pullRemoteState(user.id);
        await ensureUserProfile({
          userId: user.id,
          email: user.email,
          firstName: user.name,
        });
        return {};
      },
      signInWithGoogleStackSession: async ({ accessToken, user }) => {
        if (!accessToken.trim() || !user.id) {
          return { error: "Session Google invalide." };
        }
        try {
          if (isNeonConfigured()) {
            try {
              await authClient.signOut();
            } catch {
              /* ignore */
            }
          }

          await saveAppleAccessToken(accessToken);

          const displayName =
            user.firstName?.trim() ||
            user.email?.split("@")[0] ||
            "Learner";

          get().setFromRemoteUser({
            userId: user.id,
            email: user.email,
            firstName: displayName,
            authProvider: "google",
            ...(user.avatarUri ? { avatarUri: user.avatarUri } : {}),
          });
          await pullRemoteState(user.id);
          await ensureUserProfile({
            userId: user.id,
            email: user.email,
            firstName: displayName,
          });
          return {};
        } catch (err) {
          console.warn("[google] sign-in failed", err);
          return {
            error:
              "Impossible de finaliser la session Google. Vérifie EXPO_PUBLIC_API_BASE_URL.",
          };
        }
      },
      signInWithAppleIdToken: async ({
        idToken,
        nonce,
        mode = "signUp",
        emailHint,
        givenName,
        familyName,
        fullName,
      }) => {
        if (!idToken.trim()) {
          return { error: "Jeton Apple manquant." };
        }

        try {
          const response = await apiFetch("/api/auth/apple", {
            method: "POST",
            body: JSON.stringify({
              identityToken: idToken,
              nonce: nonce ?? null,
              mode,
              emailHint: emailHint ?? null,
              givenName: givenName ?? null,
              familyName: familyName ?? null,
              fullName: fullName ?? null,
            }),
          });
          const payload = (await response.json().catch(() => ({}))) as {
            error?: string;
            code?: string;
            accessToken?: string;
            user?: {
              id: string;
              email: string | null;
              firstName: string | null;
            };
          };

          if (!response.ok || !payload.accessToken || !payload.user?.id) {
            if (payload.code === "ACCOUNT_NOT_FOUND" || response.status === 404) {
              return {
                code: "ACCOUNT_NOT_FOUND",
                error:
                  payload.error ??
                  "Aucun compte Stack n’est lié à cet Apple ID. Crée un compte d’abord.",
              };
            }
            return {
              error:
                payload.error ??
                "Connexion Apple impossible. Vérifie que l’API Stack est joignable.",
            };
          }

          // Drop any Neon Auth cookie session so we don't mix providers.
          if (isNeonConfigured()) {
            try {
              await authClient.signOut();
            } catch {
              /* ignore */
            }
          }

          await saveAppleAccessToken(payload.accessToken);

          const displayName =
            givenName?.trim() ||
            fullName?.trim()?.split(/\s+/).find(Boolean) ||
            payload.user.firstName ||
            "Learner";

          get().setFromRemoteUser({
            userId: payload.user.id,
            email: payload.user.email,
            firstName: displayName,
            authProvider: "apple",
          });
          await pullRemoteState(payload.user.id);
          await ensureUserProfile({
            userId: payload.user.id,
            email: payload.user.email,
            firstName: displayName,
          });
          return {};
        } catch (err) {
          console.warn("[apple] sign-in failed", err);
          return {
            error:
              "Impossible de joindre le serveur Stack pour Apple. Vérifie EXPO_PUBLIC_API_BASE_URL.",
          };
        }
      },
      setAvatarUri: async (avatarUri) => {
        set({ avatarUri });
        const userId = get().userId;
        if (!userId || userId === "user_guest") return;

        try {
          if (avatarUri) {
            await cacheAvatarLocally(userId, avatarUri);
          } else {
            await clearCachedAvatar(userId);
          }
        } catch (err) {
          console.warn("[avatar] local cache failed", err);
        }

        try {
          await ensureUserProfile({
            userId,
            email: get().email,
            firstName: get().firstName,
            avatarUrl: avatarUri,
          });
        } catch (err) {
          console.warn("[avatar] remote save failed", err);
        }
      },
      updateProfile: async ({ firstName, email }) => {
        const state = get();
        if (!state.isSignedIn || !state.userId) {
          return { error: "Connecte-toi pour modifier ton profil." };
        }
        const trimmedEmail = email.trim();
        const trimmedName = firstName.trim();
        if (trimmedName.length < 2) {
          return { error: "Entre ton prénom (au moins 2 caractères)." };
        }
        if (!trimmedEmail.includes("@")) {
          return { error: "Entre une adresse e-mail valide." };
        }

        const previous = {
          firstName: state.firstName,
          email: state.email,
        };

        if (state.authProvider === "neon" && isNeonConfigured()) {
          const result = await authClient.updateUser({
            name: trimmedName,
          });
          if (result.error) {
            return {
              error: result.error.message ?? "Mise à jour impossible.",
            };
          }
        }

        // Optimistic local update, then persist to Neon `profiles` (or Stack sync API).
        set({
          firstName: trimmedName,
          email: trimmedEmail,
        });
        try {
          await ensureUserProfile({
            userId: state.userId,
            email: trimmedEmail,
            firstName: trimmedName,
            avatarUrl: state.avatarUri,
          });
        } catch (err) {
          console.warn("[profile] ensureUserProfile failed", err);
          set(previous);
          return {
            error:
              "Impossible d’enregistrer sur le serveur. Vérifie ta connexion et réessaie.",
          };
        }
        return {};
      },
      hydrateFromNeon: async () => {
        set({ syncReady: false });

        try {
          if (get().userId === "user_guest") {
            set({ ...signedOutState, authReady: true });
            return;
          }

          set({ authReady: true });

          // Prefer Stack Apple/Google session if present.
          try {
            const appleToken = await getAppleAccessToken();
            if (appleToken) {
              const response = await apiFetch("/api/auth/me", {
                method: "GET",
                accessToken: appleToken,
              });
              if (response.ok) {
                const data = (await response.json()) as {
                  user?: {
                    id: string;
                    email: string | null;
                    firstName: string | null;
                    avatarUrl: string | null;
                    authProvider?: "apple" | "google";
                  };
                };
                if (data.user?.id) {
                  const provider =
                    data.user.authProvider === "google" ? "google" : "apple";
                  get().setFromRemoteUser({
                    userId: data.user.id,
                    email: data.user.email,
                    firstName: data.user.firstName,
                    authProvider: provider,
                    ...(data.user.avatarUrl
                      ? { avatarUri: data.user.avatarUrl }
                      : {}),
                  });
                  void pullRemoteState(data.user.id).catch((err) => {
                    console.warn("[stack] pullRemoteState failed", err);
                  });
                  return;
                }
              } else if (response.status === 401) {
                await clearAppleAccessToken();
                if (
                  get().authProvider === "apple" ||
                  get().authProvider === "google"
                ) {
                  set({ ...signedOutState, authReady: true });
                  return;
                }
              }
            } else if (
              get().authProvider === "apple" ||
              get().authProvider === "google"
            ) {
              // Persisted "signed in" but SecureStore token gone — force clean slate.
              set({ ...signedOutState, authReady: true });
              return;
            }
          } catch (err) {
            console.warn("[apple] hydrate failed", err);
          }

          if (!isNeonConfigured()) {
            return;
          }

          try {
            const session = await authClient.getSession();
            const user = session.data?.user;
            if (user?.id) {
              get().setFromRemoteUser({
                userId: user.id,
                email: user.email,
                firstName: user.name,
                authProvider: "neon",
                ...(user.image ? { avatarUri: user.image } : {}),
              });
              void pullRemoteState(user.id).catch((err) => {
                console.warn("[neon] pullRemoteState failed", err);
              });
            } else if (
              get().isSignedIn &&
              get().authProvider !== "apple" &&
              get().authProvider !== "google"
            ) {
              set({ ...signedOutState, authReady: true });
            }
          } catch (err) {
            console.warn("[neon] hydrate failed", err);
          }
        } finally {
          set({ authReady: true, syncReady: true });
        }
      },
      deleteLearningData: async () => {
        const state = get();
        if (!state.userId || !state.isSignedIn) {
          return { error: "Connecte-toi pour supprimer tes données." };
        }

        // Remote first — never wipe local if the server call fails.
        try {
          await wipeRemoteLearningData(state.userId);
        } catch (err) {
          console.warn("[sync] wipeRemoteLearningData failed", err);
          return {
            error:
              "Impossible d’effacer les données serveur. Réessaie ou contacte le support.",
          };
        }

        useLearningStore.getState().clearAllLocalData();
        useCertificationStore.getState().clearAll();
        return {};
      },
      deleteAccount: async (input) => {
        const state = get();
        if (!state.userId) {
          return { error: "Aucun compte à supprimer." };
        }

        if (state.authProvider === "apple" || state.authProvider === "google") {
          try {
            await deleteRemoteUserData(state.userId);
          } catch (err) {
            console.warn("[stack] delete account failed", err);
            return {
              error:
                "Impossible de supprimer le compte. Réessaie ou contacte le support.",
            };
          }
          await clearAppleAccessToken();
          cancelScheduledRemoteSync();
          set({ ...signedOutState, authReady: true });
          useLearningStore.getState().clearAllLocalData();
          useCertificationStore.getState().clearAll();
          return {};
        }

        const password = input?.password?.trim() ?? "";
        if (!password) {
          return { error: "Mot de passe requis pour supprimer le compte." };
        }

        if (isNeonConfigured()) {
          const email = state.email?.trim();
          if (!email?.includes("@")) {
            return {
              error:
                "E-mail de session manquant. Reconnecte-toi puis réessaie.",
            };
          }

          // Verify password while the session can still call the Data API.
          try {
            const check = await authClient.signIn.email({
              email,
              password,
            });
            if (check.error) {
              return {
                error:
                  check.error.message ??
                  "Mot de passe incorrect.",
              };
            }
          } catch (err) {
            console.warn("[neon] password verify failed", err);
            return { error: "Mot de passe incorrect." };
          }

          try {
            await deleteRemoteUserData(state.userId);
          } catch (err) {
            console.warn("[neon] deleteRemoteUserData failed", err);
            return {
              error:
                "Impossible de supprimer les données serveur. Réessaie ou contacte le support.",
            };
          }

          try {
            const result = await authClient.deleteUser({ password });
            if (result.error) {
              return {
                error:
                  result.error.message ??
                  "Données effacées, mais le compte Auth n’a pas pu être supprimé. Contacte le support.",
              };
            }
          } catch (err) {
            console.warn("[neon] deleteUser failed", err);
            return {
              error:
                "Données effacées, mais le compte Auth n’a pas pu être supprimé. Contacte le support.",
            };
          }

          try {
            await authClient.signOut();
          } catch (err) {
            console.warn("[neon] signOut after delete failed", err);
          }
        }

        cancelScheduledRemoteSync();
        set({ ...signedOutState, authReady: true });
        useLearningStore.getState().clearAllLocalData();
        useCertificationStore.getState().clearAll();
        await clearAppleAccessToken();
        return {};
      },
      signOut: async () => {
        const provider = get().authProvider;
        if (provider === "apple" || provider === "google") {
          const token = await getAppleAccessToken();
          if (token) {
            try {
              await apiFetch("/api/auth/me", {
                method: "DELETE",
                accessToken: token,
              });
            } catch (err) {
              console.warn("[stack] revoke session failed", err);
            }
          }
          await clearAppleAccessToken();
        } else if (isNeonConfigured()) {
          try {
            await authClient.signOut();
          } catch (err) {
            console.warn("[neon] signOut failed", err);
          }
        }
        // Drop session first so store subscribers do not push after token revoke.
        cancelScheduledRemoteSync();
        set({ ...signedOutState, authReady: true });
        useLearningStore.getState().clearAllLocalData();
        useCertificationStore.getState().clearAll();
      },
    }),
    {
      name: "session-storage",
      storage: createJSONStorage(() => persistStorage),
      partialize: (state) => ({
        userId: state.userId,
        email: state.email,
        isSignedIn: state.isSignedIn,
        firstName: state.firstName,
        avatarUri: state.avatarUri,
        authProvider: state.authProvider,
      }),
      merge: (persisted, current) => {
        const raw = (persisted ?? {}) as Partial<SessionState> & {
          isGuest?: boolean;
          userId?: string | null;
          email?: string | null;
          isSignedIn?: boolean;
        };
        if (raw.isGuest || raw.userId === "user_guest") {
          return {
            ...current,
            ...signedOutState,
            authReady: true,
          };
        }
        return {
          ...current,
          userId: raw.userId ?? current.userId,
          email: raw.email ?? current.email,
          isSignedIn: raw.isSignedIn ?? current.isSignedIn,
          firstName: raw.firstName ?? current.firstName,
          avatarUri: raw.avatarUri ?? current.avatarUri,
          authProvider: raw.authProvider ?? current.authProvider,
          authReady: true,
        };
      },
      onRehydrateStorage: () => () => {
        queueMicrotask(() => {
          useSessionStore.setState({ authReady: true });
        });
      },
    }
  )
);

bindSessionBridge({
  getState: () => {
    const s = useSessionStore.getState();
    return {
      authProvider: s.authProvider,
      isSignedIn: s.isSignedIn,
      email: s.email,
      firstName: s.firstName,
      avatarUri: s.avatarUri,
    };
  },
  patch: (partial) => {
    useSessionStore.setState(partial);
  },
});
