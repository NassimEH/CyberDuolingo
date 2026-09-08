import { Award, Bell, Languages, LogOut, Moon, Volume2 } from "@/constants/icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AnimatedProgressBar } from "@/components/motion/AnimatedProgressBar";
import { ActivityCalendar } from "@/components/profile/ActivityCalendar";
import { BadgesShowcase } from "@/components/profile/BadgesShowcase";
import { RankBanner } from "@/components/profile/RankBanner";
import { SkillsSection } from "@/components/profile/SkillsSection";
import { IconBadge } from "@/components/IconBadge";
import { SectionHeader } from "@/components/SectionHeader";
import { SettingsRow } from "@/components/SettingsRow";
import { StatCard } from "@/components/StatCard";
import { getTrackIcon } from "@/constants/icons";
import { images } from "@/constants/images";
import { fontFamily, radius, shadows, spacing } from "@/constants/theme";
import { getCertification } from "@/data/certifications";
import { useLocalize, useT } from "@/lib/i18n";
import { posthog } from "@/lib/posthog";
import { useTheme } from "@/lib/useTheme";
import {
  selectCertsByStatus,
  useCertificationStore,
} from "@/store/certificationStore";
import { useLearningStore } from "@/store/learningStore";
import { useLocaleStore } from "@/store/localeStore";
import { useSessionStore } from "@/store/sessionStore";
import { useThemeStore } from "@/store/themeStore";
import { useTrackStore } from "@/store/trackStore";
import { getTrack } from "@/data/tracks";

export default function ProfileScreen() {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const { firstName, email, userId, signOut } = useSessionStore();
  const selectedTrack = useTrackStore((s) => s.selectedTrack);
  const locale = useLocaleStore((s) => s.locale);
  const setLocale = useLocaleStore((s) => s.setLocale);
  const darkMode = useThemeStore((s) => s.darkMode);
  const setDarkMode = useThemeStore((s) => s.setDarkMode);
  const {
    streak,
    completedLessonIds,
    totalXP,
    soundEnabled,
    setSoundEnabled,
    activeDays,
    completedChallengeIds,
    skillXP,
    activityLogs,
  } = useLearningStore();
  const entries = useCertificationStore((s) => s.entries);

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const track = getTrack(selectedTrack);
  const displayName = firstName ?? "Learner";
  const isGuest = userId === "user_guest";
  const initial = displayName.charAt(0).toUpperCase();
  const completedCount = completedLessonIds.length;
  const challengesDone = completedChallengeIds.length;
  const labsDone = useMemo(
    () => activityLogs.filter((l) => l.type === "lab_complete").length,
    [activityLogs]
  );
  const activeDayCount = activeDays.length;

  const preparing = useMemo(
    () => selectCertsByStatus(entries, "preparing"),
    [entries]
  );
  const todo = useMemo(() => selectCertsByStatus(entries, "todo"), [entries]);
  const obtained = useMemo(
    () => selectCertsByStatus(entries, "obtained"),
    [entries]
  );
  const hasCertPath =
    preparing.length + todo.length + obtained.length > 0;

  function handleSignOut() {
    signOut();
    posthog.reset();
    router.replace("/onboarding");
  }

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.hero}>
          <View
            style={[styles.avatar, { backgroundColor: colors.primary.blue }]}
          >
            <Text style={styles.avatarText}>{initial}</Text>
          </View>
          <Text style={[styles.name, { color: colors.neutral.textPrimary }]}>
            {displayName}
            {isGuest ? ` · ${t("profile.guest")}` : ""}
          </Text>
          <Text
            style={[styles.email, { color: colors.neutral.textSecondary }]}
          >
            {email ?? (locale === "fr" ? "Sans compte" : "No account")}
          </Text>
        </View>

        <RankBanner totalXP={totalXP} />

        <ActivityCalendar activeDays={activeDays} />

        <SectionHeader title={t("profile.stats")} />
        <View style={styles.statsRow}>
          <StatCard
            icon="flame"
            label={t("profile.dayStreak")}
            value={streak}
            index={0}
          />
          <StatCard
            icon="zap"
            label={t("profile.totalXp")}
            value={totalXP}
            index={1}
          />
          <StatCard
            icon="book"
            label={t("profile.lessons")}
            value={completedCount}
            index={2}
          />
        </View>
        <View style={[styles.statsRow, { marginBottom: spacing.section }]}>
          <StatCard
            icon="trophy"
            label={t("profile.challengesDone")}
            value={challengesDone}
            index={3}
          />
          <StatCard
            icon="sparkles"
            label={t("profile.activeDays")}
            value={activeDayCount}
            index={4}
          />
          <StatCard
            icon="award"
            label={t("profile.certsObtained")}
            value={obtained.length}
            index={5}
          />
        </View>

        <SkillsSection skillXP={skillXP} />

        <BadgesShowcase
          streak={streak}
          totalXP={totalXP}
          lessonsCompleted={completedCount}
          challengesCompleted={challengesDone}
          labsCompleted={labsDone}
          certificationsObtained={obtained.length}
        />

        <SectionHeader title={t("profile.myCerts")} />
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => router.push("/certifications/index")}
          style={[
            styles.certsEntry,
            {
              backgroundColor: colors.neutral.card,
              borderColor: colors.neutral.border,
            },
          ]}
        >
          <SettingsRow
            icon={Award}
            label={t("profile.certsEntry")}
            subtitle={t("certs.subtitle")}
            showChevron
          />
        </TouchableOpacity>

        {hasCertPath ? (
          <View style={styles.certsBlock}>
            {preparing.length > 0 ? (
              <View style={styles.certsGroup}>
                <Text
                  style={[
                    styles.certsGroupTitle,
                    { color: colors.neutral.textSecondary },
                  ]}
                >
                  {t("profile.certsPreparing")}
                </Text>
                {preparing.map((e) => {
                  const cert = getCertification(e.id);
                  if (!cert) return null;
                  return (
                    <TouchableOpacity
                      key={e.id}
                      activeOpacity={0.8}
                      onPress={() =>
                        router.push({
                          pathname: "/certifications/[id]",
                          params: { id: e.id },
                        })
                      }
                      style={[
                        styles.certRow,
                        {
                          backgroundColor: colors.neutral.card,
                          borderColor: colors.neutral.border,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.certName,
                          { color: colors.neutral.textPrimary },
                        ]}
                      >
                        {cert.name}
                      </Text>
                      <AnimatedProgressBar
                        progress={e.progress}
                        color={colors.primary.blue}
                        trackColor={colors.neutral.border}
                        height={6}
                        style={{ marginTop: 8 }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            {todo.length > 0 ? (
              <View style={styles.certsGroup}>
                <Text
                  style={[
                    styles.certsGroupTitle,
                    { color: colors.neutral.textSecondary },
                  ]}
                >
                  {t("profile.certsTodo")}
                </Text>
                {todo.map((e) => {
                  const cert = getCertification(e.id);
                  if (!cert) return null;
                  return (
                    <TouchableOpacity
                      key={e.id}
                      activeOpacity={0.8}
                      onPress={() =>
                        router.push({
                          pathname: "/certifications/[id]",
                          params: { id: e.id },
                        })
                      }
                    >
                      <Text
                        style={[
                          styles.todoItem,
                          { color: colors.neutral.textPrimary },
                        ]}
                      >
                        · {cert.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            {obtained.length > 0 ? (
              <View style={styles.certsGroup}>
                <Text
                  style={[
                    styles.certsGroupTitle,
                    { color: colors.neutral.textSecondary },
                  ]}
                >
                  {t("profile.certsObtained")}
                </Text>
                {obtained.map((e) => {
                  const cert = getCertification(e.id);
                  if (!cert) return null;
                  return (
                    <TouchableOpacity
                      key={e.id}
                      activeOpacity={0.8}
                      onPress={() =>
                        router.push({
                          pathname: "/certifications/[id]",
                          params: { id: e.id },
                        })
                      }
                    >
                      <Text
                        style={[
                          styles.todoItem,
                          { color: colors.neutral.textPrimary },
                        ]}
                      >
                        · {cert.name}
                        {e.obtainedAt ? ` · ${e.obtainedAt}` : ""}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </View>
        ) : (
          <View
            style={[
              styles.emptyCerts,
              {
                backgroundColor: colors.neutral.card,
                borderColor: colors.neutral.border,
              },
            ]}
          >
            <Text
              style={[
                styles.emptyText,
                { color: colors.neutral.textSecondary },
              ]}
            >
              {t("profile.certsEmpty")}
            </Text>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => router.push("/certifications/index")}
              style={[
                styles.exploreBtn,
                { backgroundColor: colors.primary.blue },
              ]}
            >
              <Text style={styles.exploreText}>
                {t("profile.certsExplore")}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <SectionHeader title={t("profile.learningTrack")} />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push("/language-select")}
          style={[
            styles.trackRow,
            {
              backgroundColor: colors.neutral.card,
              borderColor: colors.neutral.border,
            },
          ]}
        >
          <IconBadge name={getTrackIcon(selectedTrack)} size="md" />
          <View style={styles.trackBody}>
            <Text
              style={[styles.trackTitle, { color: colors.neutral.textPrimary }]}
            >
              {track ? L(track.name) : t("learn.noTrack")}
            </Text>
            <Text
              style={[
                styles.trackCaption,
                { color: colors.neutral.textSecondary },
              ]}
            >
              {t("profile.changeTrack")}
            </Text>
          </View>
        </TouchableOpacity>

        <SectionHeader title={t("profile.settings")} />
        <View
          style={[
            styles.settingsCard,
            {
              backgroundColor: colors.neutral.card,
              borderColor: colors.neutral.border,
            },
          ]}
        >
          <SettingsRow
            icon={Bell}
            label={t("profile.notifications")}
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
          <View
            style={[
              styles.settingsDivider,
              { backgroundColor: colors.neutral.border },
            ]}
          />
          <SettingsRow
            icon={Volume2}
            label={t("profile.sound")}
            value={soundEnabled}
            onValueChange={setSoundEnabled}
          />
          <View
            style={[
              styles.settingsDivider,
              { backgroundColor: colors.neutral.border },
            ]}
          />
          <SettingsRow
            icon={Moon}
            label={t("profile.darkMode")}
            value={darkMode}
            onValueChange={setDarkMode}
          />
          <View
            style={[
              styles.settingsDivider,
              { backgroundColor: colors.neutral.border },
            ]}
          />
          <SettingsRow
            icon={Languages}
            label={t("profile.languageToggle")}
            subtitle={t("profile.languageSubtitle", {
              lang: locale === "en" ? "EN" : "FR",
            })}
            value={locale === "en"}
            onValueChange={(on) => setLocale(on ? "en" : "fr")}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.signOut,
            {
              backgroundColor: colors.neutral.card,
              borderColor: colors.neutral.border,
            },
          ]}
          activeOpacity={0.85}
          onPress={handleSignOut}
        >
          <LogOut size={20} color={colors.semantic.error} />
          <Text
            style={[styles.signOutText, { color: colors.semantic.error }]}
          >
            {t("profile.signOut")}
          </Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Image
            source={images.mascotLogo}
            contentFit="contain"
            style={{ width: 32, height: 32, opacity: 0.5 }}
          />
          <Text
            style={[styles.version, { color: colors.neutral.textSecondary }]}
          >
            {t("profile.version")}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scrollContent: {
    paddingHorizontal: spacing.screen,
    paddingTop: 12,
    paddingBottom: 100,
  },
  hero: { alignItems: "center", marginBottom: spacing.section },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  avatarText: {
    fontFamily: fontFamily.bold,
    fontSize: 32,
    color: "#fff",
  },
  name: {
    fontFamily: fontFamily.semiBold,
    fontSize: 20,
  },
  email: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    marginTop: 4,
  },
  statsRow: { flexDirection: "row", gap: 10, marginBottom: 10 },
  certsEntry: {
    borderRadius: radius.md,
    borderWidth: 1,
    marginBottom: 12,
    overflow: "hidden",
    ...shadows.card,
  },
  certsBlock: { marginBottom: spacing.section },
  certsGroup: { marginBottom: 12 },
  certsGroupTitle: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    marginBottom: 6,
  },
  certRow: {
    borderRadius: radius.md,
    borderWidth: 1,
    padding: 12,
    marginBottom: 8,
  },
  certName: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
  },
  todoItem: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    marginBottom: 4,
  },
  emptyCerts: {
    borderRadius: radius.md,
    borderWidth: 1,
    padding: 16,
    marginBottom: spacing.section,
  },
  emptyText: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    marginBottom: 12,
  },
  exploreBtn: {
    borderRadius: radius.md,
    paddingVertical: 12,
    alignItems: "center",
  },
  exploreText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    color: "#fff",
  },
  trackRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: radius.md,
    borderWidth: 1,
    padding: 14,
    marginBottom: spacing.section,
    gap: 12,
    ...shadows.card,
  },
  trackBody: { flex: 1 },
  trackTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
  },
  trackCaption: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    marginTop: 2,
  },
  settingsCard: {
    borderRadius: radius.md,
    borderWidth: 1,
    marginBottom: spacing.section,
    overflow: "hidden",
  },
  settingsDivider: {
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 16,
  },
  signOut: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.md,
    borderWidth: 1,
    paddingVertical: 16,
    marginBottom: 12,
    gap: 8,
  },
  signOutText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  footer: { alignItems: "center", marginBottom: 16 },
  version: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    marginTop: 8,
  },
});
