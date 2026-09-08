import "../global.css";

import { posthog } from "@/lib/posthog";
import { useSessionStore } from "@/store/sessionStore";
import { useTrackStore } from "@/store/trackStore";
import { useFonts } from "expo-font";
import { Stack, useGlobalSearchParams, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { PostHogProvider } from "posthog-react-native";
import { useEffect, useRef } from "react";
import { Platform } from "react-native";

const isWeb = Platform.OS === "web";

if (!isWeb) {
  SplashScreen.preventAutoHideAsync();
}

function SessionIdentifier() {
  const { isSignedIn, userId, firstName } = useSessionStore();
  const selectedTrack = useTrackStore((s) => s.selectedTrack);

  useEffect(() => {
    if (!isSignedIn || !userId) return;
    posthog.identify(userId, {
      $set_once: { signup_date: new Date().toISOString() },
      $set: {
        preferred_track: selectedTrack ?? null,
        name: firstName ?? null,
      },
    });
  }, [isSignedIn, userId, firstName, selectedTrack]);

  return null;
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const pathname = usePathname();
  const params = useGlobalSearchParams();
  const previousPathname = useRef<string | undefined>(undefined);
  const appReady = isWeb || fontsLoaded || !!fontError;

  useEffect(() => {
    if (!isWeb && (fontsLoaded || fontError)) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      posthog.screen(pathname, {
        previous_screen: previousPathname.current ?? null,
        ...params,
      });
      previousPathname.current = pathname;
    }
  }, [pathname, params]);

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
        <Stack.Screen name="certifications/index" />
        <Stack.Screen name="certifications/[id]" />
        <Stack.Screen name="certifications/finder" />
      </Stack>
    </PostHogProvider>
  );
}
