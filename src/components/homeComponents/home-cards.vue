<template>
  <div class="cards">
    <template v-for="(card, index) in allCards">
      <home-card :image="{ src: card.imageSrc, alt: $t(card.imageAlt) }" :card="{
        header: $t(card.cardHeader),
        text: $t(card.cardText),
        additionalText: $t(card.cardAdditionalText),
      }" :link="{ text: $t(card.linkText), href: card.linkHref }" :cardIndex="index" :isNew="card.isNew">
        <slot v-if="index == 4">
          <div class="airbnb-links">
            <a class="nav__link" href="https://www.airbnb.com/rooms/806308046534973154">{{
              $t("home.tours.cabin.cottage1") }}
            </a>
            <a class="nav__link" href="https://www.airbnb.co.uk/rooms/934605024384982028">
              {{ $t("home.tours.cabin.cottage2") }}
            </a>
          </div>
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
@import "@/assets/base.scss";

.cards {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: -1;
  margin-bottom: 5rem;
}

.nav__link {
  margin-top: 0.6rem;
  color: $blue;

  a {
    color: $card_link_color;
    font-weight: bold;
    padding: 0 0.5rem;

    &:hover {
      color: $card_link_color__hover;
    }
  }

  @include for-tablet-landscape-down {
    +.nav__link {
      margin-bottom: 3.5rem;
    }
  }
}

.airbnb-links {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
  padding-left: 1rem;

  a+a {
    margin-top: 0.8rem;
  }
}
</style>
