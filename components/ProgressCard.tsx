import { Image, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";

import { AnimatedProgressBar } from "@/components/motion/AnimatedProgressBar";
import { images } from "@/constants/images";
import { fontFamily, radius, shadows } from "@/constants/theme";
import { enterUp } from "@/lib/motion";
import { useTheme } from "@/lib/useTheme";

type Props = {
  label: string;
  xpToday: number;
  dailyGoal: number;
};

export function ProgressCard({ label, xpToday, dailyGoal }: Props) {
  const { colors, darkMode } = useTheme();
  const progress =
    dailyGoal > 0 ? Math.min((xpToday / dailyGoal) * 100, 100) : 0;

  return (
    <Animated.View
      entering={enterUp(1)}
      style={[
        styles.card,
        {
          backgroundColor: darkMode ? colors.neutral.surface : "#F3F4F6",
        },
      ]}
    >
      <View style={styles.textCol}>
        <Text style={[styles.label, { color: colors.neutral.textSecondary }]}>
          {label}
        </Text>
        <Text>
          <Text style={[styles.xp, { color: colors.neutral.textPrimary }]}>
            {xpToday}
          </Text>
          <Text style={[styles.goal, { color: colors.neutral.textSecondary }]}>
            {` / ${dailyGoal} XP`}
          </Text>
        </Text>
        <AnimatedProgressBar
          progress={progress}
          color={colors.neutral.textPrimary}
          trackColor={colors.neutral.border}
          height={8}
          style={{ marginTop: 10 }}
        />
      </View>
      <Image source={images.treasure} style={styles.image} resizeMode="contain" />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: radius.lg,
    paddingVertical: 16,
    paddingLeft: 20,
    paddingRight: 12,
    ...shadows.card,
  },
  textCol: { flex: 1, paddingRight: 8 },
  label: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    marginBottom: 4,
  },
  xp: {
    fontFamily: fontFamily.bold,
    fontSize: 28,
  },
  goal: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
  },
  image: { width: 72, height: 72 },
});
