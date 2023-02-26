<template>
  <div class="page">
    <div class="home">
      <scrolling-bg-image />
      <h1>{{ $t("home.header") }}</h1>
      <div class="full"></div>
      <div class="glacier-info--container">
        <Suspense>
          <glacier-info />
          <template #fallback> Some fall back </template>
        </Suspense>
      </div>
      <div ref="cardsRef" id="tours" class="cards--container">
        <cards v-if="loadCardsComponent" />
      </div>
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
    const loadToursComponent = ref(false);
    const loadInstagramComponent = ref(false);
    const observer = ref({});

    const onEnterToursComponent = () => {
      loadToursComponent.value = true;
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
      loadCardsComponent: loadToursComponent,
      loadInstagramComponent,
      cardsRef,
    };
  },
});
</script>
<style lang="scss" scoped>
.page {
  overflow: hidden;
  position: relative;

  h1 {
    z-index: 1;
    margin-top: 25rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: white;
  }
}

.full {
  min-height: 90vh;
}

.home {
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 3rem;
  justify-items: center;
}

.videos--container,
.cards--container,
.instagram--container,
.glacier-info--container {
  margin-top: 3rem;
  margin-bottom: 2rem;
  width: 100vw;
  z-index: 1;
}
</style>
