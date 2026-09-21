import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RequireAuth } from "@/components/RequireAuth";
import { fontFamily, radius, spacing } from "@/constants/theme";
import {
  isApplePrivateRelayEmail,
  isPlaceholderAppleName,
  needsAppleProfileCompletion,
} from "@/lib/appleProfile";
import { trackEvent } from "@/lib/analytics";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { useSessionStore } from "@/store/sessionStore";

export default function CompleteProfileScreen() {
  const t = useT();
  const { colors } = useTheme();
  const firstName = useSessionStore((s) => s.firstName);
  const email = useSessionStore((s) => s.email);
  const authProvider = useSessionStore((s) => s.authProvider);
  const updateProfile = useSessionStore((s) => s.updateProfile);

  const needsName = isPlaceholderAppleName(firstName, email);
  const needsEmail =
    !email?.includes("@") || isApplePrivateRelayEmail(email);

  const [name, setName] = useState(() => (needsName ? "" : firstName ?? ""));
  const [mail, setMail] = useState(() =>
    needsEmail && isApplePrivateRelayEmail(email) ? "" : email ?? ""
  );
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const stillNeeded = useMemo(
    () =>
      needsAppleProfileCompletion({
        authProvider,
        firstName,
        email,
      }),
    [authProvider, firstName, email]
  );

  const handleSave = () => {
    const trimmedName = name.trim();
    const trimmedMail = mail.trim();
    if (trimmedName.length < 2) {
      setError(t("account.completeNameError"));
      return;
    }
    if (!trimmedMail.includes("@")) {
      setError(t("account.completeEmailError"));
      return;
    }
    if (isApplePrivateRelayEmail(trimmedMail)) {
      setError(t("account.completeEmailHint"));
      return;
    }
    setError("");
    setSaving(true);
    void updateProfile({ firstName: trimmedName, email: trimmedMail }).then(
      (result) => {
        setSaving(false);
        if (result.error) {
          setError(result.error);
          return;
        }
        trackEvent("apple_profile_completed", {
          replaced_relay_email: needsEmail,
          replaced_placeholder_name: needsName,
        });
        router.replace("/");
      }
    );
  };

  return (
    <RequireAuth>
      <SafeAreaView
        style={[styles.safe, { backgroundColor: colors.neutral.background }]}
        edges={["top", "bottom"]}
      >
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={styles.pad}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <Text
              style={[styles.title, { color: colors.neutral.textPrimary }]}
            >
              {t("account.completeTitle")}
            </Text>
            <Text
              style={[styles.subtitle, { color: colors.neutral.textSecondary }]}
            >
              {t("account.completeSubtitle")}
            </Text>

            {!stillNeeded ? (
              <Text
                style={[styles.hint, { color: colors.neutral.textSecondary }]}
              >
                {t("account.completeAlreadyDone")}
              </Text>
            ) : null}

            <Text
              style={[styles.label, { color: colors.neutral.textSecondary }]}
            >
              {t("account.firstName")}
            </Text>
            <TextInput
              value={name}
              onChangeText={setName}
              autoFocus={needsName}
              placeholder={t("account.firstName")}
              placeholderTextColor={colors.neutral.textSecondary}
              style={[
                styles.input,
                {
                  color: colors.neutral.textPrimary,
                  borderColor: colors.neutral.border,
                  backgroundColor: colors.neutral.card,
                },
              ]}
            />

            <Text
              style={[styles.label, { color: colors.neutral.textSecondary }]}
            >
              {t("account.email")}
            </Text>
            <TextInput
              value={mail}
              onChangeText={setMail}
              autoCapitalize="none"
              keyboardType="email-address"
              autoComplete="email"
              placeholder="alex@gmail.com"
              placeholderTextColor={colors.neutral.textSecondary}
              style={[
                styles.input,
                {
                  color: colors.neutral.textPrimary,
                  borderColor: colors.neutral.border,
                  backgroundColor: colors.neutral.card,
                },
              ]}
            />
            {needsEmail ? (
              <Text
                style={[styles.hint, { color: colors.neutral.textSecondary }]}
              >
                {t("account.completeEmailHint")}
              </Text>
            ) : null}

            {error ? (
              <Text style={[styles.error, { color: colors.semantic.error }]}>
                {error}
              </Text>
            ) : null}

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleSave}
              disabled={saving}
              style={[
                styles.save,
                {
                  backgroundColor: colors.primary.blue,
                  opacity: saving ? 0.6 : 1,
                },
              ]}
            >
              {saving ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.saveText}>{t("account.completeSave")}</Text>
              )}
            </TouchableOpacity>

            {!stillNeeded ? (
              <TouchableOpacity
                onPress={() => router.replace("/")}
                style={styles.later}
              >
                <Text
                  style={[
                    styles.laterText,
                    { color: colors.neutral.textSecondary },
                  ]}
                >
                  {t("account.completeContinue")}
                </Text>
              </TouchableOpacity>
            ) : null}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </RequireAuth>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  flex: { flex: 1 },
  pad: {
    paddingHorizontal: spacing.screen,
    paddingTop: spacing.section,
    paddingBottom: spacing.scrollBottom,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 26,
    lineHeight: 32,
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 15,
    lineHeight: 22,
    marginTop: spacing.xs,
    marginBottom: spacing.section,
  },
  label: {
    fontFamily: fontFamily.medium,
    fontSize: 13,
    marginBottom: 6,
    marginTop: spacing.md,
  },
  input: {
    borderWidth: 1,
    borderRadius: radius.lg,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontFamily: fontFamily.regular,
    fontSize: 16,
  },
  hint: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 18,
    marginTop: 8,
  },
  error: {
    fontFamily: fontFamily.medium,
    fontSize: 13,
    marginTop: spacing.md,
  },
  save: {
    marginTop: spacing.section,
    borderRadius: radius.lg,
    paddingVertical: 16,
    alignItems: "center",
    minHeight: 52,
    justifyContent: "center",
  },
  saveText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: "#fff",
  },
  later: {
    marginTop: spacing.md,
    alignItems: "center",
    paddingVertical: 12,
  },
  laterText: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
  },
});
