import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { persistStorage } from "@/lib/persistStorage";

import type {
  CertPathStatus,
  CertProgress,
  UserCertEntry,
} from "@/types/certification";

interface CertificationState {
  entries: Record<string, UserCertEntry>;
  addToPath: (id: string) => void;
  setStatus: (id: string, status: CertPathStatus) => void;
  setProgress: (id: string, progress: CertProgress) => void;
  markObtained: (id: string) => void;
  removeFromPath: (id: string) => void;
  clearAll: () => void;
}

export const useCertificationStore = create<CertificationState>()(
  persist(
    (set, get) => ({
      entries: {},
      addToPath: (id) =>
        set((state) => {
          if (state.entries[id]) return {};
          return {
            entries: {
              ...state.entries,
              [id]: { status: "todo", progress: 0 },
            },
          };
        }),
      setStatus: (id, status) =>
        set((state) => {
          const cur = state.entries[id] ?? { status: "todo", progress: 0 };
          const next: UserCertEntry = {
            ...cur,
            status,
            progress:
              status === "obtained"
                ? 100
                : status === "todo"
                  ? 0
                  : cur.progress || 25,
            obtainedAt:
              status === "obtained"
                ? cur.obtainedAt ?? new Date().toISOString().slice(0, 10)
                : undefined,
          };
          return { entries: { ...state.entries, [id]: next } };
        }),
      setProgress: (id, progress) =>
        set((state) => {
          const cur = state.entries[id] ?? {
            status: "preparing" as const,
            progress: 0,
          };
          const next: UserCertEntry = {
            ...cur,
            status: progress === 100 ? cur.status : "preparing",
            progress,
          };
          return { entries: { ...state.entries, [id]: next } };
        }),
      markObtained: (id) => get().setStatus(id, "obtained"),
      removeFromPath: (id) =>
        set((state) => {
          const { [id]: _, ...rest } = state.entries;
          return { entries: rest };
        }),
      clearAll: () => set({ entries: {} }),
    }),
    {
      name: "certification-storage",
      storage: createJSONStorage(() => persistStorage),
    }
  )
);

export function selectCertsByStatus(
  entries: Record<string, UserCertEntry>,
  status: CertPathStatus
) {
  return Object.entries(entries)
    .filter(([, e]) => e.status === status)
    .map(([id, e]) => ({ id, ...e }));
}
