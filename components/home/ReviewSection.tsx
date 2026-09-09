import { BookOpen, ChevronRight } from "@/constants/icons";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { useLocalize, useT } from "@/lib/i18n";
import { resolveReview } from "@/lib/reviews";
import { useTheme } from "@/lib/useTheme";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  reviewQuestionIds: string[];
};

export function ReviewSection({ reviewQuestionIds }: Props) {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const items = reviewQuestionIds
    .slice(0, 4)
    .map((id) => ({ id, ...resolveReview(id) }))
    .filter((x) => x.lessonId);

  const firstLessonId = items[0]?.lessonId;

  return (
    <View style={styles.wrap}>
      <View style={styles.headerBlock}>
        <View style={{ flex: 1 }}>
          <Text
            style={[styles.sectionTitle, { color: colors.neutral.textPrimary }]}
          >
            {t("home.reviewsToday")}
          </Text>
          {items.length > 0 ? (
            <Text
              style={[styles.subtitle, { color: colors.neutral.textSecondary }]}
            >
              {t("home.reviewsTodayHint", { count: items.length })}
            </Text>
          ) : null}
        </View>
        {items.length > 0 ? (
          <Text
            style={[styles.count, { color: colors.neutral.textSecondary }]}
          >
            {items.length}
          </Text>
        ) : null}
      </View>

      {items.length === 0 ? (
        <View
          style={[
            styles.empty,
            {
              backgroundColor: colors.neutral.surface,
              borderColor: colors.neutral.border,
            },
          ]}
        >
          <BookOpen size={22} color={colors.neutral.textSecondary} />
          <Text
            style={[styles.emptyText, { color: colors.neutral.textSecondary }]}
          >
            {t("home.reviewsEmpty")}
          </Text>
        </View>
      ) : (
        <View style={styles.list}>
          {firstLessonId ? (
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => router.push(`/lesson/${firstLessonId}`)}
              style={[
                styles.cta,
                { backgroundColor: colors.primary.blue },
              ]}
            >
              <Text style={styles.ctaText}>{t("home.reviewsStart")}</Text>
            </TouchableOpacity>
          ) : null}
          {items.map((item) => (
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
              <View
                style={[
                  styles.accent,
                  { backgroundColor: colors.primary.blue },
                ]}
              />
              <View style={styles.rowBody}>
                <Text
                  style={[styles.q, { color: colors.neutral.textPrimary }]}
                  numberOfLines={2}
                >
                  {item.question ? L(item.question) : item.id}
                </Text>
              </View>
              <ChevronRight size={18} color={colors.neutral.textSecondary} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: spacing.xs,
    marginBottom: spacing.section,
  },
  headerBlock: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 14,
    gap: 12,
  },
  sectionTitle: {
    fontFamily: fontFamily.bold,
    fontSize: 22,
    letterSpacing: -0.3,
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    marginTop: 4,
    lineHeight: 18,
  },
  count: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    marginTop: 4,
  },
  list: { gap: spacing.cardGap },
  cta: {
    borderRadius: radius.lg,
    paddingVertical: 12,
    alignItems: "center",
  },
  ctaText: {
    color: "#fff",
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: radius.lg,
    borderWidth: 1,
    paddingVertical: 14,
    paddingRight: 12,
    overflow: "hidden",
    gap: 12,
  },
  accent: {
    width: 4,
    alignSelf: "stretch",
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  rowBody: { flex: 1, paddingLeft: 4 },
  q: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
    lineHeight: 21,
  },
  empty: {
    borderRadius: radius.lg,
    borderWidth: 1,
    borderStyle: "dashed",
    paddingVertical: 22,
    paddingHorizontal: 16,
    alignItems: "center",
    gap: 10,
  },
  emptyText: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
});
