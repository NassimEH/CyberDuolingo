import "../global.css";

import { NeonSessionBridge } from "@/components/NeonSessionBridge";
import { NotificationScheduler } from "@/components/NotificationScheduler";
import { SyncStatusBridge } from "@/components/SyncStatusBridge";
import { preloadCriticalImages } from "@/constants/images";
import { identifyUser, syncAnalyticsFromStore } from "@/lib/analytics";
import { posthog } from "@/lib/posthog";
import { usePrivacyStore } from "@/store/privacyStore";
import { useSessionStore } from "@/store/sessionStore";
import { useTrackStore } from "@/store/trackStore";
import { useFonts } from "expo-font";
import { Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { PostHogProvider } from "posthog-react-native";
import { useEffect, useRef, useState } from "react";
import { Platform } from "react-native";

const isWeb = Platform.OS === "web";

if (!isWeb) {
  SplashScreen.preventAutoHideAsync();
}

function SessionIdentifier() {
  const { isSignedIn, userId, firstName } = useSessionStore();
  const selectedTrack = useTrackStore((s) => s.selectedTrack);
  const analyticsEnabled = usePrivacyStore((s) => s.analyticsEnabled);

  useEffect(() => {
    if (!analyticsEnabled || !isSignedIn || !userId) return;
    identifyUser(userId, {
      name: firstName,
      preferredTrack: selectedTrack,
    });
  }, [analyticsEnabled, isSignedIn, userId, firstName, selectedTrack]);

  return null;
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });
  const [imagesReady, setImagesReady] = useState(isWeb);

  const pathname = usePathname();
  const previousPathname = useRef<string | undefined>(undefined);
  const fontsReady = isWeb || fontsLoaded || !!fontError;
  const appReady = fontsReady && imagesReady;

  useEffect(() => {
    if (isWeb) return;
    let cancelled = false;
    void preloadCriticalImages()
      .catch(() => undefined)
      .finally(() => {
        if (!cancelled) setImagesReady(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (isWeb) return;
    if (!appReady) return;

    const tryHide = () => {
      const storesReady =
        useSessionStore.persist.hasHydrated() &&
        useTrackStore.persist.hasHydrated();
      if (storesReady) {
        void SplashScreen.hideAsync();
      }
    };

    tryHide();
    const unsubSession = useSessionStore.persist.onFinishHydration(tryHide);
    const unsubTrack = useTrackStore.persist.onFinishHydration(tryHide);
    // Failsafe so splash never sticks.
    const timer = setTimeout(() => {
      void SplashScreen.hideAsync();
    }, 400);

    return () => {
      unsubSession();
      unsubTrack();
      clearTimeout(timer);
    };
  }, [appReady]);

  useEffect(() => {
    const apply = () => syncAnalyticsFromStore();
    apply();
    const unsub = usePrivacyStore.persist.onFinishHydration(apply);
    return unsub;
  }, []);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    if (usePrivacyStore.getState().analyticsEnabled) {
      posthog.screen(pathname, {
        previous_screen: previousPathname.current ?? null,
      });
    }
    previousPathname.current = pathname;
  }, [pathname]);

  if (!appReady) {
    return null;
  }

  return (
    <PostHogProvider
      client={posthog}
      autocapture={{
        captureScreens: true,
        captureTouches: true,
        propsToCapture: ["testID"],
        maxElementsCaptured: 20,
      }}
    >
      <SessionIdentifier />
      <NeonSessionBridge />
      <SyncStatusBridge />
      <NotificationScheduler />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
          animationDuration: 220,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="language-select" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="lesson/[id]" />
        <Stack.Screen name="certifications" />
        <Stack.Screen name="notifications" />
        <Stack.Screen name="account/edit" />
        <Stack.Screen name="privacy/preferences" />
        <Stack.Screen name="legal/[slug]" />
        <Stack.Screen name="about" />
        <Stack.Screen name="support" />
      </Stack>
    </PostHogProvider>
  );
}
