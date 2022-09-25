<template>
  <div class="page">
    <div class="home">
      <ImageSlider />
      <div class="cardsContainer">
        <Cards />
      </div>
      <div class="videos">
        <!-- <YoutubeVideos /> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import YoutubeVideos from "@/components/youtubeVideos.vue";
import ImageSlider from "@/components/imageSlider.vue";
import Cards from "@/components/cards.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: { YoutubeVideos, ImageSlider, Cards },
});
</script>
<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 3rem;
  padding-bottom: 3rem;
  justify-items: center;
}

.videos,
.cardsContainer {
  margin-top: 16rem;
  width: 100%;
}
</style>
