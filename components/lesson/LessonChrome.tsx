import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { AnimatedProgressBar } from "@/components/motion/AnimatedProgressBar";
import { fontFamily, spacing } from "@/constants/theme";
import { useTheme } from "@/lib/useTheme";

type Props = {
  breadcrumb: string;
  percent: number;
  stepLabel: string;
  onClose: () => void;
};

export function LessonChrome({
  breadcrumb,
  percent,
  stepLabel,
  onClose,
}: Props) {
  const { colors } = useTheme();
  const clamped = Math.max(0, Math.min(100, Math.round(percent)));

  return (
    <View
      style={[
        styles.wrap,
        {
          borderBottomColor: colors.neutral.border,
          backgroundColor: colors.neutral.background,
        },
      ]}
    >
      <View style={styles.row}>
        <TouchableOpacity onPress={onClose} hitSlop={10} style={styles.close}>
          <Ionicons name="close" size={24} color={colors.neutral.textPrimary} />
        </TouchableOpacity>
        <View style={styles.center}>
          <Text
            style={[styles.breadcrumb, { color: colors.neutral.textPrimary }]}
            numberOfLines={1}
          >
            {breadcrumb}
          </Text>
          <Text style={[styles.step, { color: colors.neutral.textSecondary }]}>
            {stepLabel}
          </Text>
        </View>
        <Text style={[styles.percent, { color: colors.primary.blue }]}>
          {clamped}%
        </Text>
      </View>
      <AnimatedProgressBar
        progress={clamped}
        color={colors.primary.blue}
        trackColor={colors.neutral.border}
        height={4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: spacing.screen,
    paddingTop: 8,
    paddingBottom: 12,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  close: { width: 32 },
  center: { flex: 1, paddingHorizontal: 8 },
  breadcrumb: {
    fontFamily: fontFamily.semiBold,
    fontSize: 13,
    textAlign: "center",
  },
  step: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    textAlign: "center",
    marginTop: 2,
  },
  percent: {
    fontFamily: fontFamily.semiBold,
    fontSize: 13,
    width: 40,
    textAlign: "right",
  },
});
