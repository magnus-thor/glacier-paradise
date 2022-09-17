<template>
  <div class="home">
    <ImageSlider />
    <div class="cards">
      <Card
        :image="{ src: snowCatTour.imageSrc, alt: snowCatTour.imageAlt }"
        :card="{ header: snowCatTour.cardHeader, text: snowCatTour.cardText }"
        :link="{ text: snowCatTour.linkText, href: snowCatTour.linkHref }"
        :info="{ duration: '2-3', departure: 'Arnarstapi' }"
      />
    </div>
    <div class="videos">
      <YoutubeVideos />
    </div>
  </div>
</template>
<script>
import YoutubeVideos from "@/components/youtubeVideos.vue";
import ImageSlider from "../components/imageSlider.vue";
import Card from "@/components/card.vue";

export default {
  name: "Home",
  components: { YoutubeVideos, ImageSlider, Card },
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
.home {
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 3rem;
  padding-bottom: 3rem;
  justify-items: center;
}

.videos,
.cards {
  margin-top: 2rem;
}
</style>
