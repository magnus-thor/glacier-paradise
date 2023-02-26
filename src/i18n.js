import { createI18n } from "vue-i18n";
import locales from "./locales";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  messages: locales,
});

export default i18n;
