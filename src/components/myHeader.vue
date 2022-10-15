<template>
  <header ref="scrollRef">
    <div id="header" class="header" :class="{ 'header-background': !showCenterLogo }">
      <div id="header-logo" class="header-logo" :class="{ 'center-logo': showCenterLogo }">
        <img id="header-image" src="/logos/logo-glacier-paradise-transparent.png" alt="Glacier paradise logo" />
      </div>
      <div class="nav-routes">
        <template v-for="(route, index) in routes">
          <nav class="item">
            <router-link :to="route.linkTo">{{
            $t(route.nameTranslationKey)
            }}</router-link>
          </nav>
        </template>
      </div>
      <div class="locale-changer">
        <template v-for="locale in $i18n.availableLocales">
          <button :key="`locale-${locale}`" @click="changeLocale(locale)" v-if="locale !== $i18n.locale"
            class="locale-button">
            {{ locale }}
          </button>
        </template>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { onIntersect } from "@/composables/onIntersect";
import { computed, defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "MyHeader",
  setup() {
    let { locale } = useI18n();
    const route = useRoute();
    const routes = ref([
      {
        linkTo: "/",
        nameTranslationKey: "header.navLinks.home",
      },
      {
        linkTo: "/about",
        nameTranslationKey: "header.navLinks.about",
      },
      {
        linkTo: "/contactUs",
        nameTranslationKey: "header.navLinks.contact",
      },
      {
        linkTo: "/terms",
        nameTranslationKey: "header.navLinks.terms",
      },
    ]);

    const scrollRef = ref<HTMLElement>();

    const observer = ref({});
    let shouldCenterLogo = true;

    const onEnter = () => {
      if (route.path === "/") {
        document.getElementById("header").classList.remove("header-background");
        if (shouldCenterLogo) document.getElementById("header-logo").classList.add("center-logo");
      }
    };

    const onExit = () => {
      if (route.path === "/") {
        document.getElementById("header").classList.add("header-background");
        if (shouldCenterLogo) {
          const headerLogo = document.getElementById("header-logo");
          headerLogo.classList.remove("center-logo");
          shouldCenterLogo = false;
        }
      }
    };

    onMounted(() => {
      observer.value = onIntersect(scrollRef.value, onEnter, onExit, false);
    });


    const showCenterLogo = computed(() => {
      return route.path === "/" && shouldCenterLogo;
    });

    const changeLocale = (lang: string) => {
      locale.value = lang;
    };

    return { routes, scrollRef, changeLocale, showCenterLogo };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/base.scss";

.header-background {
  background-color: $dark_grey;

  // .nav-routes .item {
  //   a {
  //     color: $yellow;
  //   }

  //   a:hover {
  //     color: $white;
  //   }

  //   a.router-link-active {
  //     color: $white;
  //   }
  // }

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
}

.header {
  position: fixed;
  width: 100%;
  height: 4rem;
  padding: 1rem 0 0.5rem 0;
  display: flex;
  align-items: center;
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
