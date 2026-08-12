import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface SessionState {
  userId: string | null;
  email: string | null;
  firstName: string | null;
  isSignedIn: boolean;
  signIn: (input: { email: string; firstName?: string }) => void;
  signInAsGuest: () => void;
  signOut: () => void;
}

function makeUserId(email: string) {
  return `user_${email.toLowerCase().replace(/[^a-z0-9]/g, "_")}`;
}

export const useSessionStore = create<SessionState>()(
  persist(
    (set) => ({
      userId: null,
      email: null,
      firstName: null,
      isSignedIn: false,
      signIn: ({ email, firstName }) => {
        const name = firstName ?? email.split("@")[0] ?? "Learner";
        set({
          userId: makeUserId(email),
          email,
          firstName: name,
          isSignedIn: true,
        });
      },
      signInAsGuest: () =>
        set({
          userId: "user_guest",
          email: null,
          firstName: "Invité",
          isSignedIn: true,
        }),
      signOut: () =>
        set({
          userId: null,
          email: null,
          firstName: null,
          isSignedIn: false,
        }),
    }),
    {
      name: "session-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
