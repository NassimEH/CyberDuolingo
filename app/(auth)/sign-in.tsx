import { images } from "@/constants/images";
import { useGoogleAuth } from "@/hooks/useGoogleAuth";
import { identifyUser, trackEvent } from "@/lib/analytics";
import { useSessionStore } from "@/store/sessionStore";
import { useTrackStore } from "@/store/trackStore";
import { useT } from "@/lib/i18n";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
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
  const signInWithPassword = useSessionStore((s) => s.signInWithPassword);
  const { signInWithGoogle, loading: googleLoading } = useGoogleAuth();
  const selectedTrack = useTrackStore((s) => s.selectedTrack);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);
  const busy = loading || googleLoading;

  const afterAuthSuccess = (method: "password" | "google") => {
    trackEvent("sign_in_completed", { method });
    const uid = useSessionStore.getState().userId;
    if (uid) {
      identifyUser(uid, {
        preferredTrack: selectedTrack,
      });
    }
    router.replace("/");
  };

  const completeSignIn = async () => {
    const trimmed = email.trim();
    if (!trimmed.includes("@")) {
      setAuthError("Entre une adresse e-mail valide.");
      return;
    }
    if (password.length < 8) {
      setAuthError("Le mot de passe doit faire au moins 8 caractères.");
      return;
    }

    setAuthError("");
    setLoading(true);
    const result = await signInWithPassword({ email: trimmed, password });
    setLoading(false);
    if (result.error) {
      setAuthError(result.error);
      return;
    }

    afterAuthSuccess("password");
  };

  const completeGoogle = async () => {
    setAuthError("");
    const result = await signInWithGoogle();
    if (result.error) {
      setAuthError(result.error);
      return;
    }
    // Web redirect may leave before this; native continues here.
    if (useSessionStore.getState().isSignedIn) {
      afterAuthSuccess("google");
    }
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
                contentFit="contain"
                cachePolicy="memory-disk"
                priority="high"
                transition={0}
              />
            </View>

            <TouchableOpacity
              style={[styles.googleButton, busy ? styles.buttonDisabled : null]}
              activeOpacity={0.85}
              onPress={() => void completeGoogle()}
              disabled={busy}
              testID="sign-in-google-button"
            >
              {googleLoading ? (
                <ActivityIndicator color="#001328" />
              ) : (
                <View style={styles.googleRow}>
                  <Ionicons name="logo-google" size={20} color="#001328" />
                  <Text style={styles.googleLabel}>
                    {t("auth.continueWithGoogle")}
                  </Text>
                </View>
              )}
            </TouchableOpacity>

            <View style={styles.orRow}>
              <View style={styles.orLine} />
              <Text style={styles.orText}>{t("auth.or")}</Text>
              <View style={styles.orLine} />
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

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.passwordRow}>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="••••••••"
                  placeholderTextColor="#9ca3af"
                  secureTextEntry={!showPassword}
                  style={[styles.input, styles.passwordInput]}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword((p) => !p)}
                  style={styles.eyeButton}
                  hitSlop={8}
                  accessibilityRole="button"
                  accessibilityLabel={
                    showPassword
                      ? "Masquer le mot de passe"
                      : "Afficher le mot de passe"
                  }
                >
                  <Ionicons
                    name={showPassword ? "eye" : "eye-outline"}
                    size={20}
                    color="#9ca3af"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {authError ? (
              <Text className="body-sm text-error mb-2">{authError}</Text>
            ) : null}

            <TouchableOpacity
              className="bg-lingua-purple rounded-2xl py-4 items-center mt-2"
              activeOpacity={0.85}
              onPress={() => void completeSignIn()}
              disabled={!email || !password || busy}
              style={{ opacity: !email || !password || busy ? 0.6 : 1 }}
              testID="sign-in-button"
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text className="font-poppins-semibold text-base text-white">
                  {t("auth.signIn")}
                </Text>
              )}
            </TouchableOpacity>

            <View className="flex-row justify-center mt-6 mb-8">
              <Text className="body-md text-text-secondary">
                {t("auth.noAccount")}
              </Text>
              <TouchableOpacity
                onPress={() => router.replace("/(auth)/sign-up")}
              >
                <Text className="body-md text-lingua-purple font-poppins-semibold">
                  {t("auth.signUp")}
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
  googleButton: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginBottom: 4,
    minHeight: 52,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  googleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  googleLabel: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "#001328",
  },
  orRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    gap: 12,
  },
  orLine: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#e5e7eb",
  },
  orText: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#9ca3af",
    textTransform: "lowercase",
  },
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
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 24,
  },
  passwordInput: {
    flex: 1,
    paddingRight: 36,
  },
  eyeButton: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});
