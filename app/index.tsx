import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { colors } from "@/constants/theme";
import { useSessionStore } from "@/store/sessionStore";
import { useTrackStore } from "@/store/trackStore";

export default function Index() {
  const { isSignedIn } = useSessionStore();
  const { selectedTrack } = useTrackStore();
  const [hydrated, setHydrated] = useState(
    useSessionStore.persist.hasHydrated() && useTrackStore.persist.hasHydrated()
  );

  useEffect(() => {
    if (hydrated) return;

    const finish = () => {
      if (
        useSessionStore.persist.hasHydrated() &&
        useTrackStore.persist.hasHydrated()
      ) {
        setHydrated(true);
      }
    };

    const unsubSession = useSessionStore.persist.onFinishHydration(finish);
    const unsubTrack = useTrackStore.persist.onFinishHydration(finish);
    const timer = setTimeout(() => setHydrated(true), 1500);

    return () => {
      unsubSession();
      unsubTrack();
      clearTimeout(timer);
    };
  }, [hydrated]);

  if (!hydrated) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primary.blue} />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  if (!selectedTrack) {
    return <Redirect href="/language-select" />;
  }

  return <Redirect href="/(tabs)" />;
}
