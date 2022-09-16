<template>
  <div>
    <ImageSlider />
    <YoutubeVideos />
  </div>
</template>
<script>
import YoutubeVideos from "@/components/youtubeVideos.vue";
import ImageSlider from "../components/imageSlider.vue";

export default {
  name: "Home",
  components: { YoutubeVideos, ImageSlider },
};
</script>
<style lang="scss" scoped>
div {
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 3rem;
  padding-bottom: 3rem;
  justify-items: center;
}
</style>
