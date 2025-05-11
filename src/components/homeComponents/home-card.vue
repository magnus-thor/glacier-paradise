<template>
  <div :class="[
    'tour',
    { 'row-reverse': reverseFlow },
    { 'custom-tours': cardIndex === 2 },
    { cabin: cardIndex === 3 },
    { buggy: cardIndex === 4 },
  ]">
    <div :class="['tour--image', { 'border-reverse': reverseFlow }]">
      <TwicImg class="twic-image" :src="getImageSrc" :alt="image.alt" />
      <div v-if="isNew" class="new-label">New</div>
    </div>
    <div :class="[
      'tour--text',
      { 'border-reverse': reverseFlow },
      { gradient0: cardIndex === 0 },
      { gradient1: cardIndex === 1 },
      { gradient2: cardIndex === 2 },
      { gradient3: cardIndex === 3 },
      { gradient4: cardIndex === 4 },
    ]">
      <h3>{{ card.header }}</h3>
      <p>{{ card.text }}</p>
      <p v-if="card.additionalText || link.href" class="additional">
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
    isNew: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const reverseFlow = computed(() => {
      return props.cardIndex % 2 !== 0;
    });

    const getImageSrc = computed(() => {
      return props.image.src.replace("images/", "");
    });

    return { reverseFlow, getImageSrc };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.tour {
  width: 100%;
  display: flex;
  flex-direction: column;

  +.tour {
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

    +p {
      padding-top: 0;
    }
  }

  .additional {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
  }

  .tour--image {
    width: 94%;
    margin: auto;
    margin-bottom: 0.4rem;
    position: relative;

    .twic-image {
      width: 100%;
      --twic-ratio: 2;
      border-radius: 0 25% 0 0;
    }

    .new-label {
      position: absolute;
      top: 30px;
      left: -15px;
      /* Default position for small screens */
      background: linear-gradient(to bottom, #ff5a5f, #e63946);
      color: white;
      font-weight: bold;
      padding: 0.3rem 0;
      width: 60px;
      font-size: 0.7rem;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
      transform-origin: top left;
      transform: rotate(-45deg);
      z-index: 1;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: center;
      animation: pulse 2s infinite;
      border: 1px solid rgba(255, 255, 255, 0.3);
      overflow: hidden;
      border-top-left-radius: 40%;
      border-top-right-radius: 40%;
      border-bottom-left-radius: 10%;
      border-bottom-right-radius: 12%;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 100%;
        width: 10px;
        height: 0;
        border-style: solid;
        border-width: 0 0 10px 10px;
        border-color: transparent transparent #b52c37 transparent;
        z-index: -1;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 0;
        width: 0;
        height: 10px;
        border-style: solid;
        border-width: 10px 10px 0 0;
        border-color: transparent #b52c37 transparent transparent;
        z-index: -1;
      }

      @keyframes pulse {
        0% {
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
        }

        50% {
          box-shadow: 0 3px 15px rgba(230, 57, 70, 0.8);
        }

        100% {
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
        }
      }
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

    &.gradient4 {
      @include gold-bg-gradient(20deg);
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
      display: flex;

      .twic-image {
        --twic-ratio: 1;
        border-radius: 25% 0;
        flex: 1;
      }

      /* For large screens, position the label on the right for even cards */
      .new-label {
        left: auto;
        right: -15px;
        transform-origin: top right;
        transform: rotate(45deg);

        &::before {
          right: 100%;
          left: auto;
          border-width: 0 0 10px 10px;
          border-color: transparent transparent #b52c37 transparent;
        }

        &::after {
          bottom: 100%;
          left: 0;
          right: auto;
          border-width: 10px 10px 0 0;
          border-color: transparent #b52c37 transparent transparent;
        }
      }

      &.border-reverse {
        .twic-image {
          border-radius: 0 25%;
        }

        .new-label {
          left: -15px;
          right: auto;
          top: 30px;
          transform-origin: top left;
          transform: rotate(-45deg);
          background: linear-gradient(to bottom, #ff5a5f, #e63946);
          border-top-left-radius: 40%;
          border-top-right-radius: 40%;
          border-bottom-left-radius: 10%;
          border-bottom-right-radius: 12%;

          &::before {
            right: auto;
            left: 100%;
            border-width: 0 10px 10px 0;
            border-color: transparent transparent #b52c37 transparent;
          }

          &::after {
            bottom: 100%;
            left: auto;
            right: 0;
            border-width: 10px 0 0 10px;
            border-color: transparent transparent transparent #b52c37;
          }
        }
      }
    }

    &.custom-tours {
      max-height: 22rem;
    }


    .router-link {
      margin-bottom: 0;
    }
  }
}
</style>
