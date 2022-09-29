<template>
  <header ref="scrollRef">
    <div id="header" class="header bg-color">
      <div class="invisible-element"></div>
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
        <select v-model="$i18n.locale">
          <option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
        <button
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          @click="changeLocale(locale)"
        >
          {{ locale }}
        </button>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { onIntersect } from "@/composables/onIntersect";
import { defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "MyHeader",
  setup() {
    let { locale } = useI18n();

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

    const observer = ref({});
    const scrollRef = ref<HTMLElement>();

    const onEnter = () => {
      document.getElementById("header").classList.toggle("bg-color");
    };

    const onExit = () => {
      document.getElementById("header").classList.toggle("bg-color");
    };

    onMounted(() => {
      observer.value = onIntersect(scrollRef.value, onEnter, onExit, false);
    });

    const changeLocale = (lang: string) => {
      locale.value = lang;
    };

    return { routes, scrollRef, changeLocale };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/base.scss";

.bg-color {
  background-color: $dark_grey;
  z-index: 100;

  .nav-routes .item {
    a {
      color: green;
    }

    a:hover {
      color: green;
    }

    a.router-link-active {
      color: green;
    }
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
  padding: 1rem 0 0.5rem 0;
  display: flex;
}

.invisible-element {
  margin-right: auto;
}

.locale-changer {
  margin-left: auto;
}

.invisible-element,
.locale-changer {
  width: 4rem;
}
</style>
