//@ts-expect-error TODO: missing declaration file
import vClickOutside from "click-outside-vue3";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(vClickOutside);
});
