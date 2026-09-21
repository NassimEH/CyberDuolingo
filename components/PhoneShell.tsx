import type { ReactNode } from "react";
import {
  createContext,
  useContext,
  useMemo,
} from "react";
import {
  Platform,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";

/** Cap layouts to a phone column when the window is tablet-sized (iPad compat / Stage Manager). */
export const PHONE_CONTENT_MAX_WIDTH = 430;

type PhoneLayoutValue = {
  /** Usable content width (capped on large windows). */
  width: number;
  height: number;
  isConstrained: boolean;
};

const PhoneLayoutContext = createContext<PhoneLayoutValue | null>(null);

type Props = {
  children: ReactNode;
};

/**
 * Keeps the UI in a readable phone column on large windows and exposes the
 * real content width to children (FlatList paging, tab indicator, etc.).
 * iPhone-only binaries still run on iPad in compatibility mode; without this,
 * stretched/crowded layouts fail App Review Guideline 4.
 */
export function PhoneShell({ children }: Props) {
  const { width: windowWidth, height } = useWindowDimensions();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const isConstrained =
    Platform.OS === "ios" && windowWidth > PHONE_CONTENT_MAX_WIDTH + 24;
  const width = isConstrained
    ? PHONE_CONTENT_MAX_WIDTH
    : windowWidth;

  const value = useMemo(
    () => ({ width, height, isConstrained }),
    [width, height, isConstrained]
  );

  if (!isConstrained) {
    return (
      <PhoneLayoutContext.Provider value={value}>
        {children}
      </PhoneLayoutContext.Provider>
    );
  }

  return (
    <PhoneLayoutContext.Provider value={value}>
      <View
        style={[
          styles.stage,
          { backgroundColor: isDark ? "#0B1220" : "#E5E7EB" },
        ]}
      >
        <View
          style={[
            styles.phoneColumn,
            { backgroundColor: isDark ? "#0B1220" : "#fff" },
          ]}
        >
          {children}
        </View>
      </View>
    </PhoneLayoutContext.Provider>
  );
}

/** Prefer this over Dimensions.get("window") so layouts match the PhoneShell column. */
export function usePhoneLayout(): PhoneLayoutValue {
  const ctx = useContext(PhoneLayoutContext);
  const window = useWindowDimensions();
  if (ctx) return ctx;
  return {
    width: window.width,
    height: window.height,
    isConstrained: false,
  };
}

const styles = StyleSheet.create({
  stage: {
    flex: 1,
    alignItems: "center",
  },
  phoneColumn: {
    flex: 1,
    width: "100%",
    maxWidth: PHONE_CONTENT_MAX_WIDTH,
    overflow: "hidden",
  },
});
