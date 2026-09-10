const easProjectId = process.env.EAS_PROJECT_ID?.trim();

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
      bundleIdentifier: "com.stack.app",
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      package: "com.stack.app",
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
      output: "single",
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
      [
        "expo-build-properties",
        {
          android: {
            minSdkVersion: 24,
          },
        },
      ],
      // Only wire EAS Update when a real project id is configured.
      ...(easProjectId ? ["expo-updates"] : []),
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    ...(easProjectId
      ? {
          runtimeVersion: { policy: "appVersion" },
          updates: {
            url: `https://u.expo.dev/${easProjectId}`,
            fallbackToCacheTimeout: 0,
          },
        }
      : {}),
    extra: {
      posthogProjectToken:
        process.env.POSTHOG_PROJECT_TOKEN || "phc_your_project_token_here",
      posthogHost: process.env.POSTHOG_HOST || "https://us.i.posthog.com",
      neonAuthUrl: process.env.EXPO_PUBLIC_NEON_AUTH_URL,
      neonDataApiUrl: process.env.EXPO_PUBLIC_NEON_DATA_API_URL,
      authOrigin: process.env.EXPO_PUBLIC_AUTH_ORIGIN,
      siteUrl: process.env.EXPO_PUBLIC_SITE_URL,
      ...(easProjectId
        ? {
            eas: {
              projectId: easProjectId,
            },
          }
        : {}),
    },
  },
};
