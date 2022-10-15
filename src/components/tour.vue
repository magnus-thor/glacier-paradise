<template>
  <div :class="['tour', { 'row-reverse': reverseFlow }]">
    <div class="tour--image">
      <img :src="image.src" :alt="image.alt" />
    </div>
    <div class="tour--text">
      <h3>Top of the Diamond tour</h3>
      <p>
        Here we will hop on our vehicle and make our way to the foot of the glacier. Alternatively, you can follow our
        bus in your own car, if it is suitable for F-roads, as we drive a mountain pass along the side of the glacier.
        This gravel and bumpy F road offer spectacular views of the glacier and the surrounding area and it is a great
        part of this adventure. Therefor we do advise customers to start the journey with the bus so they can enjoy the
        scenery along the way.
      </p>
      <p>
        Up on arrival it is time for the real fun to begin. We get on board the snow-cat to start our ascent to the top
        of the glacier, or as close to it as possible. The snow-cats used for the tour are specially equipped so
        travellers can enjoy the scenery along the way.
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

  h3 {
    text-align: center;
  }

  p {
    padding: 2rem;
  }

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
    height: max-content;
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
