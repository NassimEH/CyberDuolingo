import * as Haptics from "expo-haptics";

import { playComplete, playError, playSuccess } from "@/lib/sounds";
import { useLearningStore } from "@/store/learningStore";

async function withHaptics(
  type: Haptics.NotificationFeedbackType,
  sound: () => Promise<void>
) {
  const soundEnabled = useLearningStore.getState().soundEnabled;
  if (soundEnabled) {
    try {
      await sound();
    } catch {
      // audio optional — never block quiz UX
    }
  }
  try {
    await Haptics.notificationAsync(type);
  } catch {
    // ignore
  }
}

export async function feedbackSuccess() {
  await withHaptics(Haptics.NotificationFeedbackType.Success, playSuccess);
}

export async function feedbackError() {
  await withHaptics(Haptics.NotificationFeedbackType.Error, playError);
}

export async function feedbackComplete() {
  await withHaptics(Haptics.NotificationFeedbackType.Success, playComplete);
}
