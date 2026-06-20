/**
 * MSCS Academy — i18n configuration
 *
 * Supported locales:
 *   - en (English) — default, LTR
 *   - ar (Arabic)  — RTL, primary UAE language
 *
 * Other community languages (ur, fa, es, ru, tr, fr) are supported via
 * the existing in-app translation switcher in page.tsx but are not yet
 * routed as URL segments — they fall back to English UI chrome with
 * content in the selected language. Migrating them to URL-segment
 * routing is a follow-up task.
 *
 * RTL handling:
 *   - The <html dir="..."> attribute is set per-locale
 *   - Tailwind `ltr-flip` class mirrors directional icons
 *   - Logical properties (ps-, pe-, ms-, me-) are used in new components
 */

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeConfig: Record<Locale, {
  label: string;
  nativeName: string;
  direction: "ltr" | "rtl";
  flag: string;
}> = {
  en: { label: "English", nativeName: "English", direction: "ltr", flag: "🇬🇧" },
  ar: { label: "Arabic", nativeName: "العربية", direction: "rtl", flag: "🇸🇦" },
};

/** Detect locale from URL pathname (e.g., /ar/lessons → "ar") */
export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (first && (locales as readonly string[]).includes(first)) {
    return first as Locale;
  }
  return defaultLocale;
}
