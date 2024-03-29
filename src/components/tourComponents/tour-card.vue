<template>
  <div class="card">
    <div class="card__wrapper">
      <TwicImg class="card__image" :src="getImageSrc" :alt="$t(imageAlt)" />
      <div class="card__content">
        <h2>{{ card.header }}</h2>
        <p>{{ card.text }}</p>
        <nav class="nav__link">
          <router-link :to="link.href">{{ $t(link.text) }}</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CardText, CardLink, CardInfo } from "@/interfaces/props";
import { computed, PropType } from "vue";

const props = defineProps({
  imageSrc: {
    required: true,
    type: String,
    default: "",
  },
  imageAlt: { type: String, required: true },
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

const reverseFlow = computed(() => {
  return props.cardIndex % 2 !== 0;
});

const getImageSrc = computed(() => {
  return props.imageSrc.replace("/images/", "");
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.card {
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  @include for-tablet-portrait-up {
    height: 20rem;
    width: 35rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 18px;
    color: $card_header_color;
  }

  p {
    font-size: 15px;
    color: black;
  }
}

$card-height-lg-screen: 20rem;

.card__wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @include for-tablet-portrait-up {
    flex-direction: row;

    &.row-reverse {
      flex-direction: row-reverse;
    }
  }
}

.card__image {
  width: 90%;
  // height: 100%;

  box-sizing: border-box;
  --twic-ratio: calc(4 / 3);

  @include for-tablet-portrait-down {
    // height: 15rem;
  }

  @include for-tablet-portrait-up {
    width: 80%;
    height: $card-height-lg-screen;
    border-start-start-radius: 25%;
    --twic-ratio: unset;
  }
}

.card__content {
  display: grid;
  grid-template-columns: 1fr;
  width: 90%;
  background-color: $dark_grey;
  @include gold-bg-gradient(40deg);
  padding: 1rem;
  box-sizing: border-box;

  @include for-tablet-portrait-up {
    width: 20rem;
    height: $card-height-lg-screen;
    border-end-end-radius: 25%;
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
  align-self: self-end;
  font-weight: bold;

  a {
    color: $card_link_color;

    &:hover {
      color: $card_link_color__hover;
    }
  }
}
</style>
