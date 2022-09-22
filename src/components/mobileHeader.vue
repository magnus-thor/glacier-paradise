<template>
  <Slide :closeOnNavigation="true" class="bm-overlay">
    <router-link class="colorMe" to="/">{{
      $t("header.navLinks.home")
    }}</router-link>
    <router-link to="/about">{{ $t("header.navLinks.about") }}</router-link>
    <router-link to="/contactUs">{{
      $t("header.navLinks.contact")
    }}</router-link>
    <router-link to="/terms">{{ $t("header.navLinks.terms") }}</router-link>
  </Slide>
</template>

<script>
import { Slide } from "vue3-burger-menu";
export default {
  name: "mobileHeader",
  components: { Slide },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

// .header {
//   padding: 1rem 5rem 0 5rem;
//   display: flex;
//   background-color: $light_grey;
//   color: $dark_grey;

//   .item {
//     padding-right: 2rem;

//     &:last-of-type {
//       margin-left: auto;
//     }

//     a:hover {
//       background-color: blue;
//     }

//     a.router-link-active {
//       background-color: yellow;
//     }
//   }
// }
</style>
