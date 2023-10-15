<template>
  <div class="cards--container">
    <div class="cards">
      <template v-for="(card, index) in allTourCards">
        <card
          :imageSrc="card.imageSrc"
          :imageAlt="card.imageAlt"
          :card="{ header: $t(card.cardHeader), text: $t(card.cardText) }"
          :link="{ text: card.linkText, href: card.linkHref }"
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
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  @include for-tablet-portrait-down {
    .card {
      margin-bottom: 2rem;
    }
  }

  @include for-desktop-up {
    width: 95%;
    margin: auto;
    grid-template-columns: 1fr 1fr;
  }

  @include for-big-desktop-up {
    width: 70%;
    margin: auto;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
