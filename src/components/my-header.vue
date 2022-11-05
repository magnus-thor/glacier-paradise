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
        />
      </div>

      <nav>
        <div class="nav-routes" ref="toursRef">
          <template v-for="route in routes">
            <div class="item">
              <router-link :to="route.linkTo">{{
                $t(route.nameTranslationKey)
              }}</router-link>
            </div>
          </template>
        </div>
      </nav>

      <div class="locale-changer">
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
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { setupHeader } from "@/composables/headerShared";

export default defineComponent({
  name: "MyHeader",
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

.header-background {
  background-color: $dark_grey;

  .header-logo img {
    width: 100%;
    height: auto;
    transition: 2s;
  }
}

.nav-routes {
  display: flex;
  justify-content: center;

  .item {
    padding-right: 2rem;

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

      &.bottom-border {
        border-bottom: 1px solid;
      }
    }

    a:hover {
      color: $white;
    }

    a.router-link-active {
      color: $light_grey;
    }
  }
}

.sub-routes {
  margin-top: 0.2rem;
  margin-left: 1.5rem;
  display: flex;
  padding: 0.3rem 0.6rem;
  border: 1px solid $yellow;
  border-radius: 5%;
  width: fit-content;

  a {
    color: $yellow;
  }

  a:hover {
    color: $white;
  }

  a.router-link-active {
    color: $light_grey;
  }
}

.header {
  position: fixed;
  width: 100%;
  height: 4rem;
  padding: 2rem 0 0.5rem 0;
  display: flex;
  z-index: 100;
}

.hide-image {
  display: none;
}

.header-logo {
  padding-left: 3rem;
  margin-right: auto;
  width: 8rem;

  img {
    width: 100%;
    height: auto;
  }
}

.center-logo {
  img {
    position: fixed;
    width: 14rem;

    top: calc(30% - 100px);
    left: calc(50% - 7rem);
  }
}

.locale-changer {
  margin-left: auto;
  width: 8rem;
}

.locale-button {
  background: none;
  color: $white;
  border: none;
  padding: 0;
  // font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: large;
}
</style>
