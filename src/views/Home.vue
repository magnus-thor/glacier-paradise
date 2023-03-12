<template>
  <div class="page">
    <div class="home">
      <scrolling-bg-image />
      <h1>{{ $t("home.header") }}</h1>
      <div class="full"></div>
      <div ref="cardsRef" id="tours" class="cards--container">
        <cards v-if="loadCardsComponent" />
      </div>
      <!-- <div class="glacier-info--container">
        <glacier-info v-if="loadInstagramComponent" />
      </div> -->
      <div class="instagram--container">
        <instagram v-if="loadInstagramComponent" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import GlacierInfo from "@/components/homeComponents/glacier-info.vue";
import { defineAsyncComponent, defineComponent, onMounted, ref } from "vue";
import { onIntersect } from "@/composables/onIntersect";
import ScrollingBgImage from "@/components/homeComponents/scrolling-bg-image.vue";
import Instagram from "@/components/homeComponents/instagram.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Cards: defineAsyncComponent(
      () => import("@/components/homeComponents/cards.vue")
    ),
    GlacierInfo,
    ScrollingBgImage,
    Instagram,
  },
  setup() {
    const cardsRef = ref<HTMLElement>(null);
    const loadCardsComponent = ref(false);
    const loadInstagramComponent = ref(false);
    const observer = ref({});

    const onEnterToursComponent = () => {
      loadCardsComponent.value = true;
    };
    const onExitToursComponent = () => {
      loadInstagramComponent.value = true;
    };

    onMounted(() => {
      observer.value = onIntersect(
        cardsRef.value,
        onEnterToursComponent,
        onExitToursComponent
      );
    });

    return {
      loadCardsComponent,
      loadInstagramComponent,
      cardsRef,
    };
  },
});
</script>
<style lang="scss" scoped>
.page {
  overflow-x: hidden;
  position: relative;

  h1 {
    z-index: 1;
    margin: auto;
    margin-top: 25rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: white;
    text-align: center;
    max-width: 35ch;
  }
}

.full {
  min-height: 45vh;
}

.home {
  display: grid;
  grid-template-columns: 1fr;
}

.videos--container,
.cards--container,
.instagram--container,
.glacier-info--container {
  margin-top: 3rem;
  margin-bottom: 2rem;
  z-index: 1;
}
</style>
