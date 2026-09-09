import { DAILY_GOAL_OPTIONS } from "@/store/learningStore";
import { fontFamily, radius } from "@/constants/theme";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  visible: boolean;
  current: number;
  onClose: () => void;
  onSelect: (goal: number) => void;
};

export function DailyGoalPicker({
  visible,
  current,
  onClose,
  onSelect,
}: Props) {
  const t = useT();
  const { colors } = useTheme();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPress={onClose}
      >
        <View
          style={[
            styles.sheet,
            {
              backgroundColor: colors.neutral.card,
              borderColor: colors.neutral.border,
            },
          ]}
          onStartShouldSetResponder={() => true}
        >
          <Text style={[styles.title, { color: colors.neutral.textPrimary }]}>
            {t("home.dailyGoalEdit")}
          </Text>
          <Text
            style={[styles.hint, { color: colors.neutral.textSecondary }]}
          >
            {t("home.dailyGoalHint")}
          </Text>
          <View style={styles.row}>
            {DAILY_GOAL_OPTIONS.map((goal) => {
              const selected = goal === current;
              return (
                <TouchableOpacity
                  key={goal}
                  activeOpacity={0.85}
                  onPress={() => {
                    onSelect(goal);
                    onClose();
                  }}
                  style={[
                    styles.chip,
                    {
                      backgroundColor: selected
                        ? colors.soft.blueBg
                        : colors.neutral.surface,
                      borderColor: selected
                        ? colors.primary.blue
                        : colors.neutral.border,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.chipText,
                      {
                        color: selected
                          ? colors.primary.blue
                          : colors.neutral.textPrimary,
                      },
                    ]}
                  >
                    {goal} XP
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.4)",
    justifyContent: "flex-end",
  },
  sheet: {
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 36,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
    marginBottom: 6,
  },
  hint: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  row: { flexDirection: "row", gap: 10 },
  chip: {
    flex: 1,
    borderRadius: radius.lg,
    borderWidth: 1.5,
    paddingVertical: 14,
    alignItems: "center",
  },
  chipText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
  },
});
