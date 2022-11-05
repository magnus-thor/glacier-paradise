<template>
  <div class="tours">
    <template v-for="(tour, index) in allTours">
      <Tour
        :image="{ src: tour.imageSrc, alt: $t(tour.imageAlt) }"
        :card="{ header: $t(tour.cardHeader), text: $t(tour.cardText) }"
        :link="{ text: $t(tour.linkText), href: tour.linkHref }"
        :info="{ duration: tour.duration, departure: tour.departure }"
        :cardIndex="index"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { tours } from "@/assets/tours/tours-home-info";
import Tour from "./tour.vue";

export default defineComponent({
  name: "tours",
  components: { Tour },
  setup() {
    const allTours = ref(tours);
    return { allTours };
  },
});
</script>

<style lang="scss" scoped>
.tours {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
