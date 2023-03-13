<template>
  <div class="cards">
    <template v-for="(card, index) in allCards">
      <home-card
        :image="{ src: card.imageSrc, alt: $t(card.imageAlt) }"
        :card="{
          header: $t(card.cardHeader),
          text: $t(card.cardText),
          additionalText: $t(card.cardAdditionalText),
        }"
        :link="{ text: $t(card.linkText), href: card.linkHref }"
        :cardIndex="index"
      >
        <slot v-if="index == 3">
          <p class="nav__link">
            <a
              href="https://www.airbnb.com/rooms/17494078?adults=3&check_in=2023-04-17&check_out=2023-04-19&federated_search_id=a177861e-6862-4499-ab90-0bd2045a2195&source_impression_id=p3_1677417875_6lw21c%2FH2vQJH10H&fbclid=IwAR3Q02occ30Hwn50FZcTAFkWAxxFwARVhRmWct5q5llAa6E7VtIlBoWD7C0"
              >Airbnb</a
            >
            ({{ $t("home.tours.cabin.airbnb.after") }} 1. 2023)
          </p>
          <p class="nav__link">
            <a
              href="https://www.airbnb.com/rooms/806308046534973154?adults=3&check_in=2023-09-07&check_out=2023-09-09&federated_search_id=f9a5d80d-c13b-4711-9426-35098dd222cf&source_impression_id=p3_1677417924_fAlzO0bo2tdu1lUK&fbclid=IwAR0pkcm-p2rMY03bvNX18_x4hMixbJdBah6HJD95H7JoEwrkz9EvnoqavpU"
              >Airbnb
            </a>
            ({{ $t("home.tours.cabin.airbnb.before") }} 30. 2023)
          </p>
        </slot>
      </home-card>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { cardsInfo } from "@/assets/tours-info/home-cards-info";
import HomeCard from "./home-card.vue";

export default defineComponent({
  name: "homeCards",
  components: { HomeCard },
  setup() {
    const allCards = ref(cardsInfo);
    return { allCards };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/mixins.scss";

.cards {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: -1;
}

.nav__link {
  margin-top: 0.6rem;

  a {
    color: $card_link_color;
  }

  @include for-tablet-landscape-down {
    + .nav__link {
      margin-bottom: 3.5rem;
    }
  }
}
</style>
