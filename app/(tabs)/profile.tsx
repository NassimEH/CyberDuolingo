import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  Image as RNImage,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SectionHeader } from "@/components/SectionHeader";
import { SettingsRow } from "@/components/SettingsRow";
import { StatCard } from "@/components/StatCard";
import { images } from "@/constants/images";
import { colors } from "@/constants/theme";
import { LANGUAGES } from "@/data/languages";
import { LESSONS } from "@/data/lessons";
import { posthog } from "@/lib/posthog";
import { useLanguageStore } from "@/store/languageStore";
import { useLearningStore } from "@/store/learningStore";
import { useSessionStore } from "@/store/sessionStore";

const ACHIEVEMENTS = [
  {
    id: "first-lesson",
    title: "First steps",
    description: "Complete your first lesson",
    icon: "footsteps" as const,
    requirement: (completed: number) => completed >= 1,
  },
  {
    id: "three-lessons",
    title: "On a roll",
    description: "Complete 3 lessons",
    icon: "flame" as const,
    requirement: (completed: number) => completed >= 3,
  },
  {
    id: "streak-7",
    title: "Week warrior",
    description: "Maintain a 7-day streak",
    icon: "calendar" as const,
    requirement: (_completed: number, streak: number) => streak >= 7,
  },
  {
    id: "xp-goal",
    title: "Goal getter",
    description: "Reach your daily XP goal",
    icon: "trophy" as const,
    requirement: (_completed: number, _streak: number, xpToday: number, dailyGoal: number) =>
      xpToday >= dailyGoal,
  },
];

export default function ProfileScreen() {
  const { firstName, email, userId, signOut } = useSessionStore();
  const { selectedLanguage } = useLanguageStore();
  const { xpToday, dailyGoal, streak, completedLessonIds } = useLearningStore();

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [hapticsEnabled, setHapticsEnabled] = useState(true);

  const language = LANGUAGES.find((item) => item.code === selectedLanguage);
  const displayName = firstName ?? "Learner";
  const isGuest = userId === "user_guest";
  const initial = displayName.charAt(0).toUpperCase();

  const completedCount = completedLessonIds.length;
  const totalXP = useMemo(
    () =>
      completedLessonIds.reduce((sum, lessonId) => {
        const lesson = LESSONS.find((item) => item.id === lessonId);
        return sum + (lesson?.xpReward ?? 0);
      }, 0),
    [completedLessonIds],
  );

  const xpProgress =
    dailyGoal > 0 ? Math.min((xpToday / dailyGoal) * 100, 100) : 0;

  function handleSignOut() {
    signOut();
    posthog.reset();
    router.replace("/onboarding");
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.neutral.background }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text className="h2 mb-5">Profile</Text>

        <View
          className="flex-row items-center bg-white rounded-[20px] border border-border p-4 mb-5"
          style={styles.profileCard}
        >
          <View
            className="w-16 h-16 rounded-full items-center justify-center"
            style={{ backgroundColor: colors.primary.purple }}
          >
            <Text className="font-poppins-bold text-2xl text-white">
              {initial}
            </Text>
          </View>
          <View className="flex-1 ml-4">
            <View className="flex-row items-center gap-2 mb-0.5">
              <Text className="font-poppins-semibold text-lg text-text-primary">
                {displayName}
              </Text>
              {isGuest ? (
                <View className="bg-surface rounded-full px-2 py-0.5">
                  <Text className="caption">Guest</Text>
                </View>
              ) : null}
            </View>
            <Text className="body-sm text-text-secondary">
              {email ?? "Exploring without account"}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/language-select")}
          >
            <Ionicons
              name="create-outline"
              size={22}
              color={colors.neutral.textSecondary}
            />
          </TouchableOpacity>
        </View>

        <View className="flex-row gap-3 mb-5">
          <StatCard
            icon="flame"
            iconColor={colors.semantic.streak}
            iconBg="#FFF5E8"
            label="Day streak"
            value={streak}
          />
          <StatCard
            icon="flash"
            iconColor={colors.primary.purple}
            iconBg="#EDE9FE"
            label="Total XP"
            value={totalXP}
          />
          <StatCard
            icon="book"
            iconColor={colors.primary.blue}
            iconBg="#DBEAFE"
            label="Lessons"
            value={completedCount}
          />
        </View>

        <View className="flex-row items-center bg-[#FFF5E8] rounded-[20px] py-4 pl-5 pr-3 mb-5">
          <View className="flex-1 pr-2">
            <Text className="font-poppins text-xs text-text-secondary mb-1">
              Daily goal
            </Text>
            <Text>
              <Text className="font-poppins-bold text-[28px] text-text-primary leading-[34px]">
                {xpToday}
              </Text>
              <Text className="font-poppins text-sm text-text-secondary leading-[34px]">
                {` / ${dailyGoal} XP`}
              </Text>
            </Text>
            <View className="h-2 bg-border rounded mt-[10px] overflow-hidden">
              <View
                className="h-2 bg-streak rounded"
                style={{ width: `${Math.round(xpProgress)}%` as `${number}%` }}
              />
            </View>
          </View>
          <RNImage
            source={images.treasure}
            style={{ width: 72, height: 72 }}
            resizeMode="contain"
          />
        </View>

        <SectionHeader title="Learning language" />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push("/language-select")}
          className="flex-row items-center bg-white rounded-2xl border border-border p-4 mb-6"
          style={styles.languageCard}
        >
          {language ? (
            <RNImage
              source={{ uri: language.flag }}
              style={styles.flag}
            />
          ) : (
            <View className="w-11 h-11 rounded-full bg-surface" />
          )}
          <View className="flex-1 ml-3">
            <Text className="font-poppins-semibold text-sm text-text-primary">
              {language?.name ?? "No language selected"}
            </Text>
            <Text className="caption">
              {language?.nativeName ?? "Tap to choose a language"}
            </Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={18}
            color={colors.neutral.textSecondary}
          />
        </TouchableOpacity>

        <SectionHeader title="Achievements" />
        <View className="gap-3 mb-6">
          {ACHIEVEMENTS.map((achievement) => {
            const unlocked = achievement.requirement(
              completedCount,
              streak,
              xpToday,
              dailyGoal,
            );

            return (
              <View
                key={achievement.id}
                className={`flex-row items-center rounded-2xl border p-4 ${
                  unlocked
                    ? "bg-white border-border"
                    : "bg-surface border-transparent opacity-70"
                }`}
                style={styles.achievementCard}
              >
                <View
                  className="w-11 h-11 rounded-xl items-center justify-center"
                  style={{
                    backgroundColor: unlocked ? "#EDE9FE" : colors.neutral.border,
                  }}
                >
                  <Ionicons
                    name={achievement.icon}
                    size={22}
                    color={
                      unlocked
                        ? colors.primary.purple
                        : colors.neutral.textSecondary
                    }
                  />
                </View>
                <View className="flex-1 ml-3">
                  <Text className="font-poppins-semibold text-sm text-text-primary">
                    {achievement.title}
                  </Text>
                  <Text className="caption">{achievement.description}</Text>
                </View>
                {unlocked ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={22}
                    color={colors.semantic.success}
                  />
                ) : (
                  <Ionicons
                    name="lock-closed"
                    size={18}
                    color={colors.neutral.textSecondary}
                  />
                )}
              </View>
            );
          })}
        </View>

        <SectionHeader title="Settings" />
        <View
          className="bg-white rounded-2xl border border-border mb-6 overflow-hidden"
          style={styles.settingsCard}
        >
          <SettingsRow
            icon="notifications-outline"
            label="Notifications"
            subtitle="Daily reminders & streak alerts"
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
          <View className="h-px bg-border mx-4" />
          <SettingsRow
            icon="volume-high-outline"
            iconColor={colors.primary.blue}
            iconBg="#DBEAFE"
            label="Sound effects"
            subtitle="Lesson feedback sounds"
            value={soundEnabled}
            onValueChange={setSoundEnabled}
          />
          <View className="h-px bg-border mx-4" />
          <SettingsRow
            icon="phone-portrait-outline"
            iconColor={colors.semantic.success}
            iconBg="#DCFCE7"
            label="Haptic feedback"
            subtitle="Vibration on interactions"
            value={hapticsEnabled}
            onValueChange={setHapticsEnabled}
          />
          <View className="h-px bg-border mx-4" />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/language-select")}
          >
            <SettingsRow
              icon="language-outline"
              label="Change language"
              subtitle={language?.name ?? "Not set"}
              showChevron
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="flex-row items-center justify-center bg-white rounded-2xl border border-border py-4 mb-3"
          activeOpacity={0.85}
          onPress={handleSignOut}
        >
          <Ionicons
            name="log-out-outline"
            size={20}
            color={colors.semantic.error}
          />
          <Text
            className="font-poppins-semibold text-base ml-2"
            style={{ color: colors.semantic.error }}
          >
            Sign out
          </Text>
        </TouchableOpacity>

        <View className="items-center mb-4">
          <Image
            source={images.mascotLogo}
            contentFit="contain"
            style={{ width: 32, height: 32, opacity: 0.5 }}
          />
          <Text className="caption mt-2">Lingua · v1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 100,
  },
  profileCard: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  languageCard: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  achievementCard: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  settingsCard: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  flag: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
});
