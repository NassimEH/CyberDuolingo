import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface OnboardingState {
  hasSeenProductTour: boolean;
  completeProductTour: () => void;
  resetProductTour: () => void;
}

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      hasSeenProductTour: false,
      completeProductTour: () => set({ hasSeenProductTour: true }),
      resetProductTour: () => set({ hasSeenProductTour: false }),
    }),
    {
      name: "onboarding-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
