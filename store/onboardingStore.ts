import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { persistStorage } from "@/lib/persistStorage";

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
      storage: createJSONStorage(() => persistStorage),
    }
  )
);
