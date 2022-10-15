<template>
  <div class="page">
    <div class="home">
      <ScrollingBgImage />
      <div class="full"></div>
      <!-- <Instagram /> -->
      <div ref="scrollRef" class="glacier-info--container">
        <GlacierInfo v-if="loadComponents" />
      </div>
      <div class="cards--container">
        <Cards v-if="loadComponents" />
      </div>
      <!-- <div class="videos--container"> -->
      <!-- <YoutubeVideos /> -->
      <!-- </div> -->
    </div>
  </div>
</template>
<script lang="ts">
import GlacierInfo from "@/components/glacier-info.vue";
import Cards from "@/components/cards.vue";
// import YoutubeVideos from "@/components / youtubeVideos.vue";
// import ImageSlider from "@/components/imageSlider.vue";
import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue";
// import Instagram from "@/components/instagram.vue";
import { onIntersect } from "@/composables/onIntersect";
import ScrollingBgImage from "@/components/scrolling-bg-image.vue";

// : defineAsyncComponent(
//       () => import("@/components/glacier-info.vue")
//     )
// : defineAsyncComponent(() => import("@/components/cards.vue"))

export default defineComponent({
  name: "HomeComponent",
  components: {
    // YoutubeVideos,
    // ImageSlider,
    Cards,
    GlacierInfo,
    ScrollingBgImage
  },
  setup() {

    const loadComponents = ref(false);

    const onEnter = () => {
      loadComponents.value = true;
    };

    const onExit = () => { };

    const options = { capture: true };
    onBeforeUnmount(() => {
      // observer.value = onIntersect(scrollRef.value, onEnter, onExit, false);
    });

    return { loadComponents };
  },
});
</script>
<style lang="scss" scoped>
.page {
  overflow: hidden;
  position: relative;
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
  // margin-bottom: 6rem;
  width: 100vw;
  z-index: 1;
}
</style>
