import { ChevronRight } from "@/constants/icons";
import { fontFamily, radius } from "@/constants/theme";
import { LESSONS } from "@/data/lessons";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  reviewQuestionIds: string[];
};

function resolveReview(activityId: string) {
  for (const lesson of LESSONS) {
    const activity = lesson.activities.find((a) => a.id === activityId);
    if (activity) {
      return { lessonId: lesson.id, question: activity.question };
    }
  }
  return null;
}

export function ReviewSection({ reviewQuestionIds }: Props) {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const items = reviewQuestionIds
    .slice(0, 4)
    .map((id) => ({ id, ...resolveReview(id) }))
    .filter((x) => x.lessonId);

  return (
    <View style={styles.wrap}>
      <Text style={[styles.sectionTitle, { color: colors.neutral.textPrimary }]}>
        {t("home.reviews")}
      </Text>
      {items.length === 0 ? (
        <Text style={{ color: colors.neutral.textSecondary, fontFamily: fontFamily.regular, fontSize: 13 }}>
          {t("home.reviewsEmpty")}
        </Text>
      ) : (
        items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.row,
              {
                backgroundColor: colors.neutral.card,
                borderColor: colors.neutral.border,
              },
            ]}
            onPress={() => router.push(`/lesson/${item.lessonId}`)}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={[styles.q, { color: colors.neutral.textPrimary }]}
                numberOfLines={2}
              >
                {item.question ? L(item.question) : item.id}
              </Text>
            </View>
            <ChevronRight size={16} color={colors.neutral.textSecondary} />
          </TouchableOpacity>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: 20 },
  sectionTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 17,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: radius.md,
    borderWidth: 1,
    padding: 12,
    marginBottom: 8,
    gap: 8,
  },
  q: { fontFamily: fontFamily.medium, fontSize: 13 },
});
