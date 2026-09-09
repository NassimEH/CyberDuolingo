import { useRouter } from "expo-router";
import {
  CheckCircle2,
  CircleHelp,
  Clock,
  Zap,
} from "@/constants/icons";
import { useMemo, useState, type ReactNode } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import { LessonDiagram } from "@/components/diagrams/LessonDiagram";
import { IconBadge } from "@/components/IconBadge";
import { LessonChrome } from "@/components/lesson/LessonChrome";
import { getLessonIcon } from "@/constants/icons";
import { fontFamily, radius, spacing } from "@/constants/theme";
import { getLesson, LESSONS } from "@/data/lessons";
import { UNITS } from "@/data/units";
import {
  feedbackComplete,
  feedbackError,
  feedbackSuccess,
} from "@/lib/feedback";
import { trackEvent } from "@/lib/analytics";
import { enterFade } from "@/lib/motion";
import { useLocalize, useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";
import { useLearningStore } from "@/store/learningStore";

type Phase = "intro" | "content" | "vocab" | "quiz" | "done";

type Props = { lessonId: string };

function PhaseBody({
  animKey,
  children,
}: {
  animKey: string;
  children: ReactNode;
}) {
  return (
    <Animated.View key={animKey} entering={enterFade()} style={{ flex: 1 }}>
      {children}
    </Animated.View>
  );
}

function computePercent(
  phase: Phase,
  sectionIndex: number,
  sectionCount: number,
  quizIndex: number,
  quizCount: number
): number {
  if (phase === "intro") return 5;
  if (phase === "content") {
    const part = sectionCount <= 0 ? 0 : (sectionIndex + 1) / sectionCount;
    return 5 + part * 45;
  }
  if (phase === "vocab") return 55;
  if (phase === "quiz") {
    const part = quizCount <= 0 ? 1 : (quizIndex + 0.5) / quizCount;
    return 55 + Math.min(part, 1) * 35;
  }
  return 100;
}

export function LessonPlayer({ lessonId }: Props) {
  const router = useRouter();
  const t = useT();
  const L = useLocalize();
  const { colors, darkMode } = useTheme();
  const lesson = useMemo(() => getLesson(lessonId), [lessonId]);
  const unit = useMemo(
    () => UNITS.find((u) => u.id === lesson?.unitId),
    [lesson?.unitId]
  );
  const completeLesson = useLearningStore((s) => s.completeLesson);
  const addXP = useLearningStore((s) => s.addXP);
  const recordQuizAnswer = useLearningStore((s) => s.recordQuizAnswer);
  const completedLessonIds = useLearningStore((s) => s.completedLessonIds);

  const [phase, setPhase] = useState<Phase>("intro");
  const [sectionIndex, setSectionIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [awarded, setAwarded] = useState(false);

  const successBg = darkMode ? "#052e1f" : "#ECFDF5";
  const errorBg = darkMode ? "#3f1212" : "#FEF2F2";

  const nextLessonId = useMemo(() => {
    if (!lesson) return null;
    const currentUnit = UNITS.find((u) => u.id === lesson.unitId);
    if (!currentUnit) return null;
    const idx = currentUnit.lessonIds.indexOf(lesson.id);
    return idx >= 0 && idx < currentUnit.lessonIds.length - 1
      ? currentUnit.lessonIds[idx + 1]
      : null;
  }, [lesson]);

  if (!lesson) {
    return (
      <SafeAreaView
        style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      >
        <View style={styles.center}>
          <Text style={[styles.title, { color: colors.neutral.textPrimary }]}>
            Lesson not found
          </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={[styles.link, { color: colors.primary.blue }]}>
              {t("common.back")}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const section = lesson.sections[sectionIndex];
  const activity = lesson.activities[quizIndex];
  const totalQuiz = lesson.activities.length;
  const icon = getLessonIcon(lesson.id, lesson.icon);
  const breadcrumb = `${unit ? L(unit.title) : "Stack"}  ›  ${L(lesson.title)}`;

  const percent = computePercent(
    phase,
    sectionIndex,
    lesson.sections.length,
    quizIndex,
    totalQuiz
  );

  const phaseLabel = (() => {
    switch (phase) {
      case "intro":
        return t("lesson.phaseIntro");
      case "content":
        return t("lesson.stepOf", {
          label: t("lesson.phaseContent"),
          current: sectionIndex + 1,
          total: lesson.sections.length,
        });
      case "vocab":
        return t("lesson.phaseVocab");
      case "quiz":
        return t("lesson.stepOf", {
          label: t("lesson.phaseQuiz"),
          current: quizIndex + 1,
          total: totalQuiz,
        });
      case "done":
        return t("lesson.phaseDone");
      default: {
        const _exhaustive: never = phase;
        return _exhaustive;
      }
    }
  })();

  const awardIfNeeded = () => {
    if (awarded) return;
    feedbackComplete();
    const unitLessonIds = unit?.lessonIds ?? [];
    const afterComplete = completedLessonIds.includes(lesson.id)
      ? completedLessonIds
      : [...completedLessonIds, lesson.id];
    const done = unitLessonIds.filter((id) => afterComplete.includes(id)).length;
    const modulePercent =
      unitLessonIds.length > 0
        ? Math.round((done / unitLessonIds.length) * 100)
        : 0;
    completeLesson(lesson.id, {
      perfect: correctCount === totalQuiz,
      modulePercent,
    });
    addXP(lesson.xpReward);
    setAwarded(true);
    trackEvent("lesson_completed", {
      lesson_id: lesson.id,
      unit_id: lesson.unitId,
      xp_reward: lesson.xpReward,
      perfect: correctCount === totalQuiz,
      quiz_correct: correctCount,
      quiz_total: totalQuiz,
      module_percent: modulePercent,
    });
  };

  const chrome = (
    <LessonChrome
      breadcrumb={breadcrumb}
      percent={percent}
      stepLabel={phaseLabel}
      onClose={() => router.back()}
    />
  );

  const primaryBtn = [
    styles.primaryBtn,
    { backgroundColor: colors.primary.blue },
  ];
  const primaryBtnText = [styles.primaryBtnText, { color: "#fff" }];

  if (phase === "intro") {
    return (
      <SafeAreaView
        style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      >
        {chrome}
        <PhaseBody animKey="intro">
          <ScrollView contentContainerStyle={styles.pad}>
          <View style={styles.introHero}>
            <IconBadge name={icon} size="lg" />
          </View>
          <Text style={[styles.h2, { color: colors.neutral.textPrimary }]}>
            {L(lesson.title)}
          </Text>
          <Text style={[styles.body, { color: colors.neutral.textSecondary }]}>
            {L(lesson.description)}
          </Text>

          <View style={styles.chips}>
            <View
              style={[styles.chip, { backgroundColor: colors.soft.blueBg }]}
            >
              <Clock size={14} color={colors.primary.blue} strokeWidth={2} />
              <Text style={[styles.chipText, { color: colors.primary.blue }]}>
                {lesson.estimatedMinutes} {t("lesson.minutes")}
              </Text>
            </View>
            <View
              style={[styles.chip, { backgroundColor: colors.soft.blueBg }]}
            >
              <CircleHelp
                size={14}
                color={colors.primary.blue}
                strokeWidth={2}
              />
              <Text style={[styles.chipText, { color: colors.primary.blue }]}>
                {lesson.activities.length} {t("lesson.questions")}
              </Text>
            </View>
            <View
              style={[styles.chip, { backgroundColor: colors.soft.blueBg }]}
            >
              <Zap size={14} color={colors.primary.blue} strokeWidth={2} />
              <Text style={[styles.chipText, { color: colors.primary.blue }]}>
                +{lesson.xpReward} XP
              </Text>
            </View>
          </View>

          <Text
            style={[styles.sectionLabel, { color: colors.neutral.textPrimary }]}
          >
            {t("lesson.objectives")}
          </Text>
          {lesson.goals.map((g, i) => (
            <View key={i} style={styles.goalRow}>
              <CheckCircle2
                size={20}
                color={colors.primary.blue}
                strokeWidth={2}
              />
              <Text
                style={[styles.goalText, { color: colors.neutral.textPrimary }]}
              >
                {L(g.description)}
              </Text>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity
          style={primaryBtn}
          onPress={() => {
            trackEvent("lesson_started", {
              lesson_id: lesson.id,
              unit_id: lesson.unitId,
              xp_reward: lesson.xpReward,
              estimated_minutes: lesson.estimatedMinutes,
            });
            setPhase("content");
          }}
        >
          <Text style={primaryBtnText}>{t("lesson.start")}</Text>
        </TouchableOpacity>
        </PhaseBody>
      </SafeAreaView>
    );
  }

  if (phase === "content" && section) {
    return (
      <SafeAreaView
        style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      >
        {chrome}
        <PhaseBody animKey={`content-${sectionIndex}`}>
        <ScrollView contentContainerStyle={styles.pad}>
          <View
            style={[
              styles.contentCard,
              { backgroundColor: colors.neutral.surface },
            ]}
          >
            <Text style={[styles.h3, { color: colors.neutral.textPrimary }]}>
              {L(section.title)}
            </Text>
            <Text
              style={[styles.bodyLg, { color: colors.neutral.textPrimary }]}
            >
              {L(section.body)}
            </Text>
            {section.bullets?.map((b, i) => (
              <View key={i} style={styles.bulletRow}>
                <View
                  style={[
                    styles.bulletDot,
                    { backgroundColor: colors.primary.blue },
                  ]}
                />
                <Text
                  style={[
                    styles.bulletText,
                    { color: colors.neutral.textPrimary },
                  ]}
                >
                  {L(b)}
                </Text>
              </View>
            ))}
          </View>
          {section.diagram ? <LessonDiagram id={section.diagram} /> : null}
          {section.analogy ? (
            <View
              style={[
                styles.callout,
                {
                  backgroundColor: colors.neutral.surface,
                  borderColor: colors.neutral.border,
                },
              ]}
            >
              <IconBadge name="sparkles" size="sm" />
              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    styles.calloutTitle,
                    { color: colors.neutral.textSecondary },
                  ]}
                >
                  {t("lesson.analogy")}
                </Text>
                <Text
                  style={[
                    styles.calloutBody,
                    { color: colors.neutral.textPrimary },
                  ]}
                >
                  {L(section.analogy)}
                </Text>
              </View>
            </View>
          ) : null}
          {section.codeExample ? (
            <View
              style={[
                styles.codeCard,
                {
                  backgroundColor: darkMode ? "#0F172A" : "#111827",
                  borderColor: colors.neutral.border,
                },
              ]}
            >
              {section.codeExample.caption ? (
                <Text style={styles.codeCaption}>
                  {L(section.codeExample.caption)}
                </Text>
              ) : null}
              <Text style={styles.codeText}>{section.codeExample.code}</Text>
            </View>
          ) : null}
          {section.miniExercise ? (
            <View
              style={[
                styles.callout,
                {
                  backgroundColor: colors.soft.blueBg,
                  borderColor: colors.soft.blueBorder,
                },
              ]}
            >
              <IconBadge name="book" size="sm" />
              <View style={{ flex: 1 }}>
                <Text
                  style={[styles.calloutTitle, { color: colors.primary.blue }]}
                >
                  {t("lesson.miniExercise")}
                </Text>
                <Text
                  style={[
                    styles.calloutBody,
                    { color: colors.neutral.textPrimary },
                  ]}
                >
                  {L(section.miniExercise.prompt)}
                </Text>
                {section.miniExercise.hint ? (
                  <Text
                    style={[
                      styles.calloutBody,
                      { color: colors.neutral.textSecondary, marginTop: 6 },
                    ]}
                  >
                    {L(section.miniExercise.hint)}
                  </Text>
                ) : null}
              </View>
            </View>
          ) : null}
          {section.callout ? (
            <View
              style={[
                styles.callout,
                (() => {
                  const kind = section.calloutKind ?? "key";
                  switch (kind) {
                    case "warning":
                      return {
                        backgroundColor: darkMode ? "#3B2F05" : "#FFFBEB",
                        borderColor: colors.semantic.warning,
                      };
                    case "mistake":
                      return {
                        backgroundColor: errorBg,
                        borderColor: colors.semantic.error,
                      };
                    case "tip":
                      return {
                        backgroundColor: successBg,
                        borderColor: colors.semantic.success,
                      };
                    case "key":
                    default:
                      return {
                        backgroundColor: colors.soft.blueBg,
                        borderColor: colors.soft.blueBorder,
                      };
                  }
                })(),
              ]}
            >
              <IconBadge
                name={
                  section.calloutKind === "mistake" ||
                  section.calloutKind === "warning"
                    ? "zap"
                    : section.calloutKind === "tip"
                      ? "award"
                      : "sparkles"
                }
                size="sm"
              />
              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    styles.calloutTitle,
                    {
                      color:
                        section.calloutKind === "mistake"
                          ? colors.semantic.error
                          : section.calloutKind === "warning"
                            ? "#D97706"
                            : section.calloutKind === "tip"
                              ? colors.semantic.success
                              : colors.primary.blue,
                    },
                  ]}
                >
                  {section.calloutKind === "mistake"
                    ? t("lesson.commonMistake")
                    : section.calloutKind === "warning"
                      ? t("lesson.warning")
                      : section.calloutKind === "tip"
                        ? t("lesson.tip")
                        : t("lesson.keyTakeaway")}
                </Text>
                <Text
                  style={[
                    styles.calloutBody,
                    { color: colors.neutral.textPrimary },
                  ]}
                >
                  {L(section.callout)}
                </Text>
              </View>
            </View>
          ) : null}
        </ScrollView>
        <TouchableOpacity
          style={primaryBtn}
          onPress={() => {
            if (sectionIndex < lesson.sections.length - 1) {
              setSectionIndex((i) => i + 1);
            } else {
              setPhase(lesson.vocabulary.length ? "vocab" : "quiz");
            }
          }}
        >
          <Text style={primaryBtnText}>{t("lesson.next")}</Text>
        </TouchableOpacity>
        </PhaseBody>
      </SafeAreaView>
    );
  }

  if (phase === "vocab") {
    return (
      <SafeAreaView
        style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      >
        {chrome}
        <PhaseBody animKey="vocab">
        <ScrollView contentContainerStyle={styles.pad}>
          <Text style={[styles.h2, { color: colors.neutral.textPrimary }]}>
            {t("lesson.vocabulary")}
          </Text>
          {lesson.vocabulary.map((v, i) => (
            <View
              key={i}
              style={[
                styles.vocabCard,
                {
                  borderColor: colors.soft.blueBorder,
                  backgroundColor: colors.soft.blueBg,
                },
              ]}
            >
              <Text
                style={[
                  styles.vocabTerm,
                  { color: colors.neutral.textPrimary },
                ]}
              >
                {L(v.term)}
              </Text>
              <Text
                style={[styles.body, { color: colors.neutral.textSecondary }]}
              >
                {L(v.definition)}
              </Text>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity style={primaryBtn} onPress={() => setPhase("quiz")}>
          <Text style={primaryBtnText}>{t("lesson.quiz")}</Text>
        </TouchableOpacity>
        </PhaseBody>
      </SafeAreaView>
    );
  }

  if (phase === "quiz" && activity) {
    const options = activity.options ?? [];
    const correct = L(activity.correctAnswer);
    const isCorrect = selected === correct;

    return (
      <SafeAreaView
        style={[styles.safe, { backgroundColor: colors.neutral.background }]}
      >
        {chrome}
        <PhaseBody animKey={`quiz-${quizIndex}`}>
        <ScrollView contentContainerStyle={styles.pad}>
          <Text style={[styles.h2, { color: colors.neutral.textPrimary }]}>
            {L(activity.question)}
          </Text>
          {options.map((opt, i) => {
            const label = L(opt);
            const selectedOpt = selected === label;
            let border: string = colors.neutral.border;
            let bg: string = colors.neutral.card;
            if (checked && selectedOpt && isCorrect) {
              border = colors.semantic.success;
              bg = successBg;
            } else if (checked && selectedOpt && !isCorrect) {
              border = colors.semantic.error;
              bg = errorBg;
            } else if (checked && label === correct) {
              border = colors.semantic.success;
              bg = successBg;
            } else if (selectedOpt) {
              border = colors.primary.blue;
              bg = colors.soft.blueBg;
            }
            return (
              <TouchableOpacity
                key={i}
                disabled={checked}
                onPress={() => setSelected(label)}
                style={[
                  styles.option,
                  { borderColor: border, backgroundColor: bg },
                ]}
              >
                <Text
                  style={[
                    styles.optionText,
                    { color: colors.neutral.textPrimary },
                  ]}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
          {checked ? (
            <View
              style={[
                styles.feedbackCard,
                {
                  backgroundColor: isCorrect ? successBg : errorBg,
                  borderColor: isCorrect
                    ? colors.semantic.success
                    : colors.semantic.error,
                },
              ]}
            >
              <Text
                style={{
                  fontFamily: fontFamily.semiBold,
                  color: isCorrect
                    ? colors.semantic.success
                    : colors.semantic.error,
                }}
              >
                {isCorrect ? t("lesson.correct") : t("lesson.incorrect")}
              </Text>
              {activity.explanation ? (
                <View style={{ marginTop: 8 }}>
                  <Text
                    style={{
                      fontFamily: fontFamily.semiBold,
                      fontSize: 13,
                      color: colors.neutral.textPrimary,
                      marginBottom: 4,
                    }}
                  >
                    {t("lesson.why")}
                  </Text>
                  <Text
                    style={[
                      styles.body,
                      {
                        color: colors.neutral.textSecondary,
                        marginBottom: 0,
                      },
                    ]}
                  >
                    {L(activity.explanation)}
                  </Text>
                </View>
              ) : null}
              {!isCorrect && activity.hint ? (
                <Text
                  style={[
                    styles.body,
                    {
                      color: colors.neutral.textSecondary,
                      marginBottom: 0,
                      marginTop: 8,
                    },
                  ]}
                >
                  {L(activity.hint)}
                </Text>
              ) : null}
            </View>
          ) : null}
        </ScrollView>
        {!checked ? (
          <TouchableOpacity
            style={[primaryBtn, { opacity: selected ? 1 : 0.5 }]}
            disabled={!selected}
            onPress={() => {
              const ok = selected === correct;
              setChecked(true);
              if (ok) setCorrectCount((c) => c + 1);
              recordQuizAnswer(activity.id, ok);
              trackEvent("quiz_answered", {
                lesson_id: lesson.id,
                activity_id: activity.id,
                quiz_index: quizIndex,
                correct: ok,
              });
              if (ok) feedbackSuccess();
              else feedbackError();
            }}
          >
            <Text style={primaryBtnText}>{t("lesson.check")}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={primaryBtn}
            onPress={() => {
              setChecked(false);
              setSelected(null);
              if (quizIndex < totalQuiz - 1) {
                setQuizIndex((i) => i + 1);
              } else {
                awardIfNeeded();
                setPhase("done");
              }
            }}
          >
            <Text style={primaryBtnText}>{t("lesson.continue")}</Text>
          </TouchableOpacity>
        )}
        </PhaseBody>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.neutral.background }]}
    >
      {chrome}
      <PhaseBody animKey="done">
      <View style={[styles.center, styles.pad]}>
        <CheckCircle2 size={72} color={colors.semantic.success} strokeWidth={2} />
        <Text
          style={[
            styles.h2,
            {
              color: colors.neutral.textPrimary,
              textAlign: "center",
              marginTop: 16,
            },
          ]}
        >
          {t("lesson.complete")}
        </Text>
        <Text
          style={[
            styles.body,
            { color: colors.neutral.textSecondary, textAlign: "center" },
          ]}
        >
          {t("lesson.score")}: {correctCount}/{totalQuiz}
        </Text>
        <Text style={[styles.xpBig, { color: colors.primary.blue }]}>
          {t("lesson.xpEarned", { xp: lesson.xpReward })}
        </Text>
      </View>
      <TouchableOpacity
        style={primaryBtn}
        onPress={() => {
          awardIfNeeded();
          router.back();
        }}
      >
        <Text style={primaryBtnText}>{t("lesson.finish")}</Text>
      </TouchableOpacity>
      {nextLessonId && LESSONS.some((l) => l.id === nextLessonId) ? (
        <TouchableOpacity
          style={[
            styles.secondaryBtn,
            { borderColor: colors.neutral.border },
          ]}
          onPress={() => {
            awardIfNeeded();
            router.replace(`/lesson/${nextLessonId}`);
          }}
        >
          <Text
            style={[styles.secondaryBtnText, { color: colors.primary.blue }]}
          >
            {t("lesson.nextLesson")}
          </Text>
        </TouchableOpacity>
      ) : null}
      </PhaseBody>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  pad: {
    paddingHorizontal: spacing.screen,
    paddingTop: spacing.section,
    paddingBottom: 24,
    flexGrow: 1,
  },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  introHero: { alignItems: "center", marginBottom: 20 },
  h2: {
    fontFamily: fontFamily.semiBold,
    fontSize: 24,
    lineHeight: 31,
    marginBottom: 10,
  },
  h3: {
    fontFamily: fontFamily.semiBold,
    fontSize: 20,
    lineHeight: 26,
    marginBottom: 12,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 22,
    marginBottom: 10,
  },
  body: {
    fontFamily: fontFamily.regular,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 12,
  },
  bodyLg: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 12,
  },
  sectionLabel: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    marginTop: 16,
    marginBottom: 12,
  },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 8 },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  chipText: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
  },
  goalRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginBottom: 12,
  },
  goalText: {
    flex: 1,
    fontFamily: fontFamily.regular,
    fontSize: 15,
    lineHeight: 22,
  },
  contentCard: {
    borderRadius: radius.lg,
    padding: 20,
    marginBottom: 16,
  },
  bulletRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
    alignItems: "flex-start",
  },
  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 8,
  },
  bulletText: {
    flex: 1,
    fontFamily: fontFamily.regular,
    fontSize: 15,
    lineHeight: 22,
  },
  callout: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: 16,
  },
  calloutTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 13,
    marginBottom: 4,
  },
  calloutBody: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 22,
  },
  codeCard: {
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: 14,
    marginBottom: 16,
  },
  codeCaption: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    color: "#94A3B8",
    marginBottom: 8,
  },
  codeText: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 18,
    color: "#E2E8F0",
  },
  vocabCard: {
    borderWidth: 1,
    borderRadius: radius.md,
    padding: 16,
    marginBottom: 12,
  },
  vocabTerm: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    marginBottom: 6,
  },
  option: {
    borderWidth: 1.5,
    borderRadius: radius.md,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  optionText: {
    fontFamily: fontFamily.medium,
    fontSize: 15,
  },
  feedbackCard: {
    borderWidth: 1,
    borderRadius: radius.md,
    padding: 14,
    marginTop: 8,
  },
  primaryBtn: {
    marginHorizontal: spacing.screen,
    marginBottom: 12,
    borderRadius: radius.md,
    paddingVertical: 16,
    alignItems: "center",
  },
  primaryBtnText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  secondaryBtn: {
    marginHorizontal: spacing.screen,
    marginBottom: 16,
    borderRadius: radius.md,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
  },
  secondaryBtnText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
  },
  link: {
    fontFamily: fontFamily.semiBold,
    marginTop: 12,
  },
  xpBig: {
    fontFamily: fontFamily.bold,
    fontSize: 28,
    marginTop: 8,
  },
});
