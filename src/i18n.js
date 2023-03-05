import { createI18n } from "vue-i18n";
import locales from "./locales";
// TODO: get browser language and set it as the default lang
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  messages: locales,
});

export default i18n;
