import { defaultLang } from './languages'
import translations from './translations.json'

type GetKeys<T> = T extends Record<string, unknown>
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends Record<string, unknown>
          ? `${K}.${GetKeys<T[K]>}`
          : K
        : never;
    }[keyof T]
  : never

type TranslationsPath = GetKeys<typeof translations>

type TranslationsArray<Path> = Path extends `${infer T}.${infer R}`
  ? [T, ...TranslationsArray<R>]
  : [Path]

type OmitLanguageFromArray<T extends string[]> = T extends [infer L, ...infer R]
  ? L extends 'ru' | 'en'
    ? OmitLanguageFromArray<Extract<R, string[]>>
    : [Extract<L, string>, ...OmitLanguageFromArray<Extract<R, string[]>>]
  : []

type OmitLanguageFromString<Path> = Path extends `${infer L}.${infer R}`
  ? L extends 'ru' | 'en'
    ? OmitLanguageFromString<R>
    : `${L}.${OmitLanguageFromString<R>}`
  : Path

export function getTranslations(lang: keyof typeof translations = defaultLang) {
  return function t<Path extends TranslationsPath>(path: OmitLanguageFromString<Path>) {
    const keys = path.split('.') as OmitLanguageFromArray<TranslationsArray<Path>>
    let value: any = translations[lang || defaultLang]

    for (const key of keys) {
      value = value[key]
      if (value === undefined) {
        return ''
      }
    }
    return value as any
  }
}
