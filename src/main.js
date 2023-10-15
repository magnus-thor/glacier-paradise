import { createApp, reactive } from "vue";
import App from "./App.vue";
import i18n from "./i18n.js";
import router from "./router";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  FaBus,
  FaRegularAddressCard,
  FaRegularClock,
  FcPrevious,
  FcPhoneAndroid,
  FcNext,
  IoTimeOutline,
  IoClose,
  WiCelsius,
  WiDirectionUp,
  OiLocation,
} from "oh-vue-icons/icons";

import TwicPics from "@twicpics/components/vue3";
import "@twicpics/components/style.css";

addIcons(
  FaBus,
  FaRegularAddressCard,
  FaRegularClock,
  FcPhoneAndroid,
  IoTimeOutline,
  FcPrevious,
  FcNext,
  IoClose,
  WiCelsius,
  WiDirectionUp,
  OiLocation
);

const Store = reactive({
  isDialogOpen: false,
});

const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(TwicPics, {
  domain: "https://glacierparadise.twic.pics",
});
app.component("v-icon", OhVueIcon);
app.provide("Store", Store);
app.mount("#app");
