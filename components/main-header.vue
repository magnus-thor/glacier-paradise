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

      <nav>
        <!-- TODO: is tours ref in use???? -->
        <div class="nav-routes" ref="toursRef">
          <template v-for="route in routes">
            <div class="item">
              <nuxt-link :to="route.linkTo">{{
                $t(route.nameTranslationKey).toLocaleUpperCase()
              }}</nuxt-link>
            </div>
          </template>
        </div>
      </nav>

      <div class="locale-changer">
        <template v-for="lang in availableLocales">
          <button
            :key="`locale-${lang}`"
            @click="changeLocale(lang)"
            v-if="lang.code !== locale"
            class="locale-button"
          >
            {{ lang.name }}
          </button>
        </template>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { LocaleObject } from "vue-i18n-routing";
import { setupHeader } from "@/composables/headerShared";
const { locale, locales } = useI18n();

const availableLocales = computed(() => {
  return (locales.value as LocaleObject[]).filter(
    (i) => i.code !== locale.value
  );
});

const { scrollRef, showCenterLogo } = setupHeader();
const { routes, changeLocale } = setupRoutes();
</script>
<style lang="scss">
@import "@/assets/base.scss";

.header-background {
  background-color: $blue;
  @include ellipse-bg-midnight_blue-gradient;
  animation: both;
  transition: 3s;
}

.nav-routes {
  display: flex;
  justify-content: center;

  //TODO: duplicated in mobile-header, refactor to external file to maintain same look
  .item {
    padding-right: 1rem;

    button.nav-button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }

    a,
    button.nav-button {
      color: $yellow;
      font-weight: 600;
      font-size: 20px;

      &.bottom-border {
        border-bottom: 1px solid;
      }
    }

    a:hover {
      color: $white;
    }

    a.router-link-active {
      color: $white;
    }
  }
}

.header {
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  position: fixed;
  width: 100%;
  height: $header_height;
  align-items: center;
  z-index: 100;
  // box-sizing: border-box;
}

.hide-image {
  display: none;
}

.header-logo {
  width: 6rem;
  justify-self: center;

  img {
    width: 100%;
    transition: 2s;
  }
}

.center-logo {
  img {
    position: fixed;
    width: 14rem;

    top: 25vh;
    left: calc(50% - 7rem);
    transition: 2s;
  }
}

.locale-changer {
  justify-self: center;
}

.locale-button {
  background: none;
  color: $white;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: large;
}

@include for-desktop-up {
  .header-logo {
    width: 8rem;
  }

  .item {
    padding-right: 2rem;

    a,
    button.nav-button {
      font-size: 24px;
    }
  }
}
</style>
