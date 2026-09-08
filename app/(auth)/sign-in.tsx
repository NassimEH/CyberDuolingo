import SocialButton from "@/components/SocialButton";
import { images } from "@/constants/images";
import { posthog } from "@/lib/posthog";
import { useSessionStore } from "@/store/sessionStore";
import { useTrackStore } from "@/store/trackStore";
import { useT } from "@/lib/i18n";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  const t = useT();
  const signIn = useSessionStore((s) => s.signIn);
  const signInAsGuest = useSessionStore((s) => s.signInAsGuest);
  const selectedTrack = useTrackStore((s) => s.selectedTrack);
  const setSelectedTrack = useTrackStore((s) => s.setSelectedTrack);
  const [email, setEmail] = useState("");
  const [authError, setAuthError] = useState("");

  const completeSignIn = (method: string, nextEmail = email) => {
    const trimmed = nextEmail.trim();
    if (!trimmed.includes("@")) {
      setAuthError("Enter a valid email address.");
      return;
    }

    setAuthError("");
    signIn({ email: trimmed });
    posthog.capture("sign_in_completed", { method });
    posthog.identify(useSessionStore.getState().userId!, {
      $set: { preferred_track: selectedTrack ?? null },
    });
    router.replace("/");
  };

  const handleGuestAccess = () => {
    signInAsGuest();
    if (!selectedTrack) {
      setSelectedTrack("networking");
    }
    posthog.capture("guest_access");
    router.replace("/");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 px-6">
            <TouchableOpacity
              onPress={() => router.back()}
              className="mt-4 w-10 h-10 justify-center"
            >
              <Ionicons name="chevron-back" size={24} color="#001328" />
            </TouchableOpacity>

            <Text className="h1 mt-4">{t("auth.welcomeBack")}</Text>
            <Text className="body-md text-text-secondary mt-2">
              {t("auth.continueJourney")}
            </Text>

            <View className="items-center mt-6 mb-6">
              <Image
                source={images.mascotAuth}
                style={{ width: 160, height: 160 }}
                resizeMode="contain"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="alex@gmail.com"
                placeholderTextColor="#9ca3af"
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
              />
            </View>
            {authError ? (
              <Text className="body-sm text-error mb-2">{authError}</Text>
            ) : null}

            <TouchableOpacity
              className="bg-lingua-purple rounded-2xl py-4 items-center mt-2"
              activeOpacity={0.85}
              onPress={() => completeSignIn("email")}
              disabled={!email}
              style={{ opacity: !email ? 0.6 : 1 }}
              testID="sign-in-button"
            >
              <Text className="font-poppins-semibold text-base text-white">
                {t("auth.signIn")}
              </Text>
            </TouchableOpacity>

            <View className="flex-row items-center my-6 gap-3">
              <View className="flex-1 h-px bg-border" />
              <Text className="body-sm text-text-secondary">
                or continue with
              </Text>
              <View className="flex-1 h-px bg-border" />
            </View>

            <SocialButton
              icon={<AntDesign name="google" size={20} color="#DB4437" />}
              label="Continue with Google"
              onPress={() =>
                completeSignIn("oauth_google", "google.user@tech.app")
              }
            />
            <SocialButton
              icon={<FontAwesome name="facebook" size={20} color="#1877F2" />}
              label="Continue with Facebook"
              onPress={() =>
                completeSignIn("oauth_facebook", "facebook.user@tech.app")
              }
            />
            <SocialButton
              icon={<AntDesign name="apple" size={20} color="#000" />}
              label="Continue with Apple"
              onPress={() =>
                completeSignIn("oauth_apple", "apple.user@tech.app")
              }
            />

            <TouchableOpacity
              className="rounded-2xl py-4 items-center mt-2 border border-border"
              activeOpacity={0.85}
              onPress={handleGuestAccess}
              testID="guest-access-button"
            >
              <Text className="font-poppins-semibold text-base text-text-primary">
                {t("auth.guest")}
              </Text>
            </TouchableOpacity>

            <View className="flex-row justify-center mt-4 mb-8">
              <Text className="body-md text-text-secondary">
                {t("auth.noAccount")}
              </Text>
              <TouchableOpacity
                onPress={() => router.replace("/(auth)/sign-up")}
              >
                <Text className="body-md text-lingua-purple font-poppins-semibold">
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
    marginBottom: 12,
  },
  inputLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: "#6b7280",
    marginBottom: 2,
  },
  input: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#001328",
    padding: 0,
  },
});
