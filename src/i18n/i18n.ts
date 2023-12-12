import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//@ts-ignore
import { ua } from './ua.js'
//@ts-ignore
import { en } from './en.js'

const resources = {
  en: {
    translation: en
  },
  ua: {
    translation: ua
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;