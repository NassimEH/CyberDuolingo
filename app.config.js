const easProjectId =
  process.env.EAS_PROJECT_ID?.trim() ||
  "9db897d7-c686-46d6-bd77-7cf6ddf69654";

export default {
  expo: {
    name: "Stack",
    slug: "stack",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "stack",
    userInterfaceStyle: "automatic",
    newArchEnabled: false,
    ios: {
      supportsTablet: false,
      bundleIdentifier: "me.nassimelh.stack",
      usesAppleSignIn: true,
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
      entitlements: {
        "com.apple.developer.applesignin": ["Default"],
      },
    },
    android: {
      package: "me.nassimelh.stack",
      adaptiveIcon: {
        backgroundColor: "#FFFFFF",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png",
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
    },
    web: {
      // Required for Expo Router API routes (`app/api/*+api.ts`).
      output: "server",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-notifications",
        {
          icon: "./assets/images/icon.png",
          color: "#2563EB",
          defaultChannel: "stack-reminders",
        },
      ],
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
          dark: {
            backgroundColor: "#0B1220",
          },
        },
      ],
      "expo-secure-store",
      "expo-asset",
      "expo-font",
      "expo-image",
      [
        "expo-image-picker",
        {
          photosPermission:
            "Allow $(PRODUCT_NAME) to access your photos to set a profile picture.",
          // Gallery-only avatar picker — do not declare unused camera/mic (Apple 5.1.1).
          cameraPermission: false,
          microphonePermission: false,
        },
      ],
      "expo-status-bar",
      "expo-web-browser",
      "expo-apple-authentication",
      [
        "expo-build-properties",
        {
          android: {
            minSdkVersion: 24,
          },
        },
      ],
      "expo-updates",
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    runtimeVersion: { policy: "appVersion" },
    updates: {
      url: `https://u.expo.dev/${easProjectId}`,
      fallbackToCacheTimeout: 0,
    },
    extra: {
      posthogProjectToken:
        process.env.POSTHOG_PROJECT_TOKEN || "phc_your_project_token_here",
      posthogHost: process.env.POSTHOG_HOST || "https://us.i.posthog.com",
      neonAuthUrl: process.env.EXPO_PUBLIC_NEON_AUTH_URL,
      neonDataApiUrl: process.env.EXPO_PUBLIC_NEON_DATA_API_URL,
      authOrigin: process.env.EXPO_PUBLIC_AUTH_ORIGIN,
      siteUrl: process.env.EXPO_PUBLIC_SITE_URL,
      googleWebClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
      googleIosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
      googleAndroidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
      apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL,
      eas: {
        projectId: easProjectId,
      },
    },
  },
};
