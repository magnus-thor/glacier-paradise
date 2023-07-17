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
    <div
      :class="[
        'tour--text',
        { 'border-reverse': reverseFlow },
        { gradient0: cardIndex === 0 },
        { gradient1: cardIndex === 1 },
        { gradient2: cardIndex === 2 },
        { gradient3: cardIndex === 3 },
      ]"
    >
      <h3>{{ card.header }}</h3>
      <p>{{ card.text }}</p>
      <p>
        <span v-if="card.additionalText">{{ card.additionalText }} </span>
        <router-link v-if="link.href" class="router-link" :to="link.href">
          {{ link.text ? link.text : $t("shared.links.readMore") }}
        </router-link>
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { TourImage, TourCardText, TourLink } from "@/interfaces/props";
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  name: "homeCard",
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
    border-bottom: 4px solid $blue;
    color: $card_header_color;
  }

  p {
    padding: 1rem;
    color: $card_text_color;

    + p {
      padding-top: 0;
    }
  }

  .tour--image {
    height: 20rem;
    width: 94%;
    margin: auto;
    margin-bottom: 0.4rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 0 25% 0 0;
    }
  }

  .tour--text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: $dark_grey;

    &.gradient0 {
      @include gold-bg-gradient(20deg);
    }
    &.gradient1 {
      @include gold-bg-gradient;
    }

    &.gradient2 {
      @include gold-bg-gradient(20deg);
    }
    &.gradient3 {
      @include gold-bg-gradient;
    }

    margin-left: 3%;
    margin-right: 3%;
    border-radius: 0 0 0 25%;
  }

  .router-link {
    color: $card_link_color;
    font-weight: bold;
    margin-bottom: 1rem;
    justify-self: flex-end;

    &:hover {
      color: $card_link_color__hover;
    }
  }

  @include for-tablet-landscape-up {
    flex-direction: row;
    max-width: 1024px;

    &.row-reverse {
      flex-direction: row-reverse;
    }

    .tour--text {
      padding: 1rem;
      width: 60%;
      border-radius: 0% 25%;
      margin-right: 0;
      margin-left: 2%;

      &.border-reverse {
        border-radius: 25% 0%;
        margin-right: 2%;
        margin-left: 0;
      }
    }

    .tour--image {
      height: auto;
      width: 40%;
      margin: 0;

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

    // &.cabin {
    //   max-height: 18rem;
    // }

    .router-link {
      margin-bottom: 0;
    }
  }
}
</style>
