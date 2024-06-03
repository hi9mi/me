import { defaultLang } from './languages'
import translations from './translations.json'

export function getLangFromUrl(path: string) {
  const lang = /ru/.test(path) ? 'ru' : 'en'
  if (lang in translations)
    return lang as keyof typeof translations
  return defaultLang
}
