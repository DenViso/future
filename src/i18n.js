import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import uk from "./langData/ua.json";
import en from "./langData/en.json";

const resources = {
  uk: {
    translation: uk,
  },
  en: {
    translation: en,
  },
  
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uk', 
    fallbackLng: 'uk', 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
