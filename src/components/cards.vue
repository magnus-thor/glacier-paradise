<template>
  <div class="cards">
    <Card
      :image="{ src: snowCatTour.imageSrc, alt: snowCatTour.imageAlt }"
      :card="{ header: snowCatTour.cardHeader, text: snowCatTour.cardText }"
      :link="{ text: snowCatTour.linkText, href: snowCatTour.linkHref }"
      :info="{ duration: '2-3', departure: 'Arnarstapi' }"
    />
    <Card
      :image="{ src: snowCatTour.imageSrc, alt: snowCatTour.imageAlt }"
      :card="{ header: snowCatTour.cardHeader, text: snowCatTour.cardText }"
      :link="{ text: snowCatTour.linkText, href: snowCatTour.linkHref }"
      :info="{ duration: '2-3', departure: 'Arnarstapi' }"
    />
    <Card
      :image="{ src: snowCatTour.imageSrc, alt: snowCatTour.imageAlt }"
      :card="{ header: snowCatTour.cardHeader, text: snowCatTour.cardText }"
      :link="{ text: snowCatTour.linkText, href: snowCatTour.linkHref }"
      :info="{ duration: '2-3', departure: 'Arnarstapi' }"
    />
    <Card
      :image="{ src: snowCatTour.imageSrc, alt: snowCatTour.imageAlt }"
      :card="{ header: snowCatTour.cardHeader, text: snowCatTour.cardText }"
      :link="{ text: snowCatTour.linkText, href: snowCatTour.linkHref }"
      :info="{ duration: '2-3', departure: 'Arnarstapi' }"
    />
  </div>
</template>

<script>
import Card from "@/components/card.vue";

export default {
  name: "cards",
  components: { Card },
  data() {
    return {
      snowCatTour: {
        imageSrc:
          "../assets/images/Sunset-from-the-top-of-Snaefellsjokull-1-2.jpg",
        imageAlt: this.$t("cards.snowCatTour.imageAlt"),
        cardHeader: this.$t("cards.snowCatTour.cardHeader"),
        cardText: this.$t("cards.snowCatTour.cardText"),
        linkText: this.$t("cards.snowCatTour.linkText"),
        linkHref: "#",
      },
    };
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
