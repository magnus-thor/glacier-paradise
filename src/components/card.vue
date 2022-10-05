<template>
  <div
    @mouseenter="displayCardContent = true"
    @mouseleave="displayCardContent = false"
    class="card"
    :style="`background-image: url(${image.src}) `"
  >
    <div class="card__info">
      <h2 class="card__header">{{ card.header }}</h2>
      <transition name="imageFade" mode="out-in">
        <div v-if="displayCardContent" class="info--item card__duration">
          <div class="icon">
            <v-icon name="io-time-outline" scale="2" />
          </div>
          <div>
            <p>
              <strong>{{ $t("cards.shared.duration") }}</strong>
            </p>
            <p>{{ info.duration }} {{ $t("cards.shared.hours") }}</p>
          </div>
        </div>
      </transition>
      <transition name="imageFade" mode="out-in">
        <div v-if="displayCardContent" class="info--item card__departure">
          <div class="icon">
            <v-icon name="fa-bus" scale="2" />
          </div>
          <div>
            <p>
              <strong>{{ $t("cards.shared.departure") }}</strong>
            </p>
            <p>{{ info.departure }}</p>
          </div>
        </div>
      </transition>
      <transition name="imageFade" mode="out-in">
        <div v-if="displayCardContent" class="card__link">
          <a href="#">Read more</a>
          <!-- <a>TODO swap for router-link tag</a> /* -->
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from "vue";
import { CardImage, CardInfo, CardLink, CardText } from "@/types/props";

export default defineComponent({
  name: "card",
  props: {
    image: {
      required: true,
      type: Object as PropType<CardImage>,
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
  },
  setup(props) {
    const displayCardContent = ref(false);

    return { displayCardContent };
  },
});
</script>

<style lang="scss" scoped>
.card {
  width: 26rem;
  height: 20rem;
  border: 1px inset grey;
  box-shadow: 5px 5px grey;
  border-radius: 2%;
  background-size: cover;
  padding: 1rem;

  &__info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: repeat(10, 2rem);
    padding: 1rem;
  }

  h2 {
    // padding-bottom: 1rem;
  }

  // .margin-left-right {
  //   margin-left: 1rem;
  //   margin-right: 1rem;
  // }

  .card__header {
    grid-row: 0 / 3;
    grid-column: 1 / 4;
    // grid-area: cardHeader;
    // margin-bottom: 1rem;
  }

  .card__departure {
    grid-row: 4 / 7;
    grid-column: 1 / 2;
  }

  .card__duration {
    grid-row: 4 / 7;
    grid-column: 3 / 4;
  }

  .card__link {
    grid-row: 10 / 10;
    grid-column: 2 / 3;

    justify-self: center;
  }

  strong {
    font-weight: bold;
  }

  &--item {
    display: flex;
    align-items: center;

    p {
      margin: 0;
    }
  }

  .icon {
    margin-right: 0.5rem;
  }

  // .card--header {
  //   margin-top: 1rem;
  // }

  // .bottom-border {
  //   padding-bottom: 0.5rem;
  //   border-bottom: 1px inset grey; //TODO: swap to correct colors.
  // }

  // .link {
  //   height: 3rem;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   text-decoration: none;

  //   &:hover {
  //     background-color: green; //TODO: swap to correct colors.
  //     cursor: pointer;
  //   }
  // }
}

.imageFade-enter-active,
.imageFade-leave-active {
  transition: opacity 0.5s ease;
}

.imageFade-enter-from,
.imageFade-leave-to {
  opacity: 0;
}
</style>
