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
        <Cards v-if="loadComponents" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import GlacierInfo from "@/components/glacier-info.vue";
import { defineAsyncComponent, defineComponent, onMounted, ref } from "vue";
import { onIntersect } from "@/composables/onIntersect";
import ScrollingBgImage from "@/components/scrolling-bg-image.vue";

export default defineComponent({
  name: "HomeComponent",
  components: {
    Cards: defineAsyncComponent(() => import("@/components/cards.vue")),
    GlacierInfo,
    ScrollingBgImage,
  },
  setup() {
    const cardsRef = ref<HTMLElement>(null);

    const loadComponents = ref(false);
    const observer = ref({});

    const onEnter = () => {
      loadComponents.value = true;
    };

    onMounted(() => {
      observer.value = onIntersect(cardsRef.value, onEnter);
    });

    return { loadComponents, cardsRef };
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
.glacier-info--container {
  margin-top: 2rem;
  width: 100vw;
  z-index: 1;
}
</style>
