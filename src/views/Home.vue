<template>
  <div class="page">
    <div class="home">
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
  background-image: url(images/trodarinn-a-toppnum.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
}

.full {
  min-height: 100vh;
  padding-top: 5rem;
}

.home {
  display: grid;
  grid-template-columns: 1fr;
  // padding-top: 3rem;
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
  width: 100%;
}
</style>
