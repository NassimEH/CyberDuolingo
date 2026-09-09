import { create } from "zustand";

export type SyncStatus = "idle" | "syncing" | "offline" | "error" | "pending";

interface SyncState {
  status: SyncStatus;
  lastSyncedAt: string | null;
  lastError: string | null;
  pending: boolean;
  setOnline: (online: boolean) => void;
  markPending: () => void;
  markSyncing: () => void;
  markSynced: () => void;
  markError: (message: string) => void;
}

export const useSyncStore = create<SyncState>((set, get) => ({
  status: "idle",
  lastSyncedAt: null,
  lastError: null,
  pending: false,
  setOnline: (online) =>
    set((state) => {
      if (!online) {
        return { status: "offline", lastError: null };
      }
      if (state.status === "offline") {
        return {
          status: state.pending ? "pending" : "idle",
        };
      }
      return {};
    }),
  markPending: () => {
    const online = get().status !== "offline";
    set({
      pending: true,
      status: online ? "pending" : "offline",
      lastError: null,
    });
  },
  markSyncing: () => set({ status: "syncing", lastError: null }),
  markSynced: () =>
    set({
      status: "idle",
      pending: false,
      lastError: null,
      lastSyncedAt: new Date().toISOString(),
    }),
  markError: (message) =>
    set({
      status: "error",
      pending: true,
      lastError: message,
    }),
}));
