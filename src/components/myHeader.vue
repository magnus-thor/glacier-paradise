<template>
  <div ref="scrollRef">
    <div id="header" class="header bg-color">
      <div v-for="(route, index) in routes">
        <nav class="item">
          <router-link :to="route.linkTo">{{
            $t(route.nameTranslationKey)
          }}</router-link>
        </nav>
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
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onIntersect } from "@/composables/onIntersect";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "MyHeader",
  setup() {
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

    return { routes, scrollRef };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/base.scss";

.bg-color {
  background-color: $light_grey;
}

.header {
  position: fixed;
  width: 100%;
  padding: 1rem 5rem 0.5rem 5rem;
  display: flex;
  justify-content: center;
  width: 100%;
  color: $dark_grey;

  .item {
    padding-right: 2rem;

    // &:last-of-type {
    //   margin-left: auto;
    // }

    a:hover {
      background-color: blue;
    }

    a.router-link-active {
      background-color: yellow;
    }
  }
}
</style>
