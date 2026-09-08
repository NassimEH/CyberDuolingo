import {
  BookOpen,
  Home,
  MessageCircle,
  Trophy,
  User,
  type LucideIcon,
} from "@/constants/icons";
import { useEffect } from "react";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fontFamily } from "@/constants/theme";
import { motion } from "@/lib/motion";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/useTheme";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CIRCLE_SIZE = 52;
const TAB_HEIGHT = 64;

type TabConfig = {
  labelKey:
    | "tabs.home"
    | "tabs.learn"
    | "tabs.challenges"
    | "tabs.lab"
    | "tabs.profile";
  Icon: LucideIcon;
};

const TABS: TabConfig[] = [
  { labelKey: "tabs.home", Icon: Home },
  { labelKey: "tabs.learn", Icon: BookOpen },
  { labelKey: "tabs.challenges", Icon: Trophy },
  { labelKey: "tabs.lab", Icon: MessageCircle },
  { labelKey: "tabs.profile", Icon: User },
];

function TabItem({
  label,
  Icon,
  isFocused,
  color,
  onPress,
}: {
  label: string;
  Icon: LucideIcon;
  isFocused: boolean;
  color: string;
  onPress: () => void;
}) {
  const scale = useSharedValue(isFocused ? 1 : 0.92);

  useEffect(() => {
    scale.value = withTiming(isFocused ? 1 : 0.92, {
      duration: motion.duration.fast,
      easing: motion.easing,
    });
  }, [isFocused, scale]);

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <TouchableOpacity onPress={onPress} style={styles.tab} activeOpacity={0.8}>
      <Animated.View style={iconStyle}>
        <Icon size={22} color={color} strokeWidth={2} />
      </Animated.View>
      {!isFocused && <Text style={[styles.label, { color }]}>{label}</Text>}
    </TouchableOpacity>
  );
}

export function TabBar(props: any) {
  const { state, navigation } = props;
  const insets = useSafeAreaInsets();
  const t = useT();
  const { colors } = useTheme();
  const tabWidth = SCREEN_WIDTH / TABS.length;

  const indicatorX = useSharedValue(
    state.index * tabWidth + (tabWidth - CIRCLE_SIZE) / 2
  );

  useEffect(() => {
    indicatorX.value = withTiming(
      state.index * tabWidth + (tabWidth - CIRCLE_SIZE) / 2,
      { duration: 220, easing: Easing.out(Easing.cubic) }
    );
  }, [state.index, tabWidth, indicatorX]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorX.value }],
  }));

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom || 8,
          backgroundColor: colors.neutral.background,
          borderTopColor: colors.neutral.border,
        },
      ]}
    >
      <Animated.View
        style={[
          styles.indicator,
          indicatorStyle,
          { backgroundColor: colors.primary.blue },
        ]}
      />

      {state.routes.map(
        (route: { key: string; name: string }, index: number) => {
          const tab = TABS[index];
          if (!tab) return null;
          const isFocused = state.index === index;
          const Icon = tab.Icon;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TabItem
              key={route.key}
              label={t(tab.labelKey)}
              Icon={Icon}
              isFocused={isFocused}
              color={isFocused ? "#fff" : colors.neutral.textSecondary}
              onPress={onPress}
            />
          );
        }
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderTopWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 8,
  },
  indicator: {
    position: "absolute",
    top: (TAB_HEIGHT - CIRCLE_SIZE) / 2,
    left: 0,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: TAB_HEIGHT,
  },
  label: {
    fontFamily: fontFamily.medium,
    fontSize: 10,
    marginTop: 3,
  },
});
