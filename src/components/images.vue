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
        src: "public/images/fra-breiduvik.jpg",
        alt: "fra-breiduvik",
      },
      {
        src: "public/images/solsetur.jpg",
        alt: "solsetur",
      },
      {
        src: "public/images/hvitur-jokull-blar-himinn.jpg",
        alt: "hvitur-jokull-blar-himinn",
      },
      {
        src: "public/images/jokull-upp-med-stapafelli.jpg",
        alt: "jokull-upp-med-stapafelli",
      },
      {
        src: "public/images/solsetur.jpg",
        alt: "solsetur",
      },
      {
        src: "public/images/toppurinn.jpg",
        alt: "toppurinn",
      },
      {
        src: "public/images/trodarinn-a-toppnum.jpg",
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
  width: auto;
}

.imageSwiper {
  display: flex;
  justify-content: center;
}
</style>
