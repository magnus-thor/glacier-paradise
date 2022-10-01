<template>
  <div class="page">
    <div class="home">
      <div class="image-container">
        <div class="scrolling-bg-image"></div>
      </div>
      <!-- <ImageSlider /> -->
      <!-- <div class="mainImage">
        <img src="/images/trodarinn-a-toppnum.jpg" alt="trodarinn a toppnum" />
      </div> -->
      <div class="full">
        <h1>Glacier Paradise</h1>
      </div>
      <div class="cardsContainer">
        <Cards />
      </div>
      <!-- <div class="videos"> -->
      <!-- <YoutubeVideos /> -->
      <!-- </div> -->
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
.page {
  // background-image: url(/images/iskyunum3.jpg);
  // background-position: center center;
  // background-repeat: no-repeat;
  // background-attachment: fixed;
  // background-size: cover;
  // min-height: 100vh;
  overflow: hidden;
  position: relative;
}

.full {
  min-height: 100vh;
  padding-top: 5rem;
}

.home {
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 3rem;
  justify-items: center;
}

.mainImage {
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 80%;
    height: 100vh;
  }
}

.videos,
.cardsContainer {
  margin-top: 16rem;
  margin-bottom: 6rem;
  width: 100vw;
  z-index: 1;
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-1692px, 0, 0); /* The image width */
  }
}

.image-container {
  margin-top: -5rem;
  overflow: hidden;
  position: absolute;
}

.scrolling-bg-image {
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(/images/iskyunum3_tinified.jpg);
  width: 5076px;
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  animation: slide 60s linear infinite;
  // z-index: -5;
}
</style>
