import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import {
  cacheAvatarLocally,
  clearCachedAvatar,
} from "@/lib/avatar";
import { authClient, isNeonConfigured } from "@/lib/neon";
import {
  deleteRemoteUserData,
  ensureUserProfile,
  pullRemoteState,
  pushRemoteState,
  wipeRemoteLearningData,
} from "@/lib/remoteSync";
import { useCertificationStore } from "@/store/certificationStore";
import { useLearningStore } from "@/store/learningStore";

interface SessionState {
  userId: string | null;
  email: string | null;
  firstName: string | null;
  avatarUri: string | null;
  isSignedIn: boolean;
  authReady: boolean;
  setFromRemoteUser: (input: {
    userId: string;
    email?: string | null;
    firstName?: string | null;
    avatarUri?: string | null;
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
};

export const useSessionStore = create<SessionState>()(
  persist(
    (set, get) => ({
      ...signedOutState,
      authReady: false,
      setFromRemoteUser: ({ userId, email, firstName, avatarUri }) =>
        set({
          userId,
          email: email ?? null,
          firstName: firstName ?? email?.split("@")[0] ?? "Learner",
          // Keep local/remote avatar unless auth provides a real image URL.
          ...(avatarUri ? { avatarUri } : {}),
          isSignedIn: true,
        }),
      signInWithPassword: async ({ email, password }) => {
        if (!isNeonConfigured()) {
          return { error: "Neon Auth n'est pas configuré." };
        }
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
          ...(user.image ? { avatarUri: user.image } : {}),
        });
        // Restore avatar (and other prefs) before any profile upsert.
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

        if (!isNeonConfigured()) return;
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

        if (isNeonConfigured()) {
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

        if (!isNeonConfigured()) {
          set({ authReady: true });
          return;
        }

        // UI can already render from persisted session; verify in background.
        set({ authReady: true });

        try {
          const session = await authClient.getSession();
          const user = session.data?.user;
          if (user?.id) {
            get().setFromRemoteUser({
              userId: user.id,
              email: user.email,
              firstName: user.name,
              ...(user.image ? { avatarUri: user.image } : {}),
            });
            // Do not block startup on remote progress sync.
            void pullRemoteState(user.id).catch((err) => {
              console.warn("[neon] pullRemoteState failed", err);
            });
          } else if (get().isSignedIn) {
            // Cookie/session expired — clear optimistic local auth.
            set({ ...signedOutState, authReady: true });
          }
        } catch (err) {
          // Offline / transient: keep optimistic session so cold start stays fast.
          console.warn("[neon] hydrate failed", err);
        }
      },
      deleteLearningData: async () => {
        const state = get();
        if (!state.userId || !state.isSignedIn) {
          return { error: "Connecte-toi pour supprimer tes données." };
        }

        // Local wipe first so pushRemoteState writes empty progress.
        useLearningStore.getState().clearAllLocalData();
        useCertificationStore.getState().clearAll();

        if (isNeonConfigured()) {
          try {
            await wipeRemoteLearningData(state.userId);
          } catch (err) {
            console.warn("[neon] wipeRemoteLearningData failed", err);
            return {
              error:
                "Impossible d’effacer les données serveur. Réessaie ou contacte le support.",
            };
          }
        }
        return {};
      },
      deleteAccount: async (input) => {
        const state = get();
        if (!state.userId) {
          return { error: "Aucun compte à supprimer." };
        }

        const password = input?.password?.trim() ?? "";
        if (!password) {
          return { error: "Mot de passe requis pour supprimer le compte." };
        }

        if (isNeonConfigured()) {
          // Auth delete first when possible would invalidate JWT before Data API wipe.
          // So: wipe app rows with current JWT, then hard-delete Auth user.
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
        if (isNeonConfigured()) {
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
      storage: createJSONStorage(() => AsyncStorage),
      // Optimistic boot: persist session flags (never email).
      partialize: (state) => ({
        userId: state.userId,
        isSignedIn: state.isSignedIn,
        firstName: state.firstName,
        avatarUri: state.avatarUri,
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
          // Unlock UI as soon as AsyncStorage rehydrates.
          authReady: true,
        };
      },
      onRehydrateStorage: () => () => {
        // Ensure boot unlock even when there was no persisted payload.
        queueMicrotask(() => {
          useSessionStore.setState({ authReady: true });
        });
      },
    }
  )
);
