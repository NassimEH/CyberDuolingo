import type { ReactNode } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { Pressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { motion } from "@/lib/motion";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type Props = {
  children: ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  activeOpacity?: number;
};

/** Subtle scale-down on press for premium touch feedback. */
export function PressScale({
  children,
  onPress,
  style,
  disabled,
}: Props) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressable
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => {
        scale.value = withTiming(0.97, {
          duration: motion.duration.fast,
          easing: motion.easing,
        });
      }}
      onPressOut={() => {
        scale.value = withTiming(1, {
          duration: motion.duration.fast,
          easing: motion.easing,
        });
      }}
      style={[style, animatedStyle]}
    >
      {children}
    </AnimatedPressable>
  );
}
