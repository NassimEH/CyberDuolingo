import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface PrivacyState {
  analyticsEnabled: boolean;
  setAnalyticsEnabled: (value: boolean) => void;
  /** User preference for alerts (grant/revoke via system Settings). */
  notificationsEnabled: boolean;
  setNotificationsEnabled: (value: boolean) => void;
}

export const usePrivacyStore = create<PrivacyState>()(
  persist(
    (set) => ({
      analyticsEnabled: false,
      setAnalyticsEnabled: (analyticsEnabled) => set({ analyticsEnabled }),
      notificationsEnabled: false,
      setNotificationsEnabled: (notificationsEnabled) =>
        set({ notificationsEnabled }),
    }),
    {
      name: "privacy-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
