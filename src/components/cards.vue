<template>
  <div class="cards">
    <template v-for="(tour, index) in allTours">
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

    return { allTours };
  },
});
</script>

<style lang="scss" scoped>
.cards {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: white;
}
</style>
