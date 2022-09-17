import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n.js";
import router from "./router";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaBus, IoTimeOutline } from "oh-vue-icons/icons";

addIcons(FaBus, IoTimeOutline);

const app = createApp(App);
app.use(i18n);
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
