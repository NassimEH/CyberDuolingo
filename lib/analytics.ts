import { posthog } from "@/lib/posthog";
import { usePrivacyStore } from "@/store/privacyStore";

/** Apply persisted analytics preference to the PostHog client. */
export function applyAnalyticsPreference(enabled: boolean) {
  try {
    if (enabled) {
      posthog.optIn();
    } else {
      posthog.optOut();
    }
  } catch {
    // Client may be unavailable — preference still persists.
  }
}

export function syncAnalyticsFromStore() {
  const enabled = usePrivacyStore.getState().analyticsEnabled;
  applyAnalyticsPreference(enabled);
}

export function setAnalyticsEnabled(enabled: boolean) {
  if (!enabled) {
    trackEvent("analytics_preference_changed", { enabled: false });
  }
  usePrivacyStore.getState().setAnalyticsEnabled(enabled);
  applyAnalyticsPreference(enabled);
  if (enabled) {
    trackEvent("analytics_preference_changed", { enabled: true });
  }
}

type EventProps = Record<string, string | number | boolean | null>;

function sanitizeProps(
  properties?: Record<string, string | number | boolean | null | undefined>
): EventProps | undefined {
  if (!properties) return undefined;
  const out: EventProps = {};
  for (const [key, value] of Object.entries(properties)) {
    if (value !== undefined) out[key] = value;
  }
  return out;
}

/** Safe client capture (no-ops if PostHog is disabled / opted out). */
export function trackEvent(
  event: string,
  properties?: Record<string, string | number | boolean | null | undefined>
) {
  try {
    if (!usePrivacyStore.getState().analyticsEnabled) return;
    posthog.capture(event, sanitizeProps(properties));
  } catch {
    // Ignore analytics failures — never block UX.
  }
}

/** Identify without PII (no email). Only when analytics are opted in. */
export function identifyUser(
  userId: string,
  traits?: {
    name?: string | null;
    preferredTrack?: string | null;
    signupDate?: string;
  }
) {
  try {
    if (!usePrivacyStore.getState().analyticsEnabled) return;
    if (traits?.signupDate) {
      posthog.identify(userId, {
        $set_once: { signup_date: traits.signupDate },
        $set: {
          preferred_track: traits.preferredTrack ?? null,
          name: traits.name ?? null,
        },
      });
      return;
    }
    posthog.identify(userId, {
      $set: {
        preferred_track: traits?.preferredTrack ?? null,
        name: traits?.name ?? null,
      },
    });
  } catch {
    // Ignore.
  }
}

/** Manual exception capture for critical flows. */
export function trackException(
  error: unknown,
  context?: Record<string, string | number | boolean | null | undefined> & {
    flow?: string;
  }
) {
  const err = error instanceof Error ? error : new Error(String(error));
  try {
    if (!usePrivacyStore.getState().analyticsEnabled) return;
    posthog.capture("$exception", {
      $exception_type: err.name,
      $exception_message: err.message,
      $exception_stack_trace_raw: err.stack ?? null,
      ...sanitizeProps(context),
    });
  } catch {
    // Ignore.
  }
}
