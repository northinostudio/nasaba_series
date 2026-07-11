import { useLang } from '../context/LanguageContext'
import en from '../locales/en.json'
import ha from '../locales/ha.json'

const locales = { en, ha }

function resolve(obj, path) {
  return path.split('.').reduce((cur, key) => cur?.[key], obj)
}

export function useTranslation() {
  const { lang } = useLang()
  const translations = locales[lang] ?? locales.en

  /**
   * t('hero.tagline')           → string
   * t('characters.abdul.details') → array
   * Falls back to en if key missing in active locale.
   */
  function t(key) {
    return resolve(translations, key) ?? resolve(locales.en, key) ?? key
  }

  return { t, lang }
}
