import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { persistStorage } from "@/lib/persistStorage";

import type { TrackId } from "@/types/learning";

interface TrackState {
  selectedTrack: TrackId | null;
  setSelectedTrack: (track: TrackId) => void;
  clearSelectedTrack: () => void;
}

export const useTrackStore = create<TrackState>()(
  persist(
    (set) => ({
      selectedTrack: null,
      setSelectedTrack: (track) => set({ selectedTrack: track }),
      clearSelectedTrack: () => set({ selectedTrack: null }),
    }),
    {
      name: "track-storage",
      storage: createJSONStorage(() => persistStorage),
    }
  )
);
