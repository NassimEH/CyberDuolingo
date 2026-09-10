import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { persistStorage } from "@/lib/persistStorage";

import type { Locale } from "@/lib/i18n/translations";

interface LocaleState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set) => ({
      locale: "fr",
      setLocale: (locale) => set({ locale }),
    }),
    {
      name: "locale-storage",
      storage: createJSONStorage(() => persistStorage),
    }
  )
);
