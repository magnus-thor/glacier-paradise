<template>
  <div :class="['tour', { 'row-reverse': reverseFlow }]">
    <div class="tour--image">
      <img :src="image.src" :alt="image.alt" />
    </div>
    <div class="tour--text">
      <h3>tour header</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        fugit quam sit aliquid odit sint ducimus ratione eligendi, quae adipisci
        quasi, aliquam saepe praesentium voluptatibus cumque similique eum
        perspiciatis. Molestias?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        fugit quam sit aliquid odit sint ducimus ratione eligendi, quae adipisci
        quasi, aliquam saepe praesentium voluptatibus cumque similique eum
        perspiciatis. Molestias?
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { CardImage, CardText, CardLink, CardInfo } from "@/types/props";
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  name: "tour",
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
    const reverseFlow = computed(() => {
      return props.cardIndex % 2 !== 0;
    });

    return { reverseFlow };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.tour {
  padding: 1rem;
  // height: 25rem;
  width: 100%;
  // transform: skew(0deg, -1deg);
  // transform: rotate3d(0, 0, 10, 15deg);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  border-radius: 5px;

  .tour--image {
    height: 10rem;
    width: 70%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  // .tour--image,
  // .tour--text {
  //   transform: skew(0deg, -1deg);
  // }

  @media screen and (min-width: $small_screen) {
    height: 20rem;
    flex-direction: row;
    max-width: 1024px;

    &.row-reverse {
      // transform: skew(0deg, 1deg);
      flex-direction: row-reverse;

      // .tour--text,
      // .tour--image {
      //   transform: skew(0deg, -1deg);
      // }
    }

    .tour--text {
      padding: 1rem;
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .tour--image {
      height: 80%;
      width: 40%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
