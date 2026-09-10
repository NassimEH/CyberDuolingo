import * as AppleAuthentication from "expo-apple-authentication";
import { Ionicons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useSessionStore } from "@/store/sessionStore";
import { useAppleAuth } from "@/hooks/useAppleAuth";
import { useGoogleAuth } from "@/hooks/useGoogleAuth";
import { useT } from "@/lib/i18n";

type Props = {
  disabled?: boolean;
  onError: (message: string) => void;
  onSuccess: (method: "google" | "apple") => void;
};

/**
 * Google + Apple social buttons.
 * Apple UI is always shown (local/web preview). Real SIWA only works on iOS
 * native builds (`appleAvailable`).
 */
export function AuthSocialButtons({ disabled, onError, onSuccess }: Props) {
  const t = useT();
  const { signInWithGoogle, loading: googleLoading } = useGoogleAuth();
  const {
    signInWithApple,
    loading: appleLoading,
    available: appleAvailable,
  } = useAppleAuth();

  const busy = Boolean(disabled) || googleLoading || appleLoading;

  const completeGoogle = async () => {
    const result = await signInWithGoogle();
    if (result.error) {
      onError(result.error);
      return;
    }
    if (useSessionStore.getState().isSignedIn) {
      onSuccess("google");
    }
  };

  const completeApple = async () => {
    if (!appleAvailable) {
      onError(t("auth.appleIosOnly"));
      return;
    }
    const result = await signInWithApple();
    if (result.error) {
      onError(result.error);
      return;
    }
    if (useSessionStore.getState().isSignedIn) {
      onSuccess("apple");
    }
  };

  return (
    <View>
      <View style={styles.appleWrap}>
        {appleLoading ? (
          <View style={styles.appleLoading}>
            <ActivityIndicator color="#fff" />
          </View>
        ) : appleAvailable ? (
          <AppleAuthentication.AppleAuthenticationButton
            buttonType={
              AppleAuthentication.AppleAuthenticationButtonType.CONTINUE
            }
            buttonStyle={
              AppleAuthentication.AppleAuthenticationButtonStyle.BLACK
            }
            cornerRadius={16}
            style={styles.appleButton}
            onPress={() => {
              if (!busy) void completeApple();
            }}
          />
        ) : (
          <TouchableOpacity
            style={[styles.appleFallback, busy ? styles.buttonDisabled : null]}
            activeOpacity={0.85}
            onPress={() => void completeApple()}
            disabled={busy}
            testID="auth-apple-button"
          >
            <View style={styles.appleRow}>
              <Ionicons name="logo-apple" size={20} color="#fff" />
              <Text style={styles.appleLabel}>
                {t("auth.continueWithApple")}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity
        style={[styles.googleButton, busy ? styles.buttonDisabled : null]}
        activeOpacity={0.85}
        onPress={() => void completeGoogle()}
        disabled={busy}
        testID="auth-google-button"
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
    </View>
  );
}

const styles = StyleSheet.create({
  appleWrap: {
    marginBottom: 10,
  },
  appleButton: {
    width: "100%",
    height: 52,
  },
  appleLoading: {
    height: 52,
    borderRadius: 16,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  appleFallback: {
    height: 52,
    borderRadius: 16,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  appleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  appleLabel: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "#fff",
  },
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
});
