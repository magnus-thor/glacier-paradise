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
              <template v-if="route.linkTo !== '/tours'">
                <router-link
                  :to="route.linkTo"
                  @click="displaySubRoutes = false"
                  >{{ $t(route.nameTranslationKey) }}</router-link
                >
              </template>
              <template v-else>
                <button
                  class="nav-button bottom-border"
                  @click="displaySubRoutes = true"
                  @mouseover="displaySubRoutes = true"
                >
                  {{ $t(route.nameTranslationKey) }}
                </button>
              </template>
            </div>
          </template>
        </div>
        <div class="sub-routes" v-show="displaySubRoutes">
          <template v-for="tourRoute in tourRoutes">
            <router-link class="sub-route" :to="tourRoute.linkTo"
              >TBD</router-link
            >
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
import useDetectOutsideClick from "@/composables/detectClickOutside";
import { onIntersect } from "@/composables/onIntersect";
import { computed, defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "MyHeader",
  setup() {
    let { locale } = useI18n();
    const route = useRoute();
    //TODO: extract routes to keep same in both headers
    const routes = ref([
      {
        linkTo: "/",
        nameTranslationKey: "header.navLinks.home",
      },
      {
        linkTo: "/tours",
        nameTranslationKey: "header.navLinks.tours",
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

    const tourRoutes = ref([
      {
        linkTo: "/tours/snowcat",
        nameTranslationKey: "header.navLinks.home",
      },
      {
        linkTo: "/tours/midnight-sun",
        nameTranslationKey: "header.navLinks.tours",
      },
      {
        linkTo: "/tours/others",
        nameTranslationKey: "header.navLinks.about",
      },
    ]);

    const toursRef = ref();

    const displaySubRoutes = ref(false);

    const scrollRef = ref<HTMLElement>();

    const observer = ref({});
    let shouldCenterLogo = true;

    const onEnter = () => {
      if (route.path === "/") {
        document.getElementById("header").classList.remove("header-background");
        if (shouldCenterLogo)
          document.getElementById("header-logo").classList.add("center-logo");
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

    useDetectOutsideClick(toursRef, () => {
      displaySubRoutes.value = false;
    });

    return {
      routes,
      tourRoutes,
      scrollRef,
      changeLocale,
      showCenterLogo,
      displaySubRoutes,
      toursRef,
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
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid $yellow;
    top: -5px;
    left: 70px;
  }

  margin-top: 0.2rem;
  margin-left: 1.5rem;
  display: flex;
  padding: 0.3rem 0.6rem;
  border: 1px solid $yellow;
  border-radius: 5%;
  width: fit-content;

  a,
  button.nav-button {
    color: $yellow;
  }

  a:hover,
  button.nav-button:hover {
    color: $white;
  }

  a.router-link-active {
    color: $light_grey;
  }

  .sub-route + .sub-route {
    margin-left: 1rem;
  }
}

.arrow-up {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
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
