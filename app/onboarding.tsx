import { images } from "@/constants/images";
import { useT } from "@/lib/i18n";
import { enterUp } from "@/lib/motion";
import { posthog } from "@/lib/posthog";
import { useTrackStore } from "@/store/trackStore";
import { useSessionStore } from "@/store/sessionStore";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  const t = useT();
  const signInAsGuest = useSessionStore((s) => s.signInAsGuest);
  const selectedTrack = useTrackStore((s) => s.selectedTrack);
  const setSelectedTrack = useTrackStore((s) => s.setSelectedTrack);

  const enterAsGuest = () => {
    signInAsGuest();
    if (!selectedTrack) {
      setSelectedTrack("networking");
    }
    posthog.capture("guest_access", { source: "onboarding" });
    router.replace("/");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Animated.View entering={enterUp(0)} className="flex-1 px-6">
        <View className="flex-row items-center justify-center gap-2 mt-4">
          <Image source={images.mascotLogo} className="w-10 h-10" />
          <Text className="font-poppins-semibold text-xl text-text-primary">
            {t("brand.name")}
          </Text>
        </View>

        <Animated.View entering={enterUp(1)}>
          <Text className="h1 mt-8">{t("brand.tagline")}</Text>
          <Text className="body-md text-text-secondary mt-3">
            {t("brand.subtitle")}
          </Text>
        </Animated.View>

        <View className="flex-1 mt-4">
          <Image
            source={images.mascotWelcome}
            className="flex-1 w-full"
            resizeMode="contain"
          />

          <View
            className="absolute bg-white rounded-2xl px-4 py-2.5 left-0 top-[35%]"
            style={styles.shadow}
          >
            <Text className="font-poppins-medium text-sm text-text-primary">
              LAN
            </Text>
          </View>

          <View
            className="absolute bg-white rounded-2xl px-4 py-2.5 right-0 top-[10%]"
            style={styles.shadow}
          >
            <Text className="font-poppins-medium text-sm text-text-primary">
              DNS
            </Text>
          </View>

          <View
            className="absolute bg-white rounded-2xl px-4 py-2.5 right-5 top-[60%]"
            style={styles.shadow}
          >
            <Text className="font-poppins-medium text-sm text-lingua-purple">
              HTTPS
            </Text>
          </View>
        </View>

        <TouchableOpacity
          className="bg-lingua-purple rounded-2xl flex-row items-center justify-center mt-2 py-4.5"
          activeOpacity={0.85}
          testID="guest-access-button"
          onPress={enterAsGuest}
        >
          <Text className="font-poppins-semibold text-base text-white">
            {t("onboarding.guest")}
          </Text>
          <Ionicons
            name="chevron-forward"
            size={22}
            color="#fff"
            style={{ marginLeft: 8 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          className="rounded-2xl flex-row items-center justify-center mt-3 mb-6 py-4 border border-border"
          activeOpacity={0.85}
          testID="get-started-button"
          onPress={() => {
            posthog.capture("onboarding_get_started_tapped");
            router.push("/(auth)/sign-up");
          }}
        >
          <Text className="font-poppins-semibold text-base text-text-primary">
            {t("onboarding.createAccount")}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
});
