import { Check, ChevronRight } from "@/constants/icons";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";

import { IconBadge } from "@/components/IconBadge";
import { PressScale } from "@/components/motion/PressScale";
import { getLessonIcon } from "@/constants/icons";
import { fontFamily, radius, shadows } from "@/constants/theme";
import { enterUp } from "@/lib/motion";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import type { Lesson } from "@/types/learning";

interface LessonCardProps {
  lesson: Lesson;
  index: number;
  isCompleted: boolean;
  isInProgress: boolean;
  onPress: () => void;
}

export function LessonCard({
  lesson,
  index,
  isCompleted,
  isInProgress,
  onPress,
}: LessonCardProps) {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const icon = getLessonIcon(lesson.id, lesson.icon);

  return (
    <Animated.View entering={enterUp(index)}>
      <PressScale onPress={onPress}>
        <View
          style={[
            styles.card,
            {
              backgroundColor: isInProgress
                ? colors.soft.blueBg
                : colors.neutral.card,
              borderColor: isInProgress
                ? colors.soft.blueBorder
                : colors.neutral.border,
            },
          ]}
        >
          <IconBadge name={icon} size="md" />
          <View style={styles.body}>
            <View style={styles.metaRow}>
              <Text
                style={[styles.caption, { color: colors.neutral.textSecondary }]}
              >
                {t("lesson.intro")} {index + 1}
              </Text>
              {isInProgress && !isCompleted ? (
                <View
                  style={[
                    styles.badge,
                    { backgroundColor: "rgba(37, 99, 235, 0.12)" },
                  ]}
                >
                  <Text
                    style={[styles.badgeText, { color: colors.primary.blue }]}
                  >
                    {t("lesson.inProgress")}
                  </Text>
                </View>
              ) : null}
            </View>
            <Text
              style={[styles.title, { color: colors.neutral.textPrimary }]}
              numberOfLines={2}
            >
              {L(lesson.title)}
            </Text>
            <Text
              style={[styles.caption, { color: colors.neutral.textSecondary }]}
            >
              {lesson.estimatedMinutes} {t("lesson.minutes")} ·{" "}
              {lesson.activities.length} {t("lesson.activities")} ·{" "}
              {lesson.xpReward} XP
            </Text>
          </View>
          {isCompleted ? (
            <View
              style={[
                styles.check,
                { backgroundColor: colors.semantic.success },
              ]}
            >
              <Check size={16} color="#fff" strokeWidth={3} />
            </View>
          ) : (
            <ChevronRight size={18} color={colors.neutral.textSecondary} />
          )}
        </View>
      </PressScale>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: radius.md,
    padding: 16,
    borderWidth: 1,
    gap: 12,
    ...shadows.card,
  },
  body: { flex: 1 },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    marginBottom: 4,
  },
  badge: {
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: 10,
    fontFamily: fontFamily.medium,
  },
  check: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
});
