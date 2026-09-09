import PostHog from "posthog-react-native";
import Constants from "expo-constants";

const PLACEHOLDER_TOKEN = "phc_your_project_token_here";

const apiKey = Constants.expoConfig?.extra?.posthogProjectToken as
  | string
  | undefined;
const host =
  (Constants.expoConfig?.extra?.posthogHost as string | undefined) ||
  "https://us.i.posthog.com";

const isPostHogConfigured =
  !!apiKey && apiKey !== PLACEHOLDER_TOKEN && apiKey.startsWith("phc_");

/**
 * Analytics run whenever a real project token is set in `.env`
 * (`POSTHOG_PROJECT_TOKEN`). Privacy opt-out still applies via `lib/analytics`.
 */
const isPostHogEnabled = isPostHogConfigured;

if (__DEV__) {
  console.log("PostHog config:", {
    apiKey: apiKey ? "SET" : "NOT SET",
    host,
    isConfigured: isPostHogConfigured,
    enabled: isPostHogEnabled,
  });
}

if (!isPostHogConfigured) {
  console.warn(
    "PostHog project token not configured. Analytics will be disabled. " +
      "Set POSTHOG_PROJECT_TOKEN in your .env file (see .env.example), then restart Expo."
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
  fetchRetryCount: isPostHogEnabled ? 2 : 0,
  fetchRetryDelay: 3000,
});

export const isPostHogReady = isPostHogEnabled;
