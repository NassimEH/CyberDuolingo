import { Check, Lock } from "@/constants/icons";
import { LessonCard } from "@/components/LessonCard";
import { fontFamily } from "@/constants/theme";
import { useTheme } from "@/lib/useTheme";
import type { Lesson } from "@/types/learning";
import { StyleSheet, Text, View } from "react-native";

export type LessonPathItem = {
  lesson: Lesson;
  index: number;
  isCompleted: boolean;
  isInProgress: boolean;
  isLocked: boolean;
};

type Props = {
  items: LessonPathItem[];
  onPressLesson: (lessonId: string) => void;
};

export function LessonPath({ items, onPressLesson }: Props) {
  const { colors } = useTheme();

  return (
    <View style={styles.wrap}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <View key={item.lesson.id} style={styles.row}>
            <View style={styles.railCol}>
              <View
                style={[
                  styles.node,
                  {
                    backgroundColor: item.isCompleted
                      ? colors.semantic.success
                      : item.isLocked
                        ? colors.neutral.surface
                        : item.isInProgress
                          ? colors.primary.blue
                          : colors.neutral.card,
                    borderColor: item.isCompleted
                      ? colors.semantic.success
                      : item.isLocked
                        ? colors.neutral.border
                        : item.isInProgress
                          ? colors.primary.blue
                          : colors.neutral.border,
                  },
                ]}
              >
                {item.isCompleted ? (
                  <Check size={12} color="#fff" strokeWidth={3} />
                ) : item.isLocked ? (
                  <Lock
                    size={12}
                    color={colors.neutral.textSecondary}
                    strokeWidth={2.2}
                  />
                ) : (
                  <Text
                    style={[
                      styles.nodeText,
                      {
                        color: item.isInProgress
                          ? "#fff"
                          : colors.neutral.textPrimary,
                      },
                    ]}
                  >
                    {item.index + 1}
                  </Text>
                )}
              </View>
              {!isLast ? (
                <View
                  style={[
                    styles.rail,
                    { backgroundColor: colors.neutral.border },
                  ]}
                />
              ) : null}
            </View>
            <View style={styles.cardCol}>
              <LessonCard
                lesson={item.lesson}
                index={item.index}
                isCompleted={item.isCompleted}
                isInProgress={item.isInProgress}
                isLocked={item.isLocked}
                onPress={() => {
                  if (!item.isLocked) onPressLesson(item.lesson.id);
                }}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 24,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  railCol: {
    width: 28,
    alignItems: "center",
  },
  node: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  nodeText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 11,
  },
  rail: {
    width: 2,
    flex: 1,
    minHeight: 16,
    marginVertical: 2,
  },
  cardCol: {
    flex: 1,
    paddingBottom: 12,
  },
});
