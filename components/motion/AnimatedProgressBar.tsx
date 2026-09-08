import { useEffect } from "react";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { motion } from "@/lib/motion";

type Props = {
  progress: number;
  color: string;
  trackColor: string;
  height?: number;
  style?: StyleProp<ViewStyle>;
};

/** Smoothly animates fill width when progress changes. */
export function AnimatedProgressBar({
  progress,
  color,
  trackColor,
  height = 8,
  style,
}: Props) {
  const width = useSharedValue(0);
  const clamped = Math.max(0, Math.min(100, progress));

  useEffect(() => {
    width.value = withTiming(clamped, {
      duration: motion.duration.slow,
      easing: motion.easing,
    });
  }, [clamped, width]);

  const fillStyle = useAnimatedStyle(() => ({
    width: `${width.value}%`,
  }));

  return (
    <View
      style={[
        styles.track,
        { height, borderRadius: height / 2, backgroundColor: trackColor },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.fill,
          { height: "100%", borderRadius: height / 2, backgroundColor: color },
          fillStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: { overflow: "hidden", width: "100%" },
  fill: {},
});
