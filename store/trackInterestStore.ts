import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { TrackId } from "@/types/learning";

interface TrackInterestState {
  interestedTrackIds: TrackId[];
  toggleInterest: (trackId: TrackId) => void;
  isInterested: (trackId: TrackId) => boolean;
}

export const useTrackInterestStore = create<TrackInterestState>()(
  persist(
    (set, get) => ({
      interestedTrackIds: [],
      toggleInterest: (trackId) =>
        set((state) => {
          const has = state.interestedTrackIds.includes(trackId);
          return {
            interestedTrackIds: has
              ? state.interestedTrackIds.filter((id) => id !== trackId)
              : [...state.interestedTrackIds, trackId],
          };
        }),
      isInterested: (trackId) => get().interestedTrackIds.includes(trackId),
    }),
    {
      name: "track-interest-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
