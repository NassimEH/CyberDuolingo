import {
  Award,
  Bell,
  BookOpen,
  Camera,
  FileText,
  getTrackIcon,
  Info,
  Languages,
  Lock,
  LogOut,
  MessageCircle,
  Moon,
  ShieldCheck,
  Sparkles,
  Trash2,
  User,
} from "@/constants/icons";
import { toAvatarDataUrl } from "@/lib/avatar";
import Constants from "expo-constants";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { useFocusEffect, router } from "expo-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert,
  AppState,
  Linking,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
import { images } from "@/constants/images";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { getLevelProgress } from "@/data/achievements";
import {
  getLegalPublicUrl,
  type LegalPublicPage,
} from "@/data/legal";
import { getTrack } from "@/data/tracks";
import { useLocalize, useT } from "@/lib/i18n";
import {
  cancelStackNotifications,
  requestNotificationPermission,
} from "@/lib/notifications";
import { posthog } from "@/lib/posthog";
import { getRankProgress } from "@/lib/ranks";
import { useTheme } from "@/lib/useTheme";
import {
  selectCertsByStatus,
  useCertificationStore,
} from "@/store/certificationStore";
import { useLearningStore } from "@/store/learningStore";
import { useLocaleStore } from "@/store/localeStore";
import { usePrivacyStore } from "@/store/privacyStore";
import { useOnboardingStore } from "@/store/onboardingStore";
import { useSessionStore } from "@/store/sessionStore";
import { useThemeStore } from "@/store/themeStore";
import { useTrackStore } from "@/store/trackStore";

function SettingsDivider({ color }: { color: string }) {
  return <View style={[styles.divider, { backgroundColor: color }]} />;
}

function openLegalPage(
  page: LegalPublicPage,
  fallbackSlug: "privacy" | "terms"
) {
  const url = getLegalPublicUrl(page);
  if (url) {
    void Linking.openURL(url);
    return;
  }
  router.push({
    pathname: "/legal/[slug]",
    params: { slug: fallbackSlug },
  });
}

export default function ProfileScreen() {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const { firstName, email, avatarUri, setAvatarUri, signOut, deleteAccount, deleteLearningData } =
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
    completedChallengeIds,
    completedLabIds,
    clearAllLocalData,
  } = useLearningStore();
  const clearCerts = useCertificationStore((s) => s.clearAll);
  const entries = useCertificationStore((s) => s.entries);
  const notificationsEnabled = usePrivacyStore((s) => s.notificationsEnabled);
  const setNotificationsEnabled = usePrivacyStore(
    (s) => s.setNotificationsEnabled
  );
  const [photoAccess, setPhotoAccess] = useState(false);
  const [deletePassword, setDeletePassword] = useState("");
  const [deleteAccountOpen, setDeleteAccountOpen] = useState(false);
  const [busyDelete, setBusyDelete] = useState(false);

  const track = getTrack(selectedTrack);
  const displayName = firstName ?? "Learner";
  const initial = displayName.charAt(0).toUpperCase();
  const completedCount = completedLessonIds.length;
  const challengesDone = completedChallengeIds.length;
  const labsDone = completedLabIds.length;
  const levelInfo = getLevelProgress(totalXP);
  const rankInfo = getRankProgress(totalXP);
  const appVersion = Constants.expoConfig?.version ?? "1.0.0";

  const preparing = useMemo(
    () => selectCertsByStatus(entries, "preparing"),
    [entries]
  );
  const obtained = useMemo(
    () => selectCertsByStatus(entries, "obtained"),
    [entries]
  );

  const refreshPhotoAccess = useCallback(async () => {
    const status = await ImagePicker.getMediaLibraryPermissionsAsync();
    setPhotoAccess(status.granted);
  }, []);

  useFocusEffect(
    useCallback(() => {
      void refreshPhotoAccess();
    }, [refreshPhotoAccess])
  );

  useEffect(() => {
    const sub = AppState.addEventListener("change", (state) => {
      if (state === "active") void refreshPhotoAccess();
    });
    return () => sub.remove();
  }, [refreshPhotoAccess]);

  async function pickAvatar() {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    setPhotoAccess(permission.granted);
    if (!permission.granted) {
      Alert.alert(t("profile.changePhoto"), t("profile.photoPermission"));
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.55,
      base64: true,
    });
    const asset = result.assets?.[0];
    if (result.canceled || !asset) return;

    // Persist a durable data URL (file:// URIs do not survive logout/relogin).
    if (asset.base64) {
      const mime = asset.mimeType ?? "image/jpeg";
      await setAvatarUri(toAvatarDataUrl(asset.base64, mime));
      return;
    }
    if (asset.uri) {
      await setAvatarUri(asset.uri);
    }
  }

  async function handlePhotoAccessToggle(next: boolean) {
    if (next) {
      const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setPhotoAccess(result.granted);
      if (!result.granted) {
        Alert.alert(
          t("profile.photoAccess"),
          t("profile.permissionOpenSettings"),
          [
            { text: t("profile.cancel"), style: "cancel" },
            {
              text: t("profile.openSettings"),
              onPress: () => void Linking.openSettings(),
            },
          ]
        );
      }
      return;
    }
    Alert.alert(
      t("profile.photoAccess"),
      t("profile.permissionRevokeHint"),
      [
        { text: t("profile.cancel"), style: "cancel" },
        {
          text: t("profile.openSettings"),
          onPress: () => void Linking.openSettings(),
        },
      ]
    );
  }

  function handleNotificationsToggle(next: boolean) {
    if (!next) {
      setNotificationsEnabled(false);
      void cancelStackNotifications();
      return;
    }

    void (async () => {
      const granted = await requestNotificationPermission();
      if (!granted) {
        setNotificationsEnabled(false);
        Alert.alert(
          t("profile.notificationsAccess"),
          t("profile.permissionOpenSettings"),
          [
            { text: t("profile.cancel"), style: "cancel" },
            {
              text: t("profile.openSettings"),
              onPress: () => void Linking.openSettings(),
            },
          ]
        );
        return;
      }
      setNotificationsEnabled(true);
      Alert.alert(
        t("profile.notificationsAccess"),
        t("profile.notificationsEnabledHint")
      );
    })();
  }

  function handleSignOut() {
    Alert.alert(t("profile.signOutConfirmTitle"), t("profile.signOutConfirmMessage"), [
      { text: t("profile.cancel"), style: "cancel" },
      {
        text: t("profile.confirm"),
        style: "destructive",
        onPress: () => {
          void (async () => {
            await signOut();
            posthog.reset();
            router.replace("/onboarding");
          })();
        },
      },
    ]);
  }

  function handleDeleteData() {
    Alert.alert(
      t("profile.deleteDataConfirmTitle"),
      t("profile.deleteDataConfirmMessage"),
      [
        { text: t("profile.cancel"), style: "cancel" },
        {
          text: t("profile.confirm"),
          style: "destructive",
          onPress: () => {
            void (async () => {
              setBusyDelete(true);
              const result = await deleteLearningData();
              setBusyDelete(false);
              if (result.error) {
                Alert.alert(t("profile.deleteData"), result.error);
                return;
              }
              Alert.alert(t("profile.deleteData"), t("profile.deleteDataDone"));
            })();
          },
        },
      ]
    );
  }

  function handleDeleteAccount() {
    setDeletePassword("");
    setDeleteAccountOpen(true);
  }

  async function confirmDeleteAccount() {
    if (deletePassword.trim().length < 8) {
      Alert.alert(
        t("profile.deleteAccount"),
        t("profile.deleteAccountPasswordHint")
      );
      return;
    }
    setBusyDelete(true);
    const result = await deleteAccount({ password: deletePassword.trim() });
    setBusyDelete(false);
    if (result.error) {
      Alert.alert(t("profile.deleteAccount"), result.error);
      return;
    }
    setDeleteAccountOpen(false);
    clearAllLocalData();
    clearCerts();
    posthog.reset();
    router.replace("/onboarding");
  }

  const dividerColor = colors.neutral.border;

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
          <View style={styles.levelBarBlock}>
            <AnimatedProgressBar
              progress={rankInfo.percent}
              color={colors.primary.blue}
              trackColor={colors.neutral.border}
              height={4}
              style={styles.levelBar}
            />
            <View style={styles.rankBarRow}>
              <Text
                style={[styles.rankLabel, { color: colors.neutral.textSecondary }]}
                numberOfLines={2}
              >
                {L(rankInfo.current.title)}
              </Text>
              <Text
                style={[
                  styles.rankLabel,
                  styles.rankLabelRight,
                  { color: colors.neutral.textSecondary },
                ]}
                numberOfLines={2}
              >
                {rankInfo.next
                  ? L(rankInfo.next.title)
                  : t("profile.rankMax")}
              </Text>
            </View>
          </View>

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
            onPress={() => router.push("/certifications")}
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
          <SettingsRow
            icon={Camera}
            label={t("profile.photoAccess")}
            value={photoAccess}
            onValueChange={(v) => void handlePhotoAccessToggle(v)}
          />
          <View
            style={[
              styles.divider,
              { backgroundColor: colors.neutral.border },
            ]}
          />
          <SettingsRow
            icon={Bell}
            label={t("profile.notificationsAccess")}
            value={notificationsEnabled}
            onValueChange={handleNotificationsToggle}
          />
          <View
            style={[
              styles.divider,
              { backgroundColor: colors.neutral.border },
            ]}
          />
          <View style={styles.langRow}>
            <View style={styles.langIconWrap}>
              <Languages size={18} color={colors.neutral.textPrimary} />
            </View>
            <Text
              style={[styles.langLabel, { color: colors.neutral.textPrimary }]}
            >
              {t("profile.language")}
            </Text>
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
                    backgroundColor:
                      locale === "fr"
                        ? colors.soft.blueMuted
                        : "transparent",
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
                    backgroundColor:
                      locale === "en"
                        ? colors.soft.blueMuted
                        : "transparent",
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

        <SectionHeader title={t("profile.sectionAccount")} />
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
            onPress={() => router.push("/account/edit")}
          >
            <SettingsRow
              icon={User}
              iconColor={colors.primary.blue}
              label={t("profile.editInfo")}
              showChevron
            />
          </TouchableOpacity>
          <SettingsDivider color={dividerColor} />
          <TouchableOpacity activeOpacity={0.85} onPress={handleSignOut}>
            <SettingsRow
              icon={LogOut}
              iconColor={colors.semantic.error}
              label={t("profile.signOut")}
              showChevron
            />
          </TouchableOpacity>
          <SettingsDivider color={dividerColor} />
          <TouchableOpacity activeOpacity={0.85} onPress={handleDeleteData}>
            <SettingsRow
              icon={Trash2}
              iconColor={colors.semantic.error}
              label={t("profile.deleteData")}
              showChevron
            />
          </TouchableOpacity>
          <SettingsDivider color={dividerColor} />
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleDeleteAccount}
          >
            <SettingsRow
              icon={Trash2}
              iconColor={colors.semantic.error}
              label={t("profile.deleteAccount")}
              showChevron
            />
          </TouchableOpacity>
        </View>

        <SectionHeader title={t("profile.sectionPrivacy")} />
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
            onPress={() => router.push("/privacy/preferences")}
          >
            <SettingsRow
              icon={Sparkles}
              iconColor={colors.primary.blue}
              label={t("profile.privacyPrefs")}
              showChevron
            />
          </TouchableOpacity>
          <SettingsDivider color={dividerColor} />
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() =>
              router.push({
                pathname: "/legal/[slug]",
                params: { slug: "data-collected" },
              })
            }
          >
            <SettingsRow
              icon={BookOpen}
              iconColor={colors.primary.blue}
              label={t("profile.dataCollected")}
              showChevron
            />
          </TouchableOpacity>
          <SettingsDivider color={dividerColor} />
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() =>
              router.push({
                pathname: "/legal/[slug]",
                params: { slug: "data-usage" },
              })
            }
          >
            <SettingsRow
              icon={Lock}
              iconColor={colors.primary.blue}
              label={t("profile.dataUsage")}
              showChevron
            />
          </TouchableOpacity>
          <SettingsDivider color={dividerColor} />
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() =>
              router.push({
                pathname: "/legal/[slug]",
                params: { slug: "gdpr" },
              })
            }
          >
            <SettingsRow
              icon={ShieldCheck}
              iconColor={colors.primary.blue}
              label={t("profile.gdprRights")}
              showChevron
            />
          </TouchableOpacity>
        </View>

        <SectionHeader title={t("profile.sectionLegal")} />
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
            onPress={() => openLegalPage("privacy", "privacy")}
          >
            <SettingsRow
              icon={Lock}
              iconColor={colors.primary.blue}
              label={t("profile.privacyPolicy")}
              showChevron
            />
          </TouchableOpacity>
          <SettingsDivider color={dividerColor} />
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() =>
              router.push({
                pathname: "/legal/[slug]",
                params: { slug: "mentions" },
              })
            }
          >
            <SettingsRow
              icon={FileText}
              iconColor={colors.primary.blue}
              label={t("profile.legalMentions")}
              showChevron
            />
          </TouchableOpacity>
          <SettingsDivider color={dividerColor} />
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => openLegalPage("terms", "terms")}
          >
            <SettingsRow
              icon={BookOpen}
              iconColor={colors.primary.blue}
              label={t("profile.legalTerms")}
              showChevron
            />
          </TouchableOpacity>
        </View>

        <SectionHeader title={t("profile.sectionSupport")} />
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
            onPress={() => router.push("/support")}
          >
            <SettingsRow
              icon={MessageCircle}
              iconColor={colors.primary.blue}
              label={t("profile.supportLink")}
              showChevron
            />
          </TouchableOpacity>
        </View>

        <SectionHeader title={t("profile.sectionApp")} />
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
            onPress={() => router.push("/about")}
          >
            <SettingsRow
              icon={Info}
              iconColor={colors.primary.blue}
              label={t("profile.about")}
              showChevron
            />
          </TouchableOpacity>
          <SettingsDivider color={dividerColor} />
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => {
              useOnboardingStore.getState().resetProductTour();
              posthog.capture("onboarding_replay_tapped");
              router.push("/onboarding");
            }}
          >
            <SettingsRow
              icon={BookOpen}
              iconColor={colors.primary.blue}
              label={t("profile.replayOnboarding")}
              showChevron
            />
          </TouchableOpacity>
          <SettingsDivider color={dividerColor} />
          <SettingsRow
            icon={Sparkles}
            iconColor={colors.primary.blue}
            label={t("profile.appVersion")}
            subtitle={t("profile.versionLabel", { version: appVersion })}
          />
        </View>

        <View style={styles.footer}>
          <Image
            source={images.brandLogo}
            contentFit="contain"
            cachePolicy="memory-disk"
            priority="low"
            transition={0}
            style={{ width: 32, height: 32, opacity: 0.5 }}
          />
        </View>
      </ScrollView>

      <Modal
        visible={deleteAccountOpen}
        transparent
        animationType="fade"
        onRequestClose={() => !busyDelete && setDeleteAccountOpen(false)}
      >
        <View style={styles.modalBackdrop}>
          <View
            style={[
              styles.modalCard,
              {
                backgroundColor: colors.neutral.card,
                borderColor: colors.neutral.border,
              },
            ]}
          >
            <Text
              style={[styles.modalTitle, { color: colors.neutral.textPrimary }]}
            >
              {t("profile.deleteAccountConfirmTitle")}
            </Text>
            <Text
              style={[
                styles.modalBody,
                { color: colors.neutral.textSecondary },
              ]}
            >
              {t("profile.deleteAccountConfirmMessage")}
            </Text>
            <Text
              style={[
                styles.modalLabel,
                { color: colors.neutral.textSecondary },
              ]}
            >
              {t("profile.deleteAccountPassword")}
            </Text>
            <TextInput
              value={deletePassword}
              onChangeText={setDeletePassword}
              secureTextEntry
              autoCapitalize="none"
              editable={!busyDelete}
              placeholder={t("profile.deleteAccountPassword")}
              placeholderTextColor={colors.neutral.textSecondary}
              style={[
                styles.modalInput,
                {
                  color: colors.neutral.textPrimary,
                  borderColor: colors.neutral.border,
                  backgroundColor: colors.neutral.surface,
                },
              ]}
            />
            <View style={styles.modalActions}>
              <TouchableOpacity
                disabled={busyDelete}
                onPress={() => setDeleteAccountOpen(false)}
                style={[
                  styles.modalBtn,
                  { borderColor: colors.neutral.border },
                ]}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.medium,
                    color: colors.neutral.textPrimary,
                  }}
                >
                  {t("profile.cancel")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={busyDelete}
                onPress={() => void confirmDeleteAccount()}
                style={[
                  styles.modalBtn,
                  {
                    backgroundColor: colors.semantic.error,
                    borderColor: colors.semantic.error,
                    opacity: busyDelete ? 0.6 : 1,
                  },
                ]}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.semiBold,
                    color: "#fff",
                  }}
                >
                  {busyDelete ? "…" : t("profile.confirm")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scrollContent: {
    paddingHorizontal: spacing.screen,
    paddingTop: spacing.xs,
    paddingBottom: spacing.tabScrollBottom,
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
  levelBarBlock: {
    marginTop: 10,
    width: "88%",
    maxWidth: 320,
    alignSelf: "center",
  },
  levelBar: {
    width: "100%",
  },
  rankBarRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 6,
    gap: 12,
  },
  rankLabel: {
    flex: 1,
    fontFamily: fontFamily.regular,
    fontSize: 10,
    lineHeight: 13,
  },
  rankLabelRight: {
    textAlign: "right",
  },
  statsRow: {
    flexDirection: "row",
    gap: spacing.cardGap,
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
  langRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 12,
  },
  langIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  langLabel: {
    flex: 1,
    fontFamily: fontFamily.medium,
    fontSize: 14,
  },
  langChips: {
    flexDirection: "row",
    gap: 8,
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
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    paddingHorizontal: spacing.screen,
  },
  modalCard: {
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: 18,
  },
  modalTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
  },
  modalBody: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 18,
    marginTop: 8,
  },
  modalLabel: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    marginTop: 14,
    marginBottom: 6,
  },
  modalInput: {
    borderWidth: 1,
    borderRadius: radius.md,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontFamily: fontFamily.regular,
    fontSize: 15,
  },
  modalActions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
  },
  modalBtn: {
    flex: 1,
    borderWidth: 1,
    borderRadius: radius.md,
    paddingVertical: 12,
    alignItems: "center",
  },
  version: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
  },
});
