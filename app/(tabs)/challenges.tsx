import { Check, Trophy } from "@/constants/icons";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MotionView } from "@/components/motion/MotionView";
import { fontFamily, radius, spacing } from "@/constants/theme";
import {
  CHALLENGES,
  getChallenge,
  type Challenge,
} from "@/data/challenges";
import { SKILLS, type SkillId } from "@/data/skills";
import { feedbackError, feedbackSuccess } from "@/lib/feedback";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { useLearningStore } from "@/store/learningStore";

export default function ChallengesScreen() {
  const t = useT();
  const L = useLocalize();
  const { colors } = useTheme();
  const params = useLocalSearchParams<{ focus?: string }>();
  const completed = useLearningStore((s) => s.completedChallengeIds);
  const completeChallenge = useLearningStore((s) => s.completeChallenge);

  const [skillFilter, setSkillFilter] = useState<SkillId | "all">("all");
  const [active, setActive] = useState<Challenge | null>(null);
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    const focus = typeof params.focus === "string" ? params.focus : undefined;
    if (!focus) return;
    const c = getChallenge(focus);
    if (c) openChallenge(c);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- open on focus param only
  }, [params.focus]);

  const list = useMemo(() => {
    if (skillFilter === "all") return CHALLENGES;
    return CHALLENGES.filter((c) => c.skillId === skillFilter);
  }, [skillFilter]);

  function openChallenge(c: Challenge) {
    setActive(c);
    setQIndex(0);
    setSelected(null);
    setChecked(false);
    setCorrectCount(0);
  }

  function closeChallenge() {
    setActive(null);
  }

  function finishChallenge(c: Challenge, score: number) {
    if (score === c.questions.length) {
      completeChallenge(c.id, c.xpBonus, c.skillId);
      feedbackSuccess();
    }
    closeChallenge();
  }

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      edges={["top"]}
    >
      <ScrollView contentContainerStyle={styles.pad}>
        <View style={styles.head}>
          <Trophy size={22} color={colors.neutral.textPrimary} />
          <Text style={[styles.h2, { color: colors.neutral.textPrimary }]}>
            {t("tabs.challenges")}
          </Text>
        </View>
        <Text style={[styles.sub, { color: colors.neutral.textSecondary }]}>
          {t("challenges.subtitle")}
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8, paddingVertical: 12 }}
        >
          <Chip
            label={t("challenges.allSkills")}
            active={skillFilter === "all"}
            onPress={() => setSkillFilter("all")}
          />
          {SKILLS.map((s) => (
            <Chip
              key={s.id}
              label={L(s.title)}
              active={skillFilter === s.id}
              onPress={() => setSkillFilter(s.id)}
              color={s.color}
            />
          ))}
        </ScrollView>

        {list.map((c, i) => {
          const done = completed.includes(c.id);
          return (
            <MotionView key={c.id} index={i}>
              <TouchableOpacity
                style={[
                  styles.card,
                  {
                    backgroundColor: colors.neutral.card,
                    borderColor: done
                      ? colors.semantic.success
                      : colors.neutral.border,
                  },
                ]}
                onPress={() => openChallenge(c)}
                activeOpacity={0.85}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={[styles.cardTitle, { color: colors.neutral.textPrimary }]}
                  >
                    {L(c.title)}
                  </Text>
                  <Text
                    style={[
                      styles.cardMeta,
                      { color: colors.neutral.textSecondary },
                    ]}
                  >
                    {L(c.description)}
                  </Text>
                  <Text style={[styles.xp, { color: colors.primary.blue }]}>
                    +{c.xpBonus} XP · {c.difficulty}
                    {done ? ` · ${t("challenges.done")}` : ""}
                  </Text>
                </View>
                {done ? (
                  <Check size={20} color={colors.semantic.success} />
                ) : null}
              </TouchableOpacity>
            </MotionView>
          );
        })}
      </ScrollView>

      <Modal visible={!!active} animationType="slide" onRequestClose={closeChallenge}>
        {active ? (
          <SafeAreaView
            style={[styles.safe, { backgroundColor: colors.neutral.background }]}
          >
            <View style={styles.modalHead}>
              <TouchableOpacity onPress={closeChallenge}>
                <Text style={{ color: colors.primary.blue }}>{t("common.back")}</Text>
              </TouchableOpacity>
              <Text
                style={[styles.modalTitle, { color: colors.neutral.textPrimary }]}
                numberOfLines={1}
              >
                {L(active.title)}
              </Text>
              <View style={{ width: 48 }} />
            </View>
            <ScrollView contentContainerStyle={styles.pad}>
              {(() => {
                const q = active.questions[qIndex];
                if (!q) return null;
                return (
                  <>
                    <Text
                      style={[
                        styles.q,
                        { color: colors.neutral.textPrimary },
                      ]}
                    >
                      {L(q.question)}
                    </Text>
                    {q.options.map((opt, idx) => {
                      const isSel = selected === idx;
                      let border = colors.neutral.border;
                      let bg = colors.neutral.card;
                      if (checked && isSel && idx === q.correctIndex) {
                        border = colors.semantic.success;
                        bg = "rgba(16,185,129,0.12)";
                      } else if (checked && isSel) {
                        border = colors.semantic.error;
                        bg = "rgba(239,68,68,0.1)";
                      } else if (checked && idx === q.correctIndex) {
                        border = colors.semantic.success;
                      }
                      return (
                        <TouchableOpacity
                          key={idx}
                          disabled={checked}
                          onPress={() => setSelected(idx)}
                          style={[
                            styles.opt,
                            { borderColor: border, backgroundColor: bg },
                          ]}
                        >
                          <Text style={{ color: colors.neutral.textPrimary }}>
                            {L(opt)}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                    {checked ? (
                      <Text
                        style={{
                          color: colors.neutral.textSecondary,
                          marginTop: 12,
                          fontFamily: fontFamily.regular,
                        }}
                      >
                        {L(q.explanation)}
                      </Text>
                    ) : null}
                    <TouchableOpacity
                      style={[
                        styles.cta,
                        {
                          backgroundColor: colors.primary.blue,
                          opacity: selected === null && !checked ? 0.5 : 1,
                        },
                      ]}
                      disabled={selected === null && !checked}
                      onPress={() => {
                        if (!checked) {
                          const ok = selected === q.correctIndex;
                          setChecked(true);
                          if (ok) {
                            setCorrectCount((c) => c + 1);
                            feedbackSuccess();
                          } else feedbackError();
                          return;
                        }
                        if (qIndex < active.questions.length - 1) {
                          setQIndex((i) => i + 1);
                          setSelected(null);
                          setChecked(false);
                        } else {
                          finishChallenge(active, correctCount);
                        }
                      }}
                    >
                      <Text style={styles.ctaText}>
                        {checked
                          ? qIndex < active.questions.length - 1
                            ? t("lesson.continue")
                            : t("challenges.finish")
                          : t("lesson.check")}
                      </Text>
                    </TouchableOpacity>
                  </>
                );
              })()}
            </ScrollView>
          </SafeAreaView>
        ) : null}
      </Modal>
    </SafeAreaView>
  );
}

function Chip({
  label,
  active,
  onPress,
  color,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
  color?: string;
}) {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.chip,
        {
          backgroundColor: active
            ? colors.soft.blueBg
            : colors.neutral.surface,
          borderColor: active
            ? color ?? colors.primary.blue
            : colors.neutral.border,
        },
      ]}
    >
      <Text
        style={{
          fontFamily: fontFamily.medium,
          fontSize: 12,
          color: active
            ? color ?? colors.primary.blue
            : colors.neutral.textSecondary,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  pad: { padding: spacing.screen, paddingBottom: 40 },
  head: { flexDirection: "row", alignItems: "center", gap: 8 },
  h2: { fontFamily: fontFamily.semiBold, fontSize: 24 },
  sub: { fontFamily: fontFamily.regular, fontSize: 14, marginTop: 6 },
  chip: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  card: {
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cardTitle: { fontFamily: fontFamily.semiBold, fontSize: 15 },
  cardMeta: { fontFamily: fontFamily.regular, fontSize: 12, marginTop: 4 },
  xp: { fontFamily: fontFamily.medium, fontSize: 12, marginTop: 6 },
  modalHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.screen,
    paddingVertical: 12,
  },
  modalTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
    flex: 1,
    textAlign: "center",
  },
  q: {
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
    marginBottom: 16,
  },
  opt: {
    borderWidth: 1,
    borderRadius: radius.md,
    padding: 14,
    marginBottom: 8,
  },
  cta: {
    marginTop: 20,
    borderRadius: radius.md,
    paddingVertical: 14,
    alignItems: "center",
  },
  ctaText: {
    color: "#fff",
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
  },
});
