import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { useLanguageStore } from "@/store/languageStore";
import { useSessionStore } from "@/store/sessionStore";

export default function Index() {
  const { isSignedIn } = useSessionStore();
  const { selectedLanguage } = useLanguageStore();
  const [hydrated, setHydrated] = useState(
    useSessionStore.persist.hasHydrated() &&
      useLanguageStore.persist.hasHydrated()
  );

  useEffect(() => {
    if (hydrated) return;

    const finish = () => {
      if (
        useSessionStore.persist.hasHydrated() &&
        useLanguageStore.persist.hasHydrated()
      ) {
        setHydrated(true);
      }
    };

    const unsubSession = useSessionStore.persist.onFinishHydration(finish);
    const unsubLanguage = useLanguageStore.persist.onFinishHydration(finish);
    const timer = setTimeout(() => setHydrated(true), 1500);

    return () => {
      unsubSession();
      unsubLanguage();
      clearTimeout(timer);
    };
  }, [hydrated]);

  if (!hydrated) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#6c4ef5" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  if (!selectedLanguage) {
    return <Redirect href="/language-select" />;
  }

  return <Redirect href="/(tabs)" />;
}
