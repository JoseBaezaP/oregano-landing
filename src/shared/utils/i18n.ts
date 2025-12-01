import { translations, type Locale } from '../../infrastructure/i18n/translations';

export function getTranslations(locale: string = 'es') {
  const validLocales: Locale[] = ['es', 'en', 'it'];
  const lang = (validLocales.includes(locale as Locale) ? locale : 'es') as Locale;
  return translations[lang];
}

export function getBrowserLocale(): Locale {
  if (typeof window === 'undefined') return 'es';
  const browserLang = navigator.language.split('-')[0];
  if (browserLang === 'en') return 'en';
  if (browserLang === 'it') return 'it';
  return 'es';
}
