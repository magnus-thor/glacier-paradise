import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n.js";
import router from "./router";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  FaBus,
  IoTimeOutline,
  FcPrevious,
  FcNext,
  IoClose,
} from "oh-vue-icons/icons";

addIcons(FaBus, IoTimeOutline, FcPrevious, FcNext, IoClose);

const app = createApp(App);
app.use(i18n);
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
