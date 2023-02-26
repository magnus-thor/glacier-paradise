<template>
  <div class="cards">
    <template v-for="(card, index) in allCards">
      <card
        :image="{ src: card.imageSrc, alt: $t(card.imageAlt) }"
        :card="{
          header: $t(card.cardHeader),
          text: $t(card.cardText),
          additionalText: $t(card.cardAdditionalText),
        }"
        :link="{ text: $t(card.linkText), href: card.linkHref }"
        :cardIndex="index"
      >
        <slot v-if="index == 2">
          <p>
            <a
              href="https://www.airbnb.com/rooms/17494078?adults=3&check_in=2023-04-17&check_out=2023-04-19&federated_search_id=a177861e-6862-4499-ab90-0bd2045a2195&source_impression_id=p3_1677417875_6lw21c%2FH2vQJH10H&fbclid=IwAR3Q02occ30Hwn50FZcTAFkWAxxFwARVhRmWct5q5llAa6E7VtIlBoWD7C0"
              >Airbnb</a
            >
            ({{ $t("home.tours.cabin.airbnb.before") }} 1. 2023)
          </p>
          <p>
            <a
              href="https://www.airbnb.com/rooms/806308046534973154?adults=3&check_in=2023-09-07&check_out=2023-09-09&federated_search_id=f9a5d80d-c13b-4711-9426-35098dd222cf&source_impression_id=p3_1677417924_fAlzO0bo2tdu1lUK&fbclid=IwAR0pkcm-p2rMY03bvNX18_x4hMixbJdBah6HJD95H7JoEwrkz9EvnoqavpU"
              >Airbnb</a
            >
            ({{ $t("home.tours.cabin.airbnb.before") }} 30. 2023)
          </p>
        </slot>
      </card>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { cardsInfo } from "@/assets/tours-info/home-cards-info";
import Card from "./card.vue";

export default defineComponent({
  name: "cards",
  components: { Card },
  setup() {
    const allCards = ref(cardsInfo);
    return { allCards };
  },
});
</script>

<style lang="scss" scoped>
.cards {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
