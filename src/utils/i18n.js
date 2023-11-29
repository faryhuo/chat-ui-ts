import i18next  from 'i18next';
import { initReactI18next } from "react-i18next";
import translationEN from '../locales/en.json';
import translationZH from '../locales/zh.json';
import translationZH_TW from '../locales/zh_tw.json';
import translationJA from '../locales/ja.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN
    },
    zh: {
      translation: translationZH
    },
    zh_tw: {
      translation: translationZH_TW
    },
    ja: {
      translation: translationJA  // 添加日文资源
    }
  },
  debug: false,
  localStorage:'zh',
  interpolation: {
    escapeValue: false
  }
});

export default i18next;