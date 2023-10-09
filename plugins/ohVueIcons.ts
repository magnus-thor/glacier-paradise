import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  FaBus,
  FaRegularAddressCard,
  FaRegularClock,
  FcPrevious,
  FcPhoneAndroid,
  FcNext,
  FaHamburger,
  IoTimeOutline,
  IoClose,
  WiCelsius,
  WiDirectionUp,
  OiLocation,
} from "oh-vue-icons/icons";

addIcons(
  FaBus,
  FaRegularAddressCard,
  FaRegularClock,
  FcPhoneAndroid,
  FaHamburger,
  IoTimeOutline,
  FcPrevious,
  FcNext,
  IoClose,
  WiCelsius,
  WiDirectionUp,
  OiLocation
);

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component("v-icon", OhVueIcon);
});
