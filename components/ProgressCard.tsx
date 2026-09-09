import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";

import { AnimatedProgressBar } from "@/components/motion/AnimatedProgressBar";
import { Check } from "@/constants/icons";
import { images } from "@/constants/images";
import { fontFamily, radius, shadows } from "@/constants/theme";
import { enterUp } from "@/lib/motion";
import { useTheme } from "@/lib/useTheme";

type Props = {
  label: string;
  xpToday: number;
  dailyGoal: number;
  onPress?: () => void;
};

export function ProgressCard({ label, xpToday, dailyGoal, onPress }: Props) {
  const { colors, darkMode } = useTheme();
  const goalReached = dailyGoal > 0 && xpToday >= dailyGoal;
  const displayedXp = dailyGoal > 0 ? Math.min(xpToday, dailyGoal) : xpToday;
  const progress =
    dailyGoal > 0 ? Math.min((xpToday / dailyGoal) * 100, 100) : 0;

  const content = (
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
        <View style={styles.labelRow}>
          <Text style={[styles.label, { color: colors.neutral.textSecondary }]}>
            {label}
          </Text>
          {goalReached ? (
            <View
              style={[
                styles.checkBadge,
                { backgroundColor: "rgba(33, 193, 107, 0.15)" },
              ]}
            >
              <Check
                size={12}
                color={colors.semantic.success}
                strokeWidth={3}
              />
            </View>
          ) : null}
        </View>
        <Text>
          <Text style={[styles.xp, { color: colors.neutral.textPrimary }]}>
            {displayedXp}
          </Text>
          <Text style={[styles.goal, { color: colors.neutral.textSecondary }]}>
            {` / ${dailyGoal} XP`}
          </Text>
        </Text>
        <AnimatedProgressBar
          progress={progress}
          color={
            goalReached ? colors.semantic.success : colors.neutral.textPrimary
          }
          trackColor={colors.neutral.border}
          height={8}
          style={{ marginTop: 10 }}
        />
      </View>
      <Image source={images.treasure} style={styles.image} resizeMode="contain" />
    </Animated.View>
  );

  if (!onPress) return content;

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      {content}
    </TouchableOpacity>
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
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 4,
  },
  label: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
  },
  checkBadge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
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
