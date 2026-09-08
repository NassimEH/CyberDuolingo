import { ArrowRight } from "@/constants/icons";
import { Image, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";

import { PressScale } from "@/components/motion/PressScale";
import { images } from "@/constants/images";
import { fontFamily, radius, shadows } from "@/constants/theme";
import { enterUp } from "@/lib/motion";
import { useTheme } from "@/lib/useTheme";

type Props = {
  eyebrow: string;
  title: string;
  meta: string;
  ctaLabel: string;
  onPress: () => void;
};

export function HomeHero({ eyebrow, title, meta, ctaLabel, onPress }: Props) {
  const { colors, darkMode } = useTheme();

  return (
    <Animated.View entering={enterUp(0, 12)} style={styles.wrap}>
      <PressScale onPress={onPress}>
        <View
          style={[
            styles.hero,
            {
              backgroundColor: colors.primary.deepBlue,
            },
          ]}
        >
          <View
            style={[
              styles.gradientOverlay,
              {
                backgroundColor: darkMode
                  ? "rgba(11,18,32,0.35)"
                  : "rgba(29,78,216,0.15)",
              },
            ]}
          />
          <View style={styles.textCol}>
            <Text style={styles.eyebrow}>{eyebrow}</Text>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
            <Text style={styles.meta}>{meta}</Text>
            <View style={styles.cta}>
              <Text style={[styles.ctaText, { color: colors.primary.blue }]}>
                {ctaLabel}
              </Text>
              <ArrowRight
                size={16}
                color={colors.primary.blue}
                strokeWidth={2.5}
              />
            </View>
          </View>
          <Image source={images.palace} style={styles.image} resizeMode="cover" />
        </View>
      </PressScale>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 20,
    ...shadows.card,
  },
  hero: {
    flexDirection: "row",
    borderRadius: radius.lg,
    height: 200,
    overflow: "hidden",
  },
  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  textCol: {
    flex: 1,
    paddingVertical: 20,
    paddingLeft: 20,
    paddingRight: 8,
    justifyContent: "space-between",
    zIndex: 1,
  },
  eyebrow: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    color: "rgba(255,255,255,0.75)",
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 22,
    lineHeight: 28,
    color: "#fff",
  },
  meta: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    color: "rgba(255,255,255,0.85)",
  },
  cta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  ctaText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
  },
  image: {
    width: 120,
    height: 200,
  },
});
