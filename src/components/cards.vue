<template>
  <div class="cards">
    <template v-for="(tour, index) in fTour">
      <Card
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
import Card from "@/components/card.vue";
import { defineComponent, ref } from "vue";
import { tours } from "@/assets/tours/tours";

export default defineComponent({
  name: "cards",
  components: { Card },
  setup() {
    const allTours = ref(tours);
    const fTour = [allTours.value[0]];
    console.log("fTour", fTour);
    return { fTour };
  },
});
</script>

<style lang="scss" scoped>
.cards {
  margin-top: 2rem;
  width: 100%;
  height: 40rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  // background-color: white;
  row-gap: 1.5rem;
  margin-bottom: 1rem;
}
</style>
