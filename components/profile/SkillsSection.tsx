import { AnimatedProgressBar } from "@/components/motion/AnimatedProgressBar";
import { fontFamily } from "@/constants/theme";
import { SKILLS, type SkillId } from "@/data/skills";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  skillXP: Partial<Record<SkillId, number>>;
};

export function SkillsSection({ skillXP }: Props) {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();

  return (
    <View style={styles.wrap}>
      <Text style={[styles.title, { color: colors.neutral.textPrimary }]}>
        {t("profile.skills")}
      </Text>
      {SKILLS.map((s) => {
        const xp = skillXP[s.id] ?? 0;
        const pct = Math.min(100, Math.round((xp / s.maxXP) * 100));
        return (
          <View key={s.id} style={styles.row}>
            <View style={styles.labelRow}>
              <Text
                style={[styles.label, { color: colors.neutral.textPrimary }]}
              >
                {L(s.title)}
              </Text>
              <Text style={{ color: s.color, fontFamily: fontFamily.semiBold, fontSize: 12 }}>
                {pct}%
              </Text>
            </View>
            <AnimatedProgressBar
              progress={pct}
              color={s.color}
              trackColor={colors.neutral.border}
              height={7}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: 20 },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 17,
    marginBottom: 12,
  },
  row: { marginBottom: 12 },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  label: { fontFamily: fontFamily.medium, fontSize: 13 },
});
