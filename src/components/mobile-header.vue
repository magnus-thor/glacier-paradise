<template>
  <header ref="scrollRef">
    <div
      id="header"
      class="header"
      :class="{ 'header-background': !showCenterLogo }"
    >
      <div
        id="header-logo"
        class="header-logo"
        :class="{ 'center-logo': showCenterLogo }"
      >
        <img
          id="header-image"
          src="/logos/logo-glacier-paradise-transparent.png"
          alt="Glacier paradise logo"
          rel="preload"
        />
      </div>
      <div class="bm-overlay">
        <Slide :closeOnNavigation="true" right width="180">
          <template v-for="locale in $i18n.availableLocales">
            <button
              :key="`locale-${locale}`"
              @click="changeLocale(locale)"
              v-if="locale !== $i18n.locale"
              class="locale-button"
            >
              {{ locale }}
            </button>
          </template>
          <template v-for="(route, index) in routes">
            <nav class="item">
              <router-link :to="route.linkTo">{{
                $t(route.nameTranslationKey)
              }}</router-link>
            </nav>
          </template>
        </Slide>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { setupHeader } from "@/composables/headerShared";
import { defineComponent } from "vue";
import { Slide } from "vue3-burger-menu";

export default defineComponent({
  name: "mobileHeader",
  components: { Slide },
  setup() {
    const { routes, scrollRef, changeLocale, showCenterLogo } = setupHeader();

    return {
      routes,
      scrollRef,
      changeLocale,
      showCenterLogo,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.header {
  position: fixed;
  display: flex;
  width: 100%;
  z-index: 15;
  justify-items: space-between;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  height: $header_height; //TODO: smaller header, use $header_height_mobile and all calcs for min height need to be responsive
  box-sizing: border-box;
}

.header-background {
  background-color: $sapphire_blue;
}

.header-logo img {
  width: 7rem;
  height: auto;
}

.center-logo {
  img {
    position: fixed;
    width: 14rem;

    top: 20vh;
    left: calc(50% - 7rem);
    transition: 2s;
  }
}

.item a {
  font-weight: 600;
  font-size: 24px;
}

.bm-overlay {
  position: absolute;
  right: 100px;
  top: -15px;
}

.locale-button {
  background: none;
  color: $white;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 24px;
  transform: translateY(-50px);
}
</style>
