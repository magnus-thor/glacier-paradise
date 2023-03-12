<template>
  <div
    :class="[
      'tour',
      { 'row-reverse': reverseFlow },
      { 'custom-tours': cardIndex === 2 },
      { cabin: cardIndex === 3 },
    ]"
  >
    <div :class="['tour--image', { 'border-reverse': reverseFlow }]">
      <img :src="image.src" :alt="image.alt" />
    </div>
    <div :class="['tour--text', { 'border-reverse': reverseFlow }]">
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
      return props.cardIndex % 2 !== 0;
    });

    return { reverseFlow };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";
@import "@/assets/mixins.scss";

.tour {
  width: 100%;
  display: flex;
  flex-direction: column;

  + .tour {
    margin-top: 5rem;
  }

  h3 {
    text-align: center;
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    border-bottom: 4px solid $grey;
    color: $card_header_color;
  }

  p {
    padding: 2rem;
    color: $card_text_color;

    + p {
      padding-top: 0;
    }
  }

  .tour--image {
    height: 16rem;
    width: 70%;
    padding-right: 1rem;
    padding-left: 1rem;

    @include for-tablet-landscape-down {
      margin: auto;
    }

    img {
      width: 100%;
      height: 100%;
      // object-fit: cover;
    }
  }

  .tour--text {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: $dark_grey;
  }

  .router-link {
    color: $card_link_color;
    font-weight: bold;

    &:hover {
      color: $card_link_color__hover;
    }
  }

  @include for-tablet-landscape-down {
    .tour--image {
      margin: auto;
      margin-bottom: 0.8rem;
    }

    .tour--text {
      padding: 1rem;
      // // width: 60%;
      // border-radius: 25% 25%;
      // margin-left: 1rem;
      // margin-right: 1rem;
    }
  }

  @include for-tablet-landscape-up {
    height: max-content;
    flex-direction: row;
    max-width: 1024px;

    &.row-reverse {
      flex-direction: row-reverse;
    }

    .tour--text {
      padding: 1rem;
      width: 60%;
      border-radius: 0% 25%;
      margin-right: 1rem;

      &.border-reverse {
        border-radius: 25% 0%;
        margin-right: 0;
        margin-left: 1rem;
      }
    }

    .tour--image {
      height: auto;
      width: 40%;
      img {
        border-radius: 25% 0;
      }

      &.border-reverse {
        img {
          border-radius: 0 25%;
        }
      }
    }

    &.custom-tours {
      max-height: 22rem;
    }

    &.cabin {
      max-height: 18rem;
    }
  }
}
</style>
