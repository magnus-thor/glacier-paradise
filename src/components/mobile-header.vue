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
      <div class="bm-overlay">
        <Slide :closeOnNavigation="closeOnNavigation" right width="180">
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
import { onIntersect } from "@/composables/onIntersect";
import { computed, defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
// @ts-expect-error TODO fix
import { Slide } from "vue3-burger-menu";

export default defineComponent({
  name: "mobileHeader",
  components: { Slide },
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

    const closeOnNavigation = ref(true);

    return {
      routes,
      scrollRef,
      changeLocale,
      showCenterLogo,
      closeOnNavigation,
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
}

.header-background {
  background-color: $dark_grey;
}

.header-logo img {
  width: 5rem;
  height: auto;
}

.center-logo {
  img {
    position: fixed;
    width: 14rem;

    top: calc(25%);
    left: calc(50% - 7rem);
    // transition: 2s;
  }
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
  outline: inherit;
  font-size: large;
  transform: translateY(-50px);
}
</style>
