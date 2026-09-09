import * as Haptics from "expo-haptics";

async function haptic(type: Haptics.NotificationFeedbackType) {
  try {
    await Haptics.notificationAsync(type);
  } catch {
    // Haptics optional (web / unsupported devices).
  }
}

export async function feedbackLight() {
  try {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  } catch {
    // optional
  }
}

export async function feedbackSuccess() {
  await haptic(Haptics.NotificationFeedbackType.Success);
}

export async function feedbackError() {
  await haptic(Haptics.NotificationFeedbackType.Error);
}

export async function feedbackComplete() {
  await haptic(Haptics.NotificationFeedbackType.Success);
}
