<template>
  <div class="cards">
    <div>
      <Card
        :image="{ src: snowCatTour.imageSrc, alt: snowCatTour.imageAlt }"
        :card="{ header: snowCatTour.cardHeader, text: snowCatTour.cardText }"
        :link="{ text: snowCatTour.linkText, href: snowCatTour.linkHref }"
        :info="{ duration: '2-3', departure: 'Arnarstapi' }"
        cardIndex="1"
      />
    </div>
    <div>
      <Card
        :image="{ src: someOtherTour.imageSrc, alt: someOtherTour.imageAlt }"
        :card="{
          header: someOtherTour.cardHeader,
          text: someOtherTour.cardText,
        }"
        :link="{ text: someOtherTour.linkText, href: someOtherTour.linkHref }"
        :info="{ duration: '2-3', departure: 'Arnarstapi' }"
        cardIndex="2"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/card.vue";

export default {
  name: "cards",
  components: { Card },
  data() {
    return {};
  },
  computed: {
    snowCatTour() {
      return {
        imageSrc: new URL(
          "/assets/images/Sunset-from-the-top-of-Snaefellsjokull-1-2.jpg",
          import.meta.url
        ),
        imageAlt: this.$t("cards.snowCatTour.imageAlt"),
        cardHeader: this.$t("cards.snowCatTour.cardHeader"),
        cardText: this.$t("cards.snowCatTour.cardText"),
        linkText: this.$t("cards.snowCatTour.linkText"),
        linkHref: "#",
      };
    },
    someOtherTour() {
      return {
        imageSrc: new URL(
          "/assets/images/trodarinn-a-toppnum.jpg",
          import.meta.url
        ),
        imageAlt: this.$t("cards.snowCatTour.imageAlt"),
        cardHeader: this.$t("cards.snowCatTour.cardHeader"),
        cardText: this.$t("cards.snowCatTour.cardText"),
        linkText: this.$t("cards.snowCatTour.linkText"),
        linkHref: "#",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
