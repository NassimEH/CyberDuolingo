import NetInfo from "@react-native-community/netinfo";
import { useEffect } from "react";
import { AppState, Platform } from "react-native";

import { flushPendingRemoteSync } from "@/lib/remoteSync";
import { useSessionStore } from "@/store/sessionStore";
import { useSyncStore } from "@/store/syncStore";

/** Tracks connectivity and retries Neon sync when back online. */
export function SyncStatusBridge() {
  useEffect(() => {
    if (Platform.OS === "web") return;

    const apply = (online: boolean) => {
      useSyncStore.getState().setOnline(online);
      if (online) {
        const userId = useSessionStore.getState().userId;
        if (userId && useSyncStore.getState().pending) {
          void flushPendingRemoteSync(userId);
        }
      }
    };

    const unsub = NetInfo.addEventListener((state) => {
      const online = Boolean(state.isConnected && state.isInternetReachable !== false);
      apply(online);
    });

    void NetInfo.fetch().then((state) => {
      const online = Boolean(state.isConnected && state.isInternetReachable !== false);
      apply(online);
    });

    const appSub = AppState.addEventListener("change", (next) => {
      if (next !== "active") return;
      void NetInfo.fetch().then((state) => {
        const online = Boolean(
          state.isConnected && state.isInternetReachable !== false
        );
        apply(online);
      });
    });

    return () => {
      unsub();
      appSub.remove();
    };
  }, []);

  return null;
}
