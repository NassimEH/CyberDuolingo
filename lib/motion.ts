import {
  Easing,
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeOut,
  ZoomIn,
} from "react-native-reanimated";

/** Shared timing — light & snappy for a premium feel. */
export const motion = {
  duration: {
    fast: 160,
    base: 220,
    slow: 300,
  },
  easing: Easing.out(Easing.cubic),
  stagger: 40,
  distance: 8 as number,
} as const;

/** Staggered fade + slight rise (lists, screen sections). */
export function enterUp(index = 0, distance: number = motion.distance) {
  return FadeInDown.duration(motion.duration.base)
    .delay(Math.min(index, 12) * motion.stagger)
    .easing(motion.easing)
    .withInitialValues({
      opacity: 0,
      transform: [{ translateY: distance }],
    });
}

/** Soft fade only (headers, overlays). */
export function enterFade(delay = 0) {
  return FadeIn.duration(motion.duration.fast)
    .delay(delay)
    .easing(motion.easing);
}

/** Horizontal slide for chat bubbles. */
export function enterSide(fromRight: boolean, index = 0) {
  const preset = fromRight ? FadeInRight : FadeInLeft;
  return preset
    .duration(motion.duration.base)
    .delay(Math.min(index, 8) * motion.stagger)
    .easing(motion.easing)
    .withInitialValues({
      opacity: 0,
      transform: [{ translateX: fromRight ? 12 : -12 }],
    });
}

export function enterZoom(delay = 0) {
  return ZoomIn.duration(motion.duration.fast)
    .delay(delay)
    .easing(motion.easing);
}

export function exitFade() {
  return FadeOut.duration(motion.duration.fast);
}

export { FadeIn, FadeInDown, FadeInLeft, FadeInRight, FadeOut, ZoomIn };
