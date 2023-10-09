import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { onIntersect } from "./onIntersect";
import { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";

export const setupHeader = () => {
  const route = useRoute();

  const scrollRef = ref<HTMLElement>();

  const observer = ref({});
  let shouldCenterLogo = true;

  const onEnter = () => {
    if (route.path === "/") {
      document.getElementById("header")!.classList.remove("header-background");
      if (shouldCenterLogo)
        document.getElementById("header-logo")!.classList.add("center-logo");
    }
  };

  const onExit = () => {
    if (route.path === "/") {
      document.getElementById("header")!.classList.add("header-background");
      if (shouldCenterLogo) {
        const headerLogo = document.getElementById("header-logo")!;
        headerLogo.classList.remove("center-logo");
        shouldCenterLogo = false;
      }
    }
  };

  onMounted(() => {
    observer.value = onIntersect(
      scrollRef.value as HTMLElement,
      onEnter,
      onExit,
      false
    );
  });

  const showCenterLogo = computed(() => {
    return route.path === "/" && shouldCenterLogo;
  });

  return {
    scrollRef,
    showCenterLogo,
  };
};

export const setupRoutes = () => {
  const { setLocale } = useI18n();

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

  const changeLocale = async (newLocale: LocaleObject) => {
    await setLocale(newLocale.code);
    (window as any).beam(`/custom-events/locale-swapped-${newLocale.name}`);
  };

  return {
    routes,
    changeLocale,
  };
};
