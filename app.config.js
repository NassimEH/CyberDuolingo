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
      supportsTablet: true,
      bundleIdentifier: "com.stack.app",
    },
    android: {
      package: "com.stack.app",
      adaptiveIcon: {
        backgroundColor: "#DBEAFE",
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
      "expo-updates",
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
            backgroundColor: "#000000",
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
        },
      ],
      "expo-status-bar",
      "expo-web-browser",
      "@stream-io/video-react-native-sdk",
      [
        "@config-plugins/react-native-webrtc",
        {
          cameraPermission:
            "Allow $(PRODUCT_NAME) to access your camera for Stack lessons.",
          microphonePermission:
            "Allow $(PRODUCT_NAME) to access your microphone for Stack lessons.",
        },
      ],
      [
        "expo-build-properties",
        {
          android: {
            minSdkVersion: 24,
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    runtimeVersion: {
      policy: "appVersion",
    },
    updates: {
      url: "https://u.expo.dev/placeholder-project-id",
      fallbackToCacheTimeout: 0,
    },
    extra: {
      posthogProjectToken:
        process.env.POSTHOG_PROJECT_TOKEN || "phc_your_project_token_here",
      posthogHost: process.env.POSTHOG_HOST || "https://us.i.posthog.com",
      streamApiKey: process.env.STREAM_API_KEY,
      neonAuthUrl: process.env.EXPO_PUBLIC_NEON_AUTH_URL,
      neonDataApiUrl: process.env.EXPO_PUBLIC_NEON_DATA_API_URL,
      authOrigin: process.env.EXPO_PUBLIC_AUTH_ORIGIN,
      eas: {
        projectId: process.env.EAS_PROJECT_ID || "placeholder-project-id",
      },
    },
  },
};
