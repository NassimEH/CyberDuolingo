import { darkColors, lightColors, type ThemeColors } from "@/constants/theme";
import { useThemeStore } from "@/store/themeStore";

export function useTheme(): { colors: ThemeColors; darkMode: boolean } {
  const darkMode = useThemeStore((s) => s.darkMode);
  return {
    darkMode,
    colors: darkMode ? darkColors : lightColors,
  };
}
