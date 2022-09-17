<template>
  <div class="home">
    <ImageSlider />
    <div class="cardsContainer">
      <Cards />
    </div>
    <div class="videos">
      <YoutubeVideos />
    </div>
  </div>
</template>
<script>
import YoutubeVideos from "@/components/youtubeVideos.vue";
import ImageSlider from "../components/imageSlider.vue";
import Cards from "@/components/cards.vue";

export default {
  name: "Home",
  components: { YoutubeVideos, ImageSlider, Cards },
  data() {
    return {};
  },
};
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
  margin-top: 2rem;
  width: 100%;
}
</style>
