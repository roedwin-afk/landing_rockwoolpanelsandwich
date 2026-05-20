import { en } from "./en";
import { es } from "./es";
import type { TranslationKeys } from "./en";

export type Lang = "en" | "es";

const translations: Record<Lang, TranslationKeys> = { en, es };

export function getLang(url: URL, base: string): Lang {
  const path = url.pathname.replace(base, "");
  if (path.startsWith("es")) return "es";
  return "en";
}

export function useTranslations(lang: Lang) {
  return translations[lang];
}

export function getAlternatePath(url: URL, base: string = "/"): string {
  const pathname = url.pathname.replace(base, "");
  const isEs = pathname.startsWith("es");

  if (isEs) {
    // Estamos en ES → link a EN (quitar el prefijo "es")
    const withoutEs = pathname.replace(/^es\/?/, "") || "";
    return `${base}${withoutEs}`;
  } else {
    // Estamos en EN → link a ES
    return `${base}es/${pathname}`;
  }
}