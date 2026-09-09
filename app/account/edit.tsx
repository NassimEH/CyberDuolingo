import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RequireAuth } from "@/components/RequireAuth";
import { BackHeader } from "@/components/ui/BackHeader";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { trackEvent, trackException } from "@/lib/analytics";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { useSessionStore } from "@/store/sessionStore";

export default function AccountEditScreen() {
  const t = useT();
  const { colors } = useTheme();
  const { firstName, email, updateProfile } = useSessionStore();

  const [name, setName] = useState(firstName ?? "");
  const [mail, setMail] = useState(email ?? "");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  function handleSave() {
    const trimmedName = name.trim();
    const trimmedMail = mail.trim();
    if (trimmedName.length < 2) {
      setError("Entre ton prénom (au moins 2 caractères).");
      return;
    }
    if (!trimmedMail.includes("@")) {
      setError("Entre une adresse e-mail valide.");
      return;
    }
    setError("");
    setSaving(true);
    void updateProfile({ firstName: trimmedName, email: trimmedMail }).then(
      (result) => {
        setSaving(false);
        if (result.error) {
          setError(result.error);
          trackException(new Error(result.error), { flow: "profile_update" });
          return;
        }
        trackEvent("profile_updated", {
          has_name: trimmedName.length > 0,
          has_email: trimmedMail.includes("@"),
        });
        router.back();
      }
    );
  }

  return (
    <RequireAuth>
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      edges={["top", "bottom"]}
    >
      <BackHeader title={t("account.editTitle")} />
      <ScrollView contentContainerStyle={styles.pad}>
        <Text style={[styles.label, { color: colors.neutral.textSecondary }]}>
          {t("account.firstName")}
        </Text>
        <TextInput
          value={name}
          onChangeText={setName}
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
        <Text style={[styles.label, { color: colors.neutral.textSecondary }]}>
          {t("account.email")}
        </Text>
        <TextInput
          value={mail}
          onChangeText={setMail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder={t("account.email")}
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
        <Text style={[styles.hint, { color: colors.neutral.textSecondary }]}>
          {t("account.editLocalHint")}
        </Text>
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
          <Text style={styles.saveText}>{t("account.save")}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
    </RequireAuth>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  pad: { padding: spacing.screen, paddingBottom: spacing.scrollBottom },
  label: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderRadius: radius.md,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontFamily: fontFamily.regular,
    fontSize: 15,
  },
  hint: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 18,
    marginTop: 12,
  },
  error: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    marginTop: 10,
  },
  save: {
    marginTop: 24,
    borderRadius: radius.md,
    paddingVertical: 14,
    alignItems: "center",
  },
  saveText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
    color: "#fff",
  },
});
