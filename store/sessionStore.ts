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
  /** neon = email/Google via Neon Auth; apple = Stack backend session */
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
  /** Browser OAuth redirect — web / Expo web. */
  signInWithGoogleWeb: () => Promise<{ error?: string }>;
  /** Native Google ID token → Neon Auth. */
  signInWithGoogleIdToken: (
    idToken: string
  ) => Promise<{ error?: string }>;
  /** Native Apple identity token → Stack backend (not Neon Auth). */
  signInWithAppleIdToken: (input: {
    idToken: string;
    nonce?: string | null;
    fullName?: string | null;
  }) => Promise<{ error?: string }>;
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
      signInWithGoogleIdToken: async (idToken) => {
        if (!isNeonConfigured()) {
          return { error: "Neon Auth n'est pas configuré." };
        }
        if (!idToken.trim()) {
          return { error: "Jeton Google manquant." };
        }
        await clearAppleAccessToken();
        const result = await authClient.signIn.social({
          provider: "google",
          idToken: { token: idToken },
        });
        if (result.error) {
          return {
            error: result.error.message ?? "Connexion Google impossible.",
          };
        }
        const user = (await authClient.getSession()).data?.user ?? null;
        if (!user?.id) {
          return { error: "Session introuvable après connexion Google." };
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
      signInWithAppleIdToken: async ({ idToken, nonce, fullName }) => {
        if (!idToken.trim()) {
          return { error: "Jeton Apple manquant." };
        }

        try {
          const response = await apiFetch("/api/auth/apple", {
            method: "POST",
            body: JSON.stringify({
              identityToken: idToken,
              nonce: nonce ?? null,
              fullName: fullName ?? null,
            }),
          });
          const payload = (await response.json().catch(() => ({}))) as {
            error?: string;
            accessToken?: string;
            user?: {
              id: string;
              email: string | null;
              firstName: string | null;
            };
          };

          if (!response.ok || !payload.accessToken || !payload.user?.id) {
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
            fullName?.trim() ||
            payload.user.firstName ||
            payload.user.email?.split("@")[0] ||
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

        set({
          firstName: trimmedName,
          email: trimmedEmail,
        });
        await ensureUserProfile({
          userId: state.userId,
          email: trimmedEmail,
          firstName: trimmedName,
          avatarUrl: state.avatarUri,
        });
        return {};
      },
      hydrateFromNeon: async () => {
        if (get().userId === "user_guest") {
          set({ ...signedOutState, authReady: true });
        }

        set({ authReady: true });

        // Prefer Stack Apple session if present.
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
                };
              };
              if (data.user?.id) {
                get().setFromRemoteUser({
                  userId: data.user.id,
                  email: data.user.email,
                  firstName: data.user.firstName,
                  authProvider: "apple",
                  ...(data.user.avatarUrl
                    ? { avatarUri: data.user.avatarUrl }
                    : {}),
                });
                void pullRemoteState(data.user.id).catch((err) => {
                  console.warn("[apple] pullRemoteState failed", err);
                });
                return;
              }
            } else if (response.status === 401) {
              await clearAppleAccessToken();
              if (get().authProvider === "apple") {
                set({ ...signedOutState, authReady: true });
              }
            }
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
          } else if (get().isSignedIn && get().authProvider !== "apple") {
            set({ ...signedOutState, authReady: true });
          }
        } catch (err) {
          console.warn("[neon] hydrate failed", err);
        }
      },
      deleteLearningData: async () => {
        const state = get();
        if (!state.userId || !state.isSignedIn) {
          return { error: "Connecte-toi pour supprimer tes données." };
        }

        useLearningStore.getState().clearAllLocalData();
        useCertificationStore.getState().clearAll();

        try {
          await wipeRemoteLearningData(state.userId);
        } catch (err) {
          console.warn("[sync] wipeRemoteLearningData failed", err);
          return {
            error:
              "Impossible d’effacer les données serveur. Réessaie ou contacte le support.",
          };
        }
        return {};
      },
      deleteAccount: async (input) => {
        const state = get();
        if (!state.userId) {
          return { error: "Aucun compte à supprimer." };
        }

        if (state.authProvider === "apple") {
          try {
            await deleteRemoteUserData(state.userId);
          } catch (err) {
            console.warn("[apple] delete account failed", err);
            return {
              error:
                "Impossible de supprimer le compte Apple. Réessaie ou contacte le support.",
            };
          }
          await clearAppleAccessToken();
          set({ ...signedOutState, authReady: true });
          return {};
        }

        const password = input?.password?.trim() ?? "";
        if (!password) {
          return { error: "Mot de passe requis pour supprimer le compte." };
        }

        if (isNeonConfigured()) {
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
                  "Compte Auth non supprimé (données app déjà effacées). Réessaie avec le bon mot de passe ou contacte le support.",
              };
            }
          } catch (err) {
            console.warn("[neon] deleteUser failed", err);
            return {
              error:
                "Compte Auth non supprimé (données app déjà effacées). Vérifie ton mot de passe ou contacte le support.",
            };
          }

          try {
            await authClient.signOut();
          } catch (err) {
            console.warn("[neon] signOut after delete failed", err);
          }
        }

        set({ ...signedOutState, authReady: true });
        return {};
      },
      signOut: async () => {
        const provider = get().authProvider;
        if (provider === "apple") {
          const token = await getAppleAccessToken();
          if (token) {
            try {
              await apiFetch("/api/auth/me", {
                method: "DELETE",
                accessToken: token,
              });
            } catch (err) {
              console.warn("[apple] revoke session failed", err);
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
        set({ ...signedOutState, authReady: true });
      },
    }),
    {
      name: "session-storage",
      storage: createJSONStorage(() => persistStorage),
      partialize: (state) => ({
        userId: state.userId,
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
      email: s.email,
      firstName: s.firstName,
      avatarUri: s.avatarUri,
    };
  },
  patch: (partial) => {
    useSessionStore.setState(partial);
  },
});
