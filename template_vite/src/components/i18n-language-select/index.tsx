import i18nClient from "@/configs/i18n"
import { LANGUAGES } from "@/configs/language"

const I18nLanguageSelect = () => {
  return (
    <select value={i18nClient.language} onChange={e => i18nClient.changeLanguage(e.target.value)}>
      {Object.values(LANGUAGES).map(language => (
        <option key={language} value={language}>
          {language.toUpperCase()}
        </option>
      ))}
    </select>
  )
}

export default I18nLanguageSelect
