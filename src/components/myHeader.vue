<template>
  <div class="header">
    <div class="item">
      <router-link to="/">{{ $t("header.navLinks.home") }}</router-link>
    </div>
    <div class="item">
      <router-link to="/about">{{ $t("header.navLinks.about") }}</router-link>
    </div>
    <div class="item">
      <router-link to="/contactUs">{{
        $t("header.navLinks.contact")
      }}</router-link>
    </div>
    <div class="item">
      <router-link to="/terms">{{ $t("header.navLinks.terms") }}</router-link>
    </div>
    <div class="item">
      <div class="locale-changer">
        <select v-model="$i18n.locale">
          <option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
        <nav></nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyHeader",
};
</script>
<style lang="scss" scoped>
@import "@/assets/base.scss";

.header {
  padding: 1rem 5rem 0 5rem;
  display: flex;
  background-color: $light_grey;
  color: $dark_grey;

  .item {
    padding-right: 2rem;

    &:last-of-type {
      margin-left: auto;
    }

    a:hover {
      background-color: blue;
    }

    a.router-link-active {
      background-color: yellow;
    }
  }
}
</style>
