import { ArrowRight } from "@/constants/icons";
import { fontFamily, radius } from "@/constants/theme";
import { useTheme } from "@/lib/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  eyebrow: string;
  title: string;
  meta: string;
  ctaLabel: string;
  onPress: () => void;
};

export function LearnContinueCard({
  eyebrow,
  title,
  meta,
  ctaLabel,
  onPress,
}: Props) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[
        styles.card,
        {
          backgroundColor: colors.neutral.card,
          borderColor: colors.neutral.border,
        },
      ]}
    >
      <View style={styles.body}>
        <Text style={[styles.eyebrow, { color: colors.neutral.textSecondary }]}>
          {eyebrow}
        </Text>
        <Text
          style={[styles.title, { color: colors.neutral.textPrimary }]}
          numberOfLines={2}
        >
          {title}
        </Text>
        <Text style={[styles.meta, { color: colors.neutral.textSecondary }]}>
          {meta}
        </Text>
      </View>
      <View style={[styles.cta, { backgroundColor: colors.primary.blue }]}>
        <Text style={styles.ctaText}>{ctaLabel}</Text>
        <ArrowRight size={16} color="#fff" strokeWidth={2.5} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: 16,
    gap: 14,
    marginBottom: 16,
  },
  body: { gap: 4 },
  eyebrow: {
    fontFamily: fontFamily.medium,
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 17,
    lineHeight: 22,
  },
  meta: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
  },
  cta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  ctaText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    color: "#fff",
  },
});
