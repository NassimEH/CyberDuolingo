import type { ReactNode } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";

import { enterFade, enterUp } from "@/lib/motion";

type Props = {
  children: ReactNode;
  index?: number;
  style?: StyleProp<ViewStyle>;
  /** fade = opacity only; up = fade + slight rise (default) */
  variant?: "up" | "fade";
  delay?: number;
};

/** Lightweight enter animation wrapper. */
export function MotionView({
  children,
  index = 0,
  style,
  variant = "up",
  delay,
}: Props) {
  const entering =
    variant === "fade"
      ? enterFade(delay ?? index * 40)
      : enterUp(index);

  return (
    <Animated.View entering={entering} style={style}>
      {children}
    </Animated.View>
  );
}
