// Design tokens — light/dark palettes for Stack learning app.

import { Platform, type ViewStyle } from "react-native";

export const lightColors = {
  primary: {
    purple: "#2563EB",
    deepPurple: "#1D4ED8",
    blue: "#2563EB",
    deepBlue: "#1D4ED8",
    green: "#21c16b",
  },
  soft: {
    blueBg: "#EFF6FF",
    blueBorder: "#93C5FD",
    blueMuted: "#DBEAFE",
  },
  semantic: {
    success: "#21c16b",
    warning: "#ffcb00",
    streak: "#0B1220",
    error: "#ff4d4f",
    info: "#3B82F6",
  },
  neutral: {
    textPrimary: "#001328",
    textSecondary: "#6b7280",
    border: "#e5e7eb",
    surface: "#f6f7fb",
    background: "#ffffff",
    card: "#ffffff",
  },
} as const;

export const darkColors = {
  primary: {
    purple: "#3B82F6",
    deepPurple: "#2563EB",
    blue: "#3B82F6",
    deepBlue: "#2563EB",
    green: "#34d399",
  },
  soft: {
    blueBg: "#132038",
    blueBorder: "#1E3A5F",
    blueMuted: "#1A2B45",
  },
  semantic: {
    success: "#34d399",
    warning: "#fbbf24",
    streak: "#F8FAFC",
    error: "#f87171",
    info: "#60a5fa",
  },
  neutral: {
    textPrimary: "#F1F5F9",
    textSecondary: "#94A3B8",
    border: "#243044",
    surface: "#151E2E",
    background: "#0B1220",
    card: "#151E2E",
  },
} as const;

export type ThemeColors = {
  primary: {
    purple: string;
    deepPurple: string;
    blue: string;
    deepBlue: string;
    green: string;
  };
  soft: {
    blueBg: string;
    blueBorder: string;
    blueMuted: string;
  };
  semantic: {
    success: string;
    warning: string;
    streak: string;
    error: string;
    info: string;
  };
  neutral: {
    textPrimary: string;
    textSecondary: string;
    border: string;
    surface: string;
    background: string;
    card: string;
  };
};

/** @deprecated Prefer useTheme().colors — kept for non-themed call sites */
export const colors = lightColors;

export const radius = {
  sm: 12,
  md: 16,
  lg: 20,
} as const;

export const shadows = {
  card: Platform.select<ViewStyle>({
    web: {
      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.04)",
    },
    default: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.04,
      shadowRadius: 6,
      elevation: 2,
    },
  })!,
} as const;

export const spacing = {
  /** Horizontal page inset */
  screen: 24,
  /** Space between major page blocks */
  section: 20,
  md: 16,
  sm: 12,
  xs: 8,
  /** Gap between stacked cards / list rows */
  cardGap: 12,
  /** Filter chip row gap */
  chipGap: 8,
  /** Below ScreenHeader before first block */
  afterHeader: 16,
  /** Scroll bottom inset (stack screens) */
  scrollBottom: 40,
  /** Scroll bottom inset for tab screens (clears custom tab bar) */
  tabScrollBottom: 100,
} as const;

export const fontFamily = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const fontSize = {
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  bodyLg: 16,
  bodyMd: 14,
  bodySm: 13,
  caption: 11,
} as const;

export const lineHeight = {
  h1: 38,
  h2: 31,
  h3: 26,
  h4: 22,
  bodyLg: 26,
  bodyMd: 22,
  bodySm: 21,
  caption: 15,
} as const;

export const fontWeight = {
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
} as const;

export const textStyles = {
  h1: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.h1,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.h1,
    color: colors.neutral.textPrimary,
  },
  h2: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.h2,
    fontWeight: fontWeight.semiBold,
    lineHeight: lineHeight.h2,
    color: colors.neutral.textPrimary,
  },
  h3: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.h3,
    fontWeight: fontWeight.semiBold,
    lineHeight: lineHeight.h3,
    color: colors.neutral.textPrimary,
  },
  h4: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.h4,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.h4,
    color: colors.neutral.textPrimary,
  },
  bodyLg: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.bodyLg,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.bodyLg,
    color: colors.neutral.textPrimary,
  },
  bodyMd: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.bodyMd,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.bodyMd,
    color: colors.neutral.textPrimary,
  },
  bodySm: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.bodySm,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.bodySm,
    color: colors.neutral.textPrimary,
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.caption,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.caption,
    color: colors.neutral.textSecondary,
  },
} as const;
