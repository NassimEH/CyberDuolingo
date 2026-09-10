import { images } from "@/constants/images";
import {
  BookOpen,
  Flame,
  Home,
  MessageCircle,
  Trophy,
  User,
  Zap,
} from "@/constants/icons";
import { colors, fontFamily, radius } from "@/constants/theme";
import type { OnboardingPreviewId } from "@/data/onboarding";
import { useLocalize } from "@/lib/i18n";
import { Image } from "expo-image";
import type { ReactNode } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

type Props = {
  preview: OnboardingPreviewId;
};

const BLUE = colors.primary.blue;
const GREEN = colors.primary.green;
const SURFACE = colors.neutral.surface;
const BORDER = colors.neutral.border;
const TEXT = colors.neutral.textPrimary;
const MUTED = colors.neutral.textSecondary;

function PhoneChrome({
  children,
  activeTab,
}: {
  children: ReactNode;
  activeTab: 0 | 1 | 2 | 3 | 4;
}) {
  const tabs = [
    { Icon: Home, label: "Accueil" },
    { Icon: BookOpen, label: "Learn" },
    { Icon: Trophy, label: "Défis" },
    { Icon: MessageCircle, label: "Lab" },
    { Icon: User, label: "Profil" },
  ] as const;

  return (
    <View style={styles.phone}>
      <View style={styles.notch} />
      <View style={styles.screen}>{children}</View>
      <View style={styles.tabBar}>
        {tabs.map(({ Icon, label }, index) => {
          const focused = index === activeTab;
          return (
            <View key={label} style={styles.tabItem}>
              <Icon
                size={14}
                color={focused ? BLUE : MUTED}
                strokeWidth={focused ? 2.4 : 2}
              />
              <Text
                style={[styles.tabLabel, focused && styles.tabLabelFocused]}
                numberOfLines={1}
              >
                {label}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

function Bar({ width, color = BLUE }: { width: `${number}%`; color?: string }) {
  return (
    <View style={styles.barTrack}>
      <View style={[styles.barFill, { width, backgroundColor: color }]} />
    </View>
  );
}

function Card({
  title,
  meta,
  accent,
}: {
  title: string;
  meta: string;
  accent?: string;
}) {
  return (
    <View style={styles.card}>
      <View style={[styles.cardDot, { backgroundColor: accent ?? BLUE }]} />
      <View style={{ flex: 1 }}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.cardMeta} numberOfLines={1}>
          {meta}
        </Text>
      </View>
    </View>
  );
}

function HomePreview() {
  return (
    <PhoneChrome activeTab={0}>
      <Text style={styles.greeting}>Salut 👋</Text>
      <View style={styles.goalCard}>
        <View style={styles.rowBetween}>
          <Text style={styles.goalLabel}>Objectif du jour</Text>
          <View style={styles.xpPill}>
            <Zap size={10} color={BLUE} strokeWidth={2.5} />
            <Text style={styles.xpText}>40 XP</Text>
          </View>
        </View>
        <Bar width="65%" />
        <Text style={styles.goalHint}>Plus que 14 XP</Text>
      </View>
      <Text style={styles.section}>Continuer</Text>
      <Card title="Qu'est-ce qu'un réseau ?" meta="16 min · +20 XP" />
      <Card title="OSI & TCP/IP" meta="Module Réseau" accent={GREEN} />
    </PhoneChrome>
  );
}

function LearnPreview() {
  return (
    <PhoneChrome activeTab={1}>
      <Text style={styles.screenTitle}>Apprendre</Text>
      <View style={styles.moduleHero}>
        <Text style={styles.moduleName}>Fondamentaux réseau</Text>
        <Bar width="42%" color={GREEN} />
        <Text style={styles.moduleMeta}>3 / 8 leçons</Text>
      </View>
      <Card title="1. Qu'est-ce qu'un réseau ?" meta="Terminé" accent={GREEN} />
      <Card title="2. OSI & TCP/IP" meta="À faire · 23 min" />
      <Card title="3. Adressage IP" meta="Verrouillé" accent={BORDER} />
    </PhoneChrome>
  );
}

function ChallengesPreview() {
  return (
    <PhoneChrome activeTab={2}>
      <Text style={styles.screenTitle}>Défis</Text>
      <View style={styles.statRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>2</Text>
          <Text style={styles.statLabel}>faits</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>+60</Text>
          <Text style={styles.statLabel}>XP dispo</Text>
        </View>
      </View>
      <Card title="Quiz DNS express" meta="Chrono 2 min · +20 XP" accent="#F59E0B" />
      <Card title="HTTP vs HTTPS" meta="Quotidien · +15 XP" />
      <Card title="Ports & protocoles" meta="Rejouer" accent={GREEN} />
    </PhoneChrome>
  );
}

function LabPreview() {
  return (
    <PhoneChrome activeTab={3}>
      <Text style={styles.screenTitle}>Lab</Text>
      <View style={styles.labHero}>
        <MessageCircle size={16} color={BLUE} strokeWidth={2.2} />
        <Text style={styles.labHeroTitle}>Incident Wi-Fi bureau</Text>
        <Text style={styles.labHeroBody}>
          Choisis la bonne piste, justifie, reçois le verdict.
        </Text>
      </View>
      <Card title="Client ou serveur ?" meta="Réseau · 5 min" />
      <Card title="Lire une réponse HTTP" meta="Web · 6 min" />
    </PhoneChrome>
  );
}

function ProfilePreview() {
  return (
    <PhoneChrome activeTab={4}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <User size={18} color={BLUE} strokeWidth={2.2} />
        </View>
        <View>
          <Text style={styles.profileName}>Alex</Text>
          <Text style={styles.profileRank}>Explorateur</Text>
        </View>
      </View>
      <View style={styles.goalCard}>
        <View style={styles.rowBetween}>
          <Text style={styles.goalLabel}>Niveau 3</Text>
          <View style={styles.xpPill}>
            <Flame size={10} color="#F97316" strokeWidth={2.5} />
            <Text style={styles.xpText}>4 jours</Text>
          </View>
        </View>
        <Bar width="55%" />
      </View>
      <Card title="Préférences" meta="Langue, notifications" />
      <Card title="Confidentialité" meta="Analytics & données" accent={MUTED} />
    </PhoneChrome>
  );
}

function WelcomePreview() {
  const localize = useLocalize();
  return (
    <View style={styles.welcomeWrap}>
      <Image
        source={images.mascotWelcome}
        style={styles.mascot}
        contentFit="contain"
        cachePolicy="memory-disk"
        priority="high"
        transition={0}
      />
      <View style={[styles.floatChip, styles.floatLeft]}>
        <Text style={styles.chipText}>LAN</Text>
      </View>
      <View style={[styles.floatChip, styles.floatRight]}>
        <Text style={[styles.chipText, { color: BLUE }]}>HTTPS</Text>
      </View>
      <View style={[styles.floatChip, styles.floatBottom]}>
        <Text style={styles.chipText}>
          {localize({ fr: "XP +20", en: "XP +20" })}
        </Text>
      </View>
    </View>
  );
}

export function AppPreview({ preview }: Props) {
  switch (preview) {
    case "welcome":
      return <WelcomePreview />;
    case "home":
      return <HomePreview />;
    case "learn":
      return <LearnPreview />;
    case "challenges":
      return <ChallengesPreview />;
    case "lab":
      return <LabPreview />;
    case "profile":
      return <ProfilePreview />;
    default: {
      const _exhaustive: never = preview;
      return _exhaustive;
    }
  }
}

const styles = StyleSheet.create({
  phone: {
    width: 220,
    height: 360,
    borderRadius: 28,
    borderWidth: 3,
    borderColor: "#0F172A",
    backgroundColor: "#fff",
    overflow: "hidden",
    alignSelf: "center",
  },
  notch: {
    alignSelf: "center",
    width: 72,
    height: 8,
    borderRadius: 8,
    backgroundColor: "#0F172A",
    marginTop: 8,
    marginBottom: 4,
  },
  screen: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 4,
    gap: 7,
  },
  tabBar: {
    flexDirection: "row",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: BORDER,
    paddingVertical: 6,
    paddingHorizontal: 4,
    backgroundColor: "#fff",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    gap: 2,
  },
  tabLabel: {
    fontFamily: fontFamily.medium,
    fontSize: 7,
    color: MUTED,
  },
  tabLabelFocused: {
    color: BLUE,
  },
  greeting: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
    color: TEXT,
  },
  screenTitle: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
    color: TEXT,
    marginBottom: 2,
  },
  goalCard: {
    backgroundColor: SURFACE,
    borderRadius: radius.md,
    padding: 10,
    gap: 6,
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  goalLabel: {
    fontFamily: fontFamily.medium,
    fontSize: 10,
    color: TEXT,
  },
  goalHint: {
    fontFamily: fontFamily.regular,
    fontSize: 9,
    color: MUTED,
  },
  xpPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    backgroundColor: colors.soft.blueBg,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 999,
  },
  xpText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 9,
    color: BLUE,
  },
  barTrack: {
    height: 6,
    borderRadius: 999,
    backgroundColor: colors.soft.blueMuted,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    borderRadius: 999,
  },
  section: {
    fontFamily: fontFamily.semiBold,
    fontSize: 11,
    color: TEXT,
    marginTop: 2,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: radius.md,
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  cardDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  cardTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 10,
    color: TEXT,
  },
  cardMeta: {
    fontFamily: fontFamily.regular,
    fontSize: 8,
    color: MUTED,
    marginTop: 1,
  },
  moduleHero: {
    backgroundColor: colors.soft.blueBg,
    borderRadius: radius.md,
    padding: 10,
    gap: 6,
    borderWidth: 1,
    borderColor: colors.soft.blueBorder,
  },
  moduleName: {
    fontFamily: fontFamily.semiBold,
    fontSize: 11,
    color: TEXT,
  },
  moduleMeta: {
    fontFamily: fontFamily.regular,
    fontSize: 9,
    color: MUTED,
  },
  statRow: {
    flexDirection: "row",
    gap: 8,
  },
  statBox: {
    flex: 1,
    backgroundColor: SURFACE,
    borderRadius: radius.md,
    paddingVertical: 8,
    alignItems: "center",
  },
  statValue: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
    color: TEXT,
  },
  statLabel: {
    fontFamily: fontFamily.regular,
    fontSize: 8,
    color: MUTED,
  },
  labHero: {
    backgroundColor: SURFACE,
    borderRadius: radius.md,
    padding: 10,
    gap: 4,
  },
  labHeroTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 11,
    color: TEXT,
  },
  labHeroBody: {
    fontFamily: fontFamily.regular,
    fontSize: 9,
    color: MUTED,
    lineHeight: 12,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 2,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.soft.blueBg,
    alignItems: "center",
    justifyContent: "center",
  },
  profileName: {
    fontFamily: fontFamily.semiBold,
    fontSize: 12,
    color: TEXT,
  },
  profileRank: {
    fontFamily: fontFamily.regular,
    fontSize: 9,
    color: MUTED,
  },
  welcomeWrap: {
    width: 260,
    height: 300,
    alignSelf: "center",
    justifyContent: "center",
  },
  mascot: {
    width: "100%",
    height: "100%",
  },
  floatChip: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 7,
    ...Platform.select({
      web: {
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
      },
      default: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 3,
      },
    }),
  },
  floatLeft: {
    left: 0,
    top: "38%",
  },
  floatRight: {
    right: 0,
    top: "14%",
  },
  floatBottom: {
    right: 12,
    bottom: "18%",
  },
  chipText: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    color: TEXT,
  },
});
