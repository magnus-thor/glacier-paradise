<template>
  <swiper
    class="imageSlider"
    :modules="modules"
    :space-between="20"
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: 7000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    }"
  >
    <swiper-slide
      class="imageSwiper"
      v-if="images.length"
      v-for="image in images"
      :key="image.alt"
      ><img :src="image.src" :alt="image.alt"
    /></swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default defineComponent({
  name: "images",
  components: { Swiper, SwiperSlide },
  setup() {
    let loadImages = ref([
      {
        src: "/images/fra-breiduvik.jpg",
        alt: "fra-breiduvik",
      },
      {
        src: "/images/solsetur.jpg",
        alt: "solsetur",
      },
      {
        src: "/images/hvitur-jokull-blar-himinn.jpg",
        alt: "hvitur-jokull-blar-himinn",
      },
      {
        src: "/images/jokull-upp-med-stapafelli.jpg",
        alt: "jokull-upp-med-stapafelli",
      },
      {
        src: "/images/solsetur.jpg",
        alt: "solsetur",
      },
      {
        src: "/images/toppurinn.jpg",
        alt: "toppurinn",
      },
      {
        src: "/images/trodarinn-a-toppnum.jpg",
        alt: "trodarinn-a-toppnum",
      },
    ]);

    // const onSwiper = (swiper) => {};
    // const onSlideChange = () => {};

    const images = computed(() => {
      return loadImages.value;
    });
    return {
      images,
      modules: [Autoplay, Pagination],
    };
  },
});
</script>

<style lang="scss" scoped>
.imageSlider {
  margin: auto;
  height: 30rem;
  width: 100%;
}

.imageSwiper {
  display: flex;
  margin: 0;

  img {
    object-fit: contain;
    margin: 0;
    width: 100%;
  }

  @media screen and (min-width: 760px) {
    justify-content: center;
  }
}
</style>
