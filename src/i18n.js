import { createI18n } from "vue-i18n";
import locales from "./locales";
// TODO: get browser language and set it as the default lang, https://www.flagsarenotlanguages.com/blog/best-practice-for-presenting-languages/
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "English",
  fallbackLocale: "English",
  messages: locales,
});

export default i18n;
