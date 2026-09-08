import { ChevronRight } from "@/constants/icons";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { useLocalize, useT } from "@/lib/i18n";
import { findRelatedChallenge, findRelatedLab } from "@/lib/learnProgress";
import { getModuleReviews } from "@/lib/reviews";
import { useTheme } from "@/lib/useTheme";
import { useLearningStore } from "@/store/learningStore";
import type { Unit } from "@/types/learning";
import { router } from "expo-router";
import { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  unit: Unit;
};

export function LearnModuleExtras({ unit }: Props) {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const reviewQuestionIds = useLearningStore((s) => s.reviewQuestionIds);
  const completedLabIds = useLearningStore((s) => s.completedLabIds);

  const reviews = useMemo(
    () => getModuleReviews(reviewQuestionIds, unit.lessonIds, 3),
    [reviewQuestionIds, unit.lessonIds]
  );
  const challenge = useMemo(() => findRelatedChallenge(unit), [unit]);
  const lab = useMemo(
    () => findRelatedLab(unit, completedLabIds),
    [unit, completedLabIds]
  );

  if (reviews.length === 0 && !challenge && !lab) return null;

  return (
    <View style={styles.wrap}>
      {reviews.length > 0 ? (
        <View style={styles.block}>
          <Text
            style={[styles.sectionTitle, { color: colors.neutral.textPrimary }]}
          >
            {t("learn.reviews")}
          </Text>
          <View style={styles.list}>
            {reviews.map((item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.85}
                style={[
                  styles.row,
                  {
                    backgroundColor: colors.neutral.card,
                    borderColor: colors.neutral.border,
                  },
                ]}
                onPress={() => router.push(`/lesson/${item.lessonId}`)}
              >
                <Text
                  style={[styles.q, { color: colors.neutral.textPrimary }]}
                  numberOfLines={2}
                >
                  {L(item.question)}
                </Text>
                <ChevronRight
                  size={16}
                  color={colors.neutral.textSecondary}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : null}

      {challenge || lab ? (
        <View style={styles.actions}>
          {challenge ? (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.actionBtn,
                { borderColor: colors.neutral.border },
              ]}
              onPress={() =>
                router.push(`/(tabs)/challenges?focus=${challenge.id}`)
              }
            >
              <Text
                style={[
                  styles.actionText,
                  { color: colors.neutral.textPrimary },
                ]}
              >
                {t("learn.relatedChallenge")}
              </Text>
            </TouchableOpacity>
          ) : null}
          {lab ? (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.actionBtn,
                { borderColor: colors.neutral.border },
              ]}
              onPress={() => router.push("/(tabs)/lab")}
            >
              <Text
                style={[
                  styles.actionText,
                  { color: colors.neutral.textPrimary },
                ]}
              >
                {t("learn.relatedLab")}
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: spacing.screen,
    marginTop: 8,
    marginBottom: 16,
    gap: 20,
  },
  block: { gap: 10 },
  sectionTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  list: { gap: 8 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderRadius: radius.md,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  q: {
    flex: 1,
    fontFamily: fontFamily.medium,
    fontSize: 13,
    lineHeight: 18,
  },
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  actionBtn: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: "transparent",
  },
  actionText: {
    fontFamily: fontFamily.medium,
    fontSize: 13,
  },
});
