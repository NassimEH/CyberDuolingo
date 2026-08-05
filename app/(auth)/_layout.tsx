import { Redirect, Stack } from "expo-router";
import { useEffect, useState } from "react";

import { useSessionStore } from "@/store/sessionStore";

export default function AuthLayout() {
  const { isSignedIn } = useSessionStore();
  const [hydrated, setHydrated] = useState(
    useSessionStore.persist.hasHydrated()
  );

  useEffect(() => {
    if (hydrated) return;
    return useSessionStore.persist.onFinishHydration(() => setHydrated(true));
  }, [hydrated]);

  if (!hydrated) {
    return null;
  }

  if (isSignedIn) {
    return <Redirect href="/" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
