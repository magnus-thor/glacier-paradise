<template>
  <div class="page">
    <div class="home">
      <scrolling-bg-image />
      <h1>Special sightseeing tours of Snæfellsjökull</h1>
      <div class="full"></div>
      <div class="glacier-info--container">
        <Suspense>
          <glacier-info />
          <template #fallback>
            <h1>TODO: create fallback skeleton</h1>
          </template>
        </Suspense>
      </div>
      <div ref="toursRef" id="tours" class="tours--container">
        <tours v-if="loadToursComponent" />
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
    Tours: defineAsyncComponent(
      () => import("@/components/homeComponents/tours.vue")
    ),
    GlacierInfo,
    ScrollingBgImage,
    Instagram,
  },
  setup() {
    const toursRef = ref<HTMLElement>(null);
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
        toursRef.value,
        onEnterToursComponent,
        onExitToursComponent
      );
    });

    return {
      loadToursComponent,
      loadInstagramComponent,
      toursRef,
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
.tours--container,
.instagram--container,
.glacier-info--container {
  margin-top: 3rem;
  margin-bottom: 2rem;
  width: 100vw;
  z-index: 1;
}
</style>
