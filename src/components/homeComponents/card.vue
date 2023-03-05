<template>
  <div :class="['tour', { 'row-reverse': reverseFlow }]">
    <div class="tour--image">
      <img :src="image.src" :alt="image.alt" />
    </div>
    <div class="tour--text">
      <h3>{{ card.header }}</h3>
      <p>
        {{ card.text }}
      </p>
      <p v-if="card.additionalText">
        {{ card.additionalText }}
      </p>
      <router-link v-if="link.href" class="router-link" :to="link.href">{{
        link.text ? link.text : $t("links.linkText")
      }}</router-link>

      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { TourImage, TourCardText, TourLink } from "@/interfaces/props";
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  name: "card",
  props: {
    image: {
      required: true,
      type: Object as PropType<TourImage>,
    },
    card: {
      required: true,
      type: Object as PropType<TourCardText>,
    },
    link: {
      required: true,
      type: Object as PropType<TourLink>,
    },
    cardIndex: Number,
  },
  setup(props) {
    const reverseFlow = computed(() => {
      return props.cardIndex % 2 === 0;
    });

    return { reverseFlow };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";
@import "@/assets/mixins.scss";

.tour {
  padding: 1rem;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  border-radius: 5px;

  + .tour {
    margin-top: 3rem;
  }

  h3 {
    text-align: center;
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    border-bottom: 4px solid $blue;
  }

  p {
    padding: 2rem;

    + p {
      padding-top: 0;
    }
  }

  .tour--image {
    height: 10rem;
    width: 70%;
    padding-right: 1rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .tour--text {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .router-link {
    color: $blue;
    font-weight: bold;
    text-decoration: none;
  }

  @include for-tablet-portrait-up {
    height: max-content;
    flex-direction: row;
    max-width: 1024px;

    &.row-reverse {
      flex-direction: row-reverse;
    }

    .tour--text {
      padding: 1rem;
      width: 60%;
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
