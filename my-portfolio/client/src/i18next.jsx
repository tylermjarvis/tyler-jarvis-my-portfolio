import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from "../public/locals/en/translationEN.json";
import translationFR from "../public/locals/fr/translationFR.json";

// const fallbackLng = ["en"];
// const availableLanguage = ["fr"];

// the translations
const languages = [translationEN, translationFR];

i18n
  .use(LanguageDetector) // detect user language

  .use(initReactI18next) // pass the i18n instance to react-i18next.

  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en",
    debug: true,
    whitelist: languages,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
