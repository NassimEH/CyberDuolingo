import { IconBadge } from "@/components/IconBadge";
import { fontFamily, radius } from "@/constants/theme";
import type { AppIcon } from "@/constants/icons";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import type { TranslationKey } from "@/lib/i18n/translations";
import { StyleSheet, Text, View } from "react-native";

type BadgeDef = {
  id: string;
  icon: AppIcon;
  titleKey: TranslationKey;
  unlocked: boolean;
};

type Props = {
  streak: number;
  totalXP: number;
  lessonsCompleted: number;
  challengesCompleted: number;
  labsCompleted: number;
  certificationsObtained: number;
};

export function BadgesShowcase({
  streak,
  totalXP,
  lessonsCompleted,
  challengesCompleted,
  labsCompleted,
  certificationsObtained,
}: Props) {
  const t = useT();
  const { colors } = useTheme();

  const badges: BadgeDef[] = [
    {
      id: "streak7",
      icon: "flame",
      titleKey: "profile.badge.streak7",
      unlocked: streak >= 7,
    },
    {
      id: "xp500",
      icon: "zap",
      titleKey: "profile.badge.xp500",
      unlocked: totalXP >= 500,
    },
    {
      id: "lessons10",
      icon: "book",
      titleKey: "profile.badge.lessons10",
      unlocked: lessonsCompleted >= 10,
    },
    {
      id: "challenges5",
      icon: "trophy",
      titleKey: "profile.badge.challenges5",
      unlocked: challengesCompleted >= 5,
    },
    {
      id: "labs3",
      icon: "sparkles",
      titleKey: "profile.badge.labs3",
      unlocked: labsCompleted >= 3,
    },
    {
      id: "cert1",
      icon: "award",
      titleKey: "profile.badge.cert1",
      unlocked: certificationsObtained >= 1,
    },
  ];

  const unlockedCount = badges.filter((b) => b.unlocked).length;

  return (
    <View style={styles.wrap}>
      <Text style={[styles.title, { color: colors.neutral.textPrimary }]}>
        {t("profile.badges")}
      </Text>
      <Text style={[styles.sub, { color: colors.neutral.textSecondary }]}>
        {t("profile.badgesUnlocked", {
          done: unlockedCount,
          total: badges.length,
        })}
      </Text>
      <View style={styles.grid}>
        {badges.map((b) => (
          <View
            key={b.id}
            style={[
              styles.badge,
              {
                backgroundColor: colors.neutral.card,
                borderColor: colors.neutral.border,
                opacity: b.unlocked ? 1 : 0.4,
              },
            ]}
          >
            <IconBadge
              name={b.icon}
              size="sm"
              color={
                b.unlocked
                  ? colors.primary.blue
                  : colors.neutral.textSecondary
              }
            />
            <Text
              style={[styles.badgeLabel, { color: colors.neutral.textPrimary }]}
              numberOfLines={2}
            >
              {t(b.titleKey)}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: 20 },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 17,
    marginBottom: 4,
  },
  sub: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    marginBottom: 12,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  badge: {
    width: "30%",
    flexGrow: 1,
    minWidth: 96,
    maxWidth: "32%",
    alignItems: "center",
    borderRadius: radius.md,
    borderWidth: 1,
    padding: 10,
    gap: 6,
  },
  badgeLabel: {
    fontFamily: fontFamily.medium,
    fontSize: 11,
    textAlign: "center",
  },
});
