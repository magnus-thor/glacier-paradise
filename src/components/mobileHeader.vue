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

<script lang="ts">
import { defineComponent } from "vue";
// @ts-expect-error TODO fix
import { Slide } from "vue3-burger-menu";

export default defineComponent({
  name: "mobileHeader",
  components: { Slide },
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";
</style>
