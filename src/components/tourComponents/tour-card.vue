<template>
  <div class="card">
    <div class="card__wrapper">
      <div class="card__image"></div>
      <div class="card__content">
        <h2>{{ card.header }}</h2>
        <p>{{ card.text }}</p>
        <div class="card__info">
          <div>
            <p>
              <strong>Duration:</strong>
            </p>
            <p>
              <strong>{{ info.duration }}</strong>
            </p>
          </div>
          <div>
            <p>
              <strong>Departure:</strong>
            </p>
            <p>
              <strong>{{ info.departure }}</strong>
            </p>
          </div>
        </div>
        <nav class="nav__link">
          <router-link :to="link.href">{{ $t(link.text) }}</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CardText, CardLink, CardInfo } from "@/interfaces/props";
import { PropType } from "vue";

const props = defineProps({
  image: {
    required: true,
    type: String,
    default: "",
  },
  card: {
    required: true,
    type: Object as PropType<CardText>,
  },
  link: {
    required: true,
    type: Object as PropType<CardLink>,
  },
  info: {
    required: true,
    type: Object as PropType<CardInfo>,
  },
  cardIndex: Number,
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.card {
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  @media screen and (min-width: $small_screen) {
    height: 20rem;
    width: 35rem;
  }
  // border: 1px solid black;
  // border-radius: 4%;

  h2 {
    font-size: 18px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 14px;
  }
}

$card-height-lg-screen: 18rem;

.card__wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media screen and (min-width: $small_screen) {
    flex-direction: row;
  }
}

.card__image {
  width: 90%;
  background-image: v-bind("props.image");
  background-repeat: round;
  box-sizing: border-box;

  @media screen and (max-width: $small_screen) {
    height: 15rem;
  }

  @media screen and (min-width: $small_screen) {
    width: 20rem;
    height: $card-height-lg-screen;
    border-start-start-radius: 5%;
    border-end-start-radius: 5%;
  }
}

.card__content {
  width: 90%;
  background: white;
  padding: 1rem;
  box-sizing: border-box;

  @media screen and (min-width: $small_screen) {
    width: 20rem;
    height: $card-height-lg-screen;
    border-start-end-radius: 6%;
    border-end-end-radius: 6%;
  }

  .card__info {
    margin-top: 1rem;
    display: flex;
    justify-content: space-evenly;
  }
}

.nav__link {
  margin-top: 0.6rem;
  text-align: center;
}
</style>
