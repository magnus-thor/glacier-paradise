<template>
  <div class="page">
    <div class="home">
      <div class="image--container">
        <div ref="scrollingImage" class="scrolling-bg-image"></div>
      </div>
      <div class="full"></div>
      <!-- <Instagram /> -->
      <div class="glacier-info--container">
        <GlacierInfo />
      </div>
      <div class="cards--container">
        <Cards />
      </div>
      <!-- <div class="videos--container"> -->
      <!-- <YoutubeVideos /> -->
      <!-- </div> -->
    </div>
  </div>
</template>
<script lang="ts">
import YoutubeVideos from "@/components/youtubeVideos.vue";
import ImageSlider from "@/components/imageSlider.vue";
import Cards from "@/components/cards.vue";
import { defineComponent, onUnmounted, ref } from "vue";
import GlacierInfo from "@/components/glacier-info.vue";
import Instagram from "@/components/instagram.vue";

export default defineComponent({
  name: "Home",
  components: { YoutubeVideos, ImageSlider, Cards, GlacierInfo, Instagram },
  setup() {
    const scrollingImage = ref<HTMLElement>();

    const options = { capture: true };
    let innerWidth = ref(window.innerWidth);
    const callBack = () => {
      innerWidth.value = window.innerWidth;
      scrollingImage.value.style.width = "6144px";
    };
    window.addEventListener("resize", callBack, options);
    onUnmounted(() => {
      window.removeEventListener("resize", callBack, options);
    });

    return { scrollingImage };
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

.mainImage {
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 80%;
    height: 100vh;
  }
}

.videos--container,
.cards--container,
.glacier-info--container {
  margin-top: 2rem;
  // margin-bottom: 6rem;
  width: 100vw;
  z-index: 1;
}

.image--container {
  position: absolute;
}

.scrolling-bg-image {
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(/images/iskyunum1_tinified.jpg);
  width: 5076px;
  height: 100vh;
  background-position: 0 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  animation: slide 70s linear;
  -webkit-animation: slide 70s linear;

  @media screen and (min-width: 1024px) {
    animation: slide 40s linear infinite;
    -webkit-animation: slide 40s linear infinite;
  }
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(calc(100vw - 100%), 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
