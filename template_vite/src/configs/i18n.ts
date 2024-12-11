import { createInstance } from "i18next"
import { initReactI18next } from "react-i18next"

import { LANGUAGES } from "@/configs/language"
import en from "@/locales/en.json"
import ko from "@/locales/ko.json"

const convertLanguageJsonToObject = <T extends Record<string, unknown>>(
  json: T,
  current?: string,
): T =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Object.keys(json).reduce((convertedObject: any, key: string) => {
    const currentLookupKey = current ? `${current}.${key}` : key
    const value = json[key]
    convertedObject[key] =
      typeof value === "object" && value !== null
        ? convertLanguageJsonToObject(value as Record<string, unknown>, currentLookupKey)
        : currentLookupKey

    return convertedObject
  }, {} as T)

export const translationJson = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
}

const LANGUAGES_LIST = [LANGUAGES.en, LANGUAGES.ko]

export const translation = convertLanguageJsonToObject(en)
const i18nClient = createInstance()

i18nClient.use(initReactI18next).init({
  resources: translationJson,
  fallbackLng: LANGUAGES_LIST,
  lng: `${globalThis.localStorage.getItem("i18nextLng") ?? LANGUAGES.en}`,
  debug: false,
  returnNull: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18nClient
