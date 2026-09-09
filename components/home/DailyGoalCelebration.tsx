import { images } from "@/constants/images";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { feedbackComplete } from "@/lib/feedback";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { useLearningStore } from "@/store/learningStore";
import { Image } from "expo-image";
import { useEffect } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function DailyGoalCelebration() {
  const t = useT();
  const { colors } = useTheme();
  const visible = useLearningStore((s) => s.pendingGoalCelebration);
  const acknowledge = useLearningStore((s) => s.acknowledgeGoalCelebration);
  const dailyGoal = useLearningStore((s) => s.dailyGoal);

  useEffect(() => {
    if (visible) void feedbackComplete();
  }, [visible]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={acknowledge}
    >
      <View style={styles.backdrop}>
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.neutral.card,
              borderColor: colors.neutral.border,
            },
          ]}
        >
          <Image
            source={images.treasure}
            style={styles.image}
            contentFit="contain"
            transition={0}
          />
          <Text style={[styles.title, { color: colors.neutral.textPrimary }]}>
            {t("home.goalReachedTitle")}
          </Text>
          <Text
            style={[styles.body, { color: colors.neutral.textSecondary }]}
          >
            {t("home.goalReachedBody", { goal: dailyGoal })}
          </Text>
          <TouchableOpacity
            onPress={acknowledge}
            activeOpacity={0.85}
            style={[styles.btn, { backgroundColor: colors.primary.blue }]}
          >
            <Text style={styles.btnText}>{t("home.goalReachedCta")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.45)",
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.screen,
  },
  card: {
    width: "100%",
    maxWidth: 340,
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: 24,
    alignItems: "center",
  },
  image: { width: 96, height: 96, marginBottom: 12 },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 22,
    textAlign: "center",
    marginBottom: 8,
  },
  body: {
    fontFamily: fontFamily.regular,
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 20,
  },
  btn: {
    alignSelf: "stretch",
    borderRadius: radius.lg,
    paddingVertical: 14,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
});
