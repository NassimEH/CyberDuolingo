import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { persistStorage } from "@/lib/persistStorage";

interface ThemeState {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      darkMode: false,
      setDarkMode: (darkMode) => set({ darkMode }),
      toggleDarkMode: () => set((s) => ({ darkMode: !s.darkMode })),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => persistStorage),
    }
  )
);
