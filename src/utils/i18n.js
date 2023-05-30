import i18next  from 'i18next';
import { initReactI18next } from "react-i18next";
import translationEN from '../locales/en.js';
import translationZH from '../locales/zh.js';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN
    },
    zh: {
      translation: translationZH
    }
  },
  debug: false,
  localStorage:'zh',
  interpolation: {
    escapeValue: false
  }
});

export default i18next;