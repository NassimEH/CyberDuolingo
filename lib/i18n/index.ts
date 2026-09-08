import { useLocaleStore } from "@/store/localeStore";
import {
  en,
  fr,
  localize,
  type Locale,
  type LocalizedString,
  type TranslationKey,
} from "@/lib/i18n/translations";

const dictionaries = { fr, en } as const;

export function t(
  key: TranslationKey,
  locale: Locale,
  params?: Record<string, string | number>
): string {
  let value = dictionaries[locale][key] ?? dictionaries.fr[key] ?? key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      value = value.replace(`{${k}}`, String(v));
    }
  }
  return value;
}

export function useT() {
  const locale = useLocaleStore((s) => s.locale);
  return (key: TranslationKey, params?: Record<string, string | number>) =>
    t(key, locale, params);
}

export function useLocale(): Locale {
  return useLocaleStore((s) => s.locale);
}

export function useLocalize() {
  const locale = useLocale();
  return (value: LocalizedString | string) => localize(value, locale);
}

export type { Locale, LocalizedString, TranslationKey };
export { localize };
