import * as Haptics from "expo-haptics";

import { playComplete, playError, playSuccess } from "@/lib/sounds";
import { useLearningStore } from "@/store/learningStore";

export async function feedbackSuccess() {
  const soundEnabled = useLearningStore.getState().soundEnabled;
  if (soundEnabled) await playSuccess();
  try {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  } catch {
    // ignore
  }
}

export async function feedbackError() {
  const soundEnabled = useLearningStore.getState().soundEnabled;
  if (soundEnabled) await playError();
  try {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  } catch {
    // ignore
  }
}

export async function feedbackComplete() {
  const soundEnabled = useLearningStore.getState().soundEnabled;
  if (soundEnabled) await playComplete();
  try {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  } catch {
    // ignore
  }
}
