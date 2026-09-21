import * as AppleAuthentication from "expo-apple-authentication";
import { Ionicons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

import { useSessionStore } from "@/store/sessionStore";
import { useAppleAuth } from "@/hooks/useAppleAuth";
import { useGoogleAuth } from "@/hooks/useGoogleAuth";
import { useT } from "@/lib/i18n";

type Props = {
  disabled?: boolean;
  /** signIn rejects unknown Apple IDs; signUp creates the Stack account. */
  mode?: "signIn" | "signUp";
  onError: (message: string) => void;
  onSuccess: (method: "google" | "apple") => void;
};

/** Official multicolor Google “G” mark. */
function GoogleIcon({ size = 20 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48">
      <Path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <Path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <Path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <Path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </Svg>
  );
}

/**
 * Google + Apple social buttons.
 * Apple UI is always shown (local/web preview). Real SIWA only works on iOS
 * native builds (`appleAvailable`).
 */
export function AuthSocialButtons({
  disabled,
  mode = "signUp",
  onError,
  onSuccess,
}: Props) {
  const t = useT();
  const { signInWithGoogle, loading: googleLoading } = useGoogleAuth();
  const {
    signInWithApple,
    loading: appleLoading,
    available: appleAvailable,
  } = useAppleAuth();

  const busy = Boolean(disabled) || googleLoading || appleLoading;

  const completeGoogle = async () => {
    const result = await signInWithGoogle(mode);
    if (result.error) {
      onError(
        result.code === "ACCOUNT_NOT_FOUND"
          ? t("auth.googleAccountNotFound")
          : result.error
      );
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
    const result = await signInWithApple(mode);
    if (result.error) {
      onError(
        result.code === "ACCOUNT_NOT_FOUND"
          ? t("auth.appleAccountNotFound")
          : result.error
      );
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
            <GoogleIcon size={20} />
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
