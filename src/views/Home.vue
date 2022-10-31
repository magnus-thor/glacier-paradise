<template>
  <div class="page">
    <div class="home">
      <ScrollingBgImage />
      <h1>Special sightseeing tours of Snæfellsjökull</h1>
      <div class="full"></div>
      <div class="glacier-info--container">
        <Suspense>
          <GlacierInfo />
          <template #fallback>
            <h1>TODO: create fallback skeleton</h1>
          </template>
        </Suspense>
      </div>
      <div ref="cardsRef" class="cards--container">
        <Cards v-if="loadCardsComponent" />
      </div>
      <div class="instagram--container">
        <Instagram v-if="loadInstagramComponent" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import GlacierInfo from "@/components/glacier-info.vue";
import { defineAsyncComponent, defineComponent, onMounted, ref } from "vue";
import { onIntersect } from "@/composables/onIntersect";
import ScrollingBgImage from "@/components/scrolling-bg-image.vue";
import Instagram from "@/components/instagram.vue";

export default defineComponent({
  name: "HomeComponent",
  components: {
    Cards: defineAsyncComponent(() => import("@/components/cards.vue")),
    GlacierInfo,
    ScrollingBgImage,
    Instagram,
  },
  setup() {
    const cardsRef = ref<HTMLElement>(null);
    const loadCardsComponent = ref(false);
    const loadInstagramComponent = ref(false);
    const observer = ref({});

    const onEnterCardsComponent = () => {
      loadCardsComponent.value = true;
    };
    const onExitCardsComponent = () => {
      loadInstagramComponent.value = true;
    };

    onMounted(() => {
      observer.value = onIntersect(
        cardsRef.value,
        onEnterCardsComponent,
        onExitCardsComponent
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
  overflow: hidden;
  position: relative;
  h1 {
    z-index: 1;
    margin-top: 25%;
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
