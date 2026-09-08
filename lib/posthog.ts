import PostHog from "posthog-react-native";
import Constants from "expo-constants";

const apiKey = Constants.expoConfig?.extra?.posthogProjectToken as
  | string
  | undefined;
const host = Constants.expoConfig?.extra?.posthogHost as string | undefined;
const isPostHogConfigured =
  !!apiKey && apiKey !== "phc_your_project_token_here";

// Phone often cannot reach PostHog while tunneling / off corporate Wi‑Fi.
// Keep analytics for production builds only to avoid noisy flush errors in Expo Go.
const isPostHogEnabled = isPostHogConfigured && !__DEV__;

if (__DEV__) {
  console.log("PostHog config:", {
    apiKey: apiKey ? "SET" : "NOT SET",
    host: host ? "SET" : "NOT SET",
    isConfigured: isPostHogConfigured,
    enabled: isPostHogEnabled,
  });
}

if (!isPostHogConfigured) {
  console.warn(
    "PostHog project token not configured. Analytics will be disabled. " +
      "Set POSTHOG_PROJECT_TOKEN in your .env file to enable analytics."
  );
}

export const posthog = new PostHog(apiKey || "placeholder_key", {
  host,
  disabled: !isPostHogEnabled,
  captureAppLifecycleEvents: isPostHogEnabled,
  flushAt: 20,
  flushInterval: 10000,
  maxBatchSize: 100,
  maxQueueSize: 1000,
  preloadFeatureFlags: false,
  sendFeatureFlagEvent: false,
  featureFlagsRequestTimeoutMs: 10000,
  requestTimeout: 10000,
  fetchRetryCount: 0,
  fetchRetryDelay: 3000,
});
