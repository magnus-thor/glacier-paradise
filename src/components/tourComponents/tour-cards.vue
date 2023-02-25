<template>
  <div class="cards--container">
    <div class="cards">
      <template v-for="(card, index) in allTourCards">
        <card
          :image="`url(${card.imageSrc})`"
          :card="{ header: $t(card.cardHeader), text: $t(card.cardText) }"
          :link="{ text: $t(card.linkText), href: card.linkHref }"
          :info="{ duration: card.duration, departure: card.departure }"
          :cardIndex="index"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { tourCards } from "@/assets/tours-info/tour-cards-info";
import Card from "@/components/tourComponents/tour-card.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "cards",
  components: { Card },
  setup() {
    const allTourCards = ref(tourCards);
    return { allTourCards };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.cards--container {
  margin-top: 2rem;
}

.cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
