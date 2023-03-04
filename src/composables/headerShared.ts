import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { onIntersect } from "./onIntersect";

export const setupHeader = () => {
  let { locale } = useI18n();
  const route = useRoute();
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
    document.documentElement.lang = lang;
  };

  return {
    routes,
    scrollRef,
    changeLocale,
    showCenterLogo,
  };
};
