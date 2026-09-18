import { AppPreview } from "@/components/onboarding/AppPreview";
import { usePhoneLayout } from "@/components/PhoneShell";
import { images } from "@/constants/images";
import { colors, fontFamily } from "@/constants/theme";
import { ONBOARDING_SLIDES, type OnboardingSlide } from "@/data/onboarding";
import { useLocalize, useT } from "@/lib/i18n";
import { enterUp } from "@/lib/motion";
import { posthog } from "@/lib/posthog";
import { useOnboardingStore } from "@/store/onboardingStore";
import { useSessionStore } from "@/store/sessionStore";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  type LayoutChangeEvent,
  type ListRenderItemInfo,
} from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const LAST_INDEX = ONBOARDING_SLIDES.length - 1;

export default function OnboardingScreen() {
  const t = useT();
  const localize = useLocalize();
  const { width: layoutWidth, height: windowHeight } = usePhoneLayout();
  const isSignedIn = useSessionStore((s) => s.isSignedIn);
  const hasSeenProductTour = useOnboardingStore((s) => s.hasSeenProductTour);
  const completeProductTour = useOnboardingStore((s) => s.completeProductTour);

  const listRef = useRef<FlatList<OnboardingSlide>>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [hydrated, setHydrated] = useState(
    useOnboardingStore.persist.hasHydrated()
  );
  const [userIndex, setUserIndex] = useState<number | null>(null);

  const pageWidth = slideWidth > 0 ? slideWidth : layoutWidth;
  // Keep preview readable without crowding CTAs on short / iPad-compat windows.
  const previewHeight = Math.max(
    180,
    Math.min(320, Math.round(windowHeight * 0.34))
  );

  useEffect(() => {
    if (hydrated) return;
    const unsub = useOnboardingStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });
    const timer = setTimeout(() => setHydrated(true), 800);
    return () => {
      unsub();
      clearTimeout(timer);
    };
  }, [hydrated]);

  const startIndex = useMemo(
    () => (hasSeenProductTour ? LAST_INDEX : 0),
    [hasSeenProductTour]
  );

  const index = userIndex ?? (hydrated ? startIndex : 0);
  const isLast = index >= LAST_INDEX;

  const finishTour = useCallback(() => {
    if (!useOnboardingStore.getState().hasSeenProductTour) {
      completeProductTour();
      posthog.capture("onboarding_tour_completed", { last_slide: index });
    }
  }, [completeProductTour, index]);

  const goNext = () => {
    if (isLast) return;
    const next = index + 1;
    listRef.current?.scrollToIndex({ index: next, animated: true });
    setUserIndex(next);
    if (next === LAST_INDEX) finishTour();
  };

  const skipToEnd = () => {
    finishTour();
    listRef.current?.scrollToIndex({ index: LAST_INDEX, animated: true });
    setUserIndex(LAST_INDEX);
    posthog.capture("onboarding_tour_skipped", { from_slide: index });
  };

  const onMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const next = Math.round(e.nativeEvent.contentOffset.x / pageWidth);
    if (next === index) return;
    setUserIndex(next);
    if (next === LAST_INDEX) finishTour();
  };

  const onListLayout = (e: LayoutChangeEvent) => {
    const next = e.nativeEvent.layout.width;
    if (next > 0 && Math.abs(next - slideWidth) > 0.5) {
      setSlideWidth(next);
    }
  };

  const renderItem = ({ item }: ListRenderItemInfo<OnboardingSlide>) => (
    <ScrollView
      style={{ width: pageWidth }}
      contentContainerStyle={styles.slideContent}
      showsVerticalScrollIndicator={false}
      bounces={false}
      nestedScrollEnabled
    >
      <View style={[styles.previewArea, { height: previewHeight }]}>
        <AppPreview preview={item.preview} />
      </View>
      <Text style={styles.eyebrow}>{localize(item.eyebrow)}</Text>
      <Text style={styles.title}>{localize(item.title)}</Text>
      <Text style={styles.body}>{localize(item.body)}</Text>
    </ScrollView>
  );

  if (!hydrated) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.primary.blue} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <Animated.View entering={enterUp(0)} style={styles.header}>
        <View style={styles.brandRow}>
          <Image
            source={images.brandLogo}
            style={styles.logo}
            contentFit="contain"
            cachePolicy="memory-disk"
            priority="high"
            transition={0}
          />
          <Text style={styles.brand}>{t("brand.name")}</Text>
        </View>
        {!isLast ? (
          <TouchableOpacity
            onPress={skipToEnd}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel={t("onboarding.skip")}
          >
            <Text style={styles.skip}>{t("onboarding.skip")}</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.skipPlaceholder} />
        )}
      </Animated.View>

      <FlatList
        ref={listRef}
        data={ONBOARDING_SLIDES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={startIndex}
        onMomentumScrollEnd={onMomentumEnd}
        onLayout={onListLayout}
        style={styles.list}
        getItemLayout={(_, i) => ({
          length: pageWidth,
          offset: pageWidth * i,
          index: i,
        })}
        onScrollToIndexFailed={(info) => {
          setTimeout(() => {
            listRef.current?.scrollToIndex({
              index: info.index,
              animated: false,
            });
          }, 50);
        }}
      />

      <View style={styles.footer}>
        <View style={styles.dots}>
          {ONBOARDING_SLIDES.map((slide, i) => (
            <View
              key={slide.id}
              style={[styles.dot, i === index && styles.dotActive]}
            />
          ))}
        </View>

        {isLast ? (
          <Animated.View entering={enterUp(0)} style={styles.ctaBlock}>
            {isSignedIn ? (
              <TouchableOpacity
                style={styles.primaryBtn}
                activeOpacity={0.85}
                testID="onboarding-done-button"
                accessibilityRole="button"
                onPress={() => {
                  finishTour();
                  router.replace("/(tabs)");
                }}
              >
                <Text style={styles.primaryBtnText}>
                  {t("onboarding.startApp")}
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={22}
                  color="#fff"
                  style={{ marginLeft: 8 }}
                />
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity
                  style={styles.primaryBtn}
                  activeOpacity={0.85}
                  testID="get-started-button"
                  accessibilityRole="button"
                  onPress={() => {
                    finishTour();
                    posthog.capture("onboarding_get_started_tapped");
                    router.push("/(auth)/sign-up");
                  }}
                >
                  <Text style={styles.primaryBtnText}>
                    {t("onboarding.createAccount")}
                  </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={22}
                    color="#fff"
                    style={{ marginLeft: 8 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.secondaryBtn}
                  activeOpacity={0.85}
                  testID="sign-in-cta-button"
                  accessibilityRole="button"
                  onPress={() => {
                    finishTour();
                    posthog.capture("onboarding_sign_in_tapped");
                    router.push("/(auth)/sign-in");
                  }}
                >
                  <Text style={styles.secondaryBtnText}>
                    {t("auth.signIn")}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </Animated.View>
        ) : (
          <TouchableOpacity
            style={styles.primaryBtn}
            activeOpacity={0.85}
            onPress={goNext}
            testID="onboarding-next-button"
            accessibilityRole="button"
          >
            <Text style={styles.primaryBtnText}>{t("onboarding.next")}</Text>
            <Ionicons
              name="chevron-forward"
              size={22}
              color="#fff"
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 4,
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logo: {
    width: 36,
    height: 36,
  },
  brand: {
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
    color: colors.neutral.textPrimary,
  },
  skip: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.neutral.textSecondary,
  },
  skipPlaceholder: {
    width: 48,
  },
  list: {
    flex: 1,
  },
  slideContent: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 12,
  },
  previewArea: {
    justifyContent: "center",
    marginBottom: 12,
  },
  eyebrow: {
    fontFamily: fontFamily.semiBold,
    fontSize: 12,
    color: colors.primary.blue,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 24,
    lineHeight: 30,
    color: colors.neutral.textPrimary,
    marginTop: 6,
  },
  body: {
    fontFamily: fontFamily.regular,
    fontSize: 15,
    lineHeight: 22,
    color: colors.neutral.textSecondary,
    marginTop: 8,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 16,
    paddingTop: 8,
    gap: 14,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.neutral.border,
  },
  dotActive: {
    width: 18,
    backgroundColor: colors.primary.blue,
  },
  ctaBlock: {
    gap: 10,
  },
  primaryBtn: {
    backgroundColor: colors.primary.blue,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    minHeight: 52,
  },
  primaryBtnText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: "#fff",
  },
  secondaryBtn: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.neutral.border,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    minHeight: 52,
  },
  secondaryBtnText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.neutral.textPrimary,
  },
});
