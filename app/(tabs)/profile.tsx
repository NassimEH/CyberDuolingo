import {
  Award,
  Bell,
  Camera,
  Languages,
  LogOut,
  Moon,
  Volume2,
} from "@/constants/icons";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useMemo } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AnimatedProgressBar } from "@/components/motion/AnimatedProgressBar";
import { BadgesShowcase } from "@/components/profile/BadgesShowcase";
import { IconBadge } from "@/components/IconBadge";
import { SectionHeader } from "@/components/SectionHeader";
import { SettingsRow } from "@/components/SettingsRow";
import { StatCard } from "@/components/StatCard";
import { ScreenHeader } from "@/components/ui/ScreenHeader";
import { getTrackIcon } from "@/constants/icons";
import { images } from "@/constants/images";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { getLevelProgress } from "@/data/achievements";
import { getTrack } from "@/data/tracks";
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

export default function ProfileScreen() {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const { firstName, email, userId, avatarUri, setAvatarUri, signOut } =
    useSessionStore();
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
    completedChallengeIds,
    completedLabIds,
  } = useLearningStore();
  const entries = useCertificationStore((s) => s.entries);

  const track = getTrack(selectedTrack);
  const displayName = firstName ?? "Learner";
  const isGuest = userId === "user_guest";
  const initial = displayName.charAt(0).toUpperCase();
  const completedCount = completedLessonIds.length;
  const challengesDone = completedChallengeIds.length;
  const labsDone = completedLabIds.length;
  const levelInfo = getLevelProgress(totalXP);

  const preparing = useMemo(
    () => selectCertsByStatus(entries, "preparing"),
    [entries]
  );
  const obtained = useMemo(
    () => selectCertsByStatus(entries, "obtained"),
    [entries]
  );

  async function pickAvatar() {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert(t("profile.changePhoto"), t("profile.photoPermission"));
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.85,
    });
    if (!result.canceled && result.assets[0]?.uri) {
      setAvatarUri(result.assets[0].uri);
    }
  }

  function handleSignOut() {
    signOut();
    posthog.reset();
    router.replace("/onboarding");
  }

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      edges={["top"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <ScreenHeader
          title={t("profile.title")}
          subtitle={t("profile.subtitle")}
        />

        <View style={styles.hero}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={pickAvatar}
            accessibilityRole="button"
            accessibilityLabel={t("profile.changePhoto")}
            style={styles.avatarWrap}
          >
            <View
              style={[
                styles.avatarRing,
                { borderColor: colors.neutral.border },
              ]}
            >
              {avatarUri ? (
                <Image
                  source={{ uri: avatarUri }}
                  style={styles.avatarImage}
                  contentFit="cover"
                />
              ) : (
                <View
                  style={[
                    styles.avatarFallback,
                    { backgroundColor: colors.soft.blueBg },
                  ]}
                >
                  <Text
                    style={[
                      styles.avatarInitial,
                      { color: colors.primary.blue },
                    ]}
                  >
                    {initial}
                  </Text>
                </View>
              )}
            </View>
            <View
              style={[
                styles.cameraBadge,
                {
                  backgroundColor: colors.neutral.background,
                  borderColor: colors.neutral.border,
                },
              ]}
            >
              <Camera size={14} color={colors.neutral.textPrimary} />
            </View>
          </TouchableOpacity>

          <Text style={[styles.name, { color: colors.neutral.textPrimary }]}>
            {displayName}
          </Text>
          {isGuest ? (
            <Text
              style={[
                styles.guestLabel,
                { color: colors.neutral.textSecondary },
              ]}
            >
              {t("profile.guest")}
            </Text>
          ) : null}
          <Text style={[styles.email, { color: colors.neutral.textSecondary }]}>
            {email ?? t("profile.noAccount")}
          </Text>

          <Text
            style={[styles.levelLine, { color: colors.neutral.textPrimary }]}
          >
            {t("profile.level", { level: levelInfo.level })}
            <Text style={{ color: colors.neutral.textSecondary }}>
              {"  ·  "}
              {totalXP} XP
            </Text>
          </Text>
          <AnimatedProgressBar
            progress={levelInfo.percent}
            color={colors.primary.blue}
            trackColor={colors.neutral.border}
            height={4}
            style={styles.levelBar}
          />

          {isGuest ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push("/(auth)/sign-up")}
              hitSlop={8}
              style={styles.guestLink}
            >
              <Text
                style={[styles.guestLinkText, { color: colors.primary.blue }]}
              >
                {t("profile.createAccount")}
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>

        <SectionHeader title={t("profile.summary")} />
        <View style={[styles.statsRow, { marginBottom: spacing.section }]}>
          <StatCard
            icon="flame"
            label={t("profile.dayStreak")}
            value={streak}
            index={0}
          />
          <StatCard
            icon="book"
            label={t("profile.lessons")}
            value={completedCount}
            index={1}
          />
          <StatCard
            icon="zap"
            label={t("profile.totalXp")}
            value={totalXP}
            index={2}
          />
        </View>

        <SectionHeader title={t("profile.badges")} />
        <BadgesShowcase
          hideTitle
          streak={streak}
          totalXP={totalXP}
          lessonsCompleted={completedCount}
          challengesCompleted={challengesDone}
          labsCompleted={labsDone}
          certificationsObtained={obtained.length}
        />

        <SectionHeader title={t("profile.shortcuts")} />
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.neutral.card,
              borderColor: colors.neutral.border,
            },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.push("/certifications/index")}
          >
            <SettingsRow
              icon={Award}
              label={t("profile.certsEntry")}
              subtitle={t("profile.certsSummary", {
                preparing: preparing.length,
                obtained: obtained.length,
              })}
              showChevron
            />
          </TouchableOpacity>
          <View
            style={[
              styles.divider,
              { backgroundColor: colors.neutral.border },
            ]}
          />
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.push("/notifications")}
          >
            <SettingsRow
              icon={Bell}
              label={t("profile.activityLink")}
              subtitle={t("profile.activitySubtitle")}
              showChevron
            />
          </TouchableOpacity>
        </View>

        <SectionHeader title={t("profile.settings")} />
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.neutral.card,
              borderColor: colors.neutral.border,
            },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.push("/language-select")}
          >
            <View style={styles.trackRow}>
              <IconBadge name={getTrackIcon(selectedTrack)} size="sm" />
              <View style={styles.trackBody}>
                <Text
                  style={[
                    styles.trackTitle,
                    { color: colors.neutral.textPrimary },
                  ]}
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
            </View>
          </TouchableOpacity>
          <View
            style={[
              styles.divider,
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
              styles.divider,
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
              styles.divider,
              { backgroundColor: colors.neutral.border },
            ]}
          />
          <View style={styles.langBlock}>
            <View style={styles.langLabelRow}>
              <Languages size={18} color={colors.neutral.textPrimary} />
              <Text
                style={[
                  styles.langLabel,
                  { color: colors.neutral.textPrimary },
                ]}
              >
                {t("profile.language")}
              </Text>
            </View>
            <View style={styles.langChips}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setLocale("fr")}
                style={[
                  styles.chip,
                  {
                    borderColor:
                      locale === "fr"
                        ? colors.neutral.textPrimary
                        : colors.neutral.border,
                  },
                ]}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.medium,
                    fontSize: 12,
                    color:
                      locale === "fr"
                        ? colors.neutral.textPrimary
                        : colors.neutral.textSecondary,
                  }}
                >
                  {t("profile.languageFr")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setLocale("en")}
                style={[
                  styles.chip,
                  {
                    borderColor:
                      locale === "en"
                        ? colors.neutral.textPrimary
                        : colors.neutral.border,
                  },
                ]}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.medium,
                    fontSize: 12,
                    color:
                      locale === "en"
                        ? colors.neutral.textPrimary
                        : colors.neutral.textSecondary,
                  }}
                >
                  {t("profile.languageEn")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <SectionHeader title={t("profile.account")} />
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
          <Text style={[styles.signOutText, { color: colors.semantic.error }]}>
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
    paddingTop: 8,
    paddingBottom: 100,
  },
  hero: {
    alignItems: "center",
    marginBottom: spacing.section,
    paddingTop: 4,
  },
  avatarWrap: {
    position: "relative",
    marginBottom: 16,
  },
  avatarRing: {
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 1,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  avatarFallback: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInitial: {
    fontFamily: fontFamily.semiBold,
    fontSize: 40,
  },
  cameraBadge: {
    position: "absolute",
    right: 2,
    bottom: 2,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontFamily: fontFamily.semiBold,
    fontSize: 22,
    textAlign: "center",
  },
  guestLabel: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
  },
  email: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    marginTop: 4,
    textAlign: "center",
  },
  levelLine: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    marginTop: 14,
    textAlign: "center",
  },
  levelBar: {
    marginTop: 10,
    width: "55%",
    maxWidth: 200,
    alignSelf: "center",
  },
  guestLink: {
    marginTop: 14,
  },
  guestLinkText: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
  },
  card: {
    borderRadius: radius.lg,
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: spacing.section,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    marginLeft: 64,
  },
  trackRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  trackBody: { flex: 1 },
  trackTitle: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
  },
  trackCaption: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    marginTop: 2,
  },
  langBlock: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  langLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  langLabel: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
  },
  langChips: {
    flexDirection: "row",
    gap: 8,
    paddingLeft: 30,
  },
  chip: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "transparent",
  },
  signOut: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderRadius: radius.lg,
    borderWidth: 1,
    paddingVertical: 14,
    marginBottom: 24,
  },
  signOutText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
  },
  footer: {
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  version: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
  },
});
