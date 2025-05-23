<template>
  <div class="top-of-the-diamond-tour--container">
    <div class="image">
      <TwicImg class="twic-image" src="/toppur_panorama-resized.jpg" alt="" />
    </div>
    <div class="header--container">
      <h1>{{ $t("topOfTheDiamond.content.header") }}</h1>
      <button class="bokunButton primary sticky js-bokunButton" disabled id="bokun_b3447b9e_8bf3_4090_a58d_8b930ced9c1d"
        data-src="https://widgets.bokun.io/online-sales/a5fa0d8d-ffc2-431e-bece-86e5d8fa2d7c/experience-calendar/17979?partialView=1"
        data-testid="widget-book-button" @click="trackBookNow">
        {{ $t("shared.bokun.buttons.book") }}
      </button>
    </div>
    <div class="content--wrapper">
      <!-- TODO: add link to f-road explanation -->
      <p>{{ $t("topOfTheDiamond.content.p1") }}</p>
      <p>{{ $t("topOfTheDiamond.content.p2") }}</p>
      <p>{{ $t("topOfTheDiamond.content.p3") }}</p>
      <p>{{ $t("topOfTheDiamond.content.p4") }}</p>
      <h2 class="tour-info-header">Info</h2>
      <div class="tour-info">
        <div>
          <p>{{ $t("topOfTheDiamond.content.p5") }}</p>
          <p>{{ $t("topOfTheDiamond.content.p6") }}</p>
        </div>
        <div class="tour-info__guide">
          <div>
            <p>
              {{ $t("topOfTheDiamond.content.p7") }}
            </p>
            <button class="primary small" @click="openDialog">
              {{ $t("shared.links.readMore") }}
            </button>
          </div>
          <div class="certificates">
            <img src="/images/day-tour-license.jpg" alt="Day tour license" />
          </div>
        </div>
      </div>
    </div>
    <aside class="sidebar--container">
      <h2>{{ $t("topOfTheDiamond.sidebar.header") }}</h2>

      <p>{{ $t("topOfTheDiamond.sidebar.p1") }}</p>
      <div class="text__block">
        <p>
          {{ $t("topOfTheDiamond.sidebar.p2") }}
        </p>
        <p>
          {{ $t("topOfTheDiamond.sidebar.p3") }}
        </p>
      </div>
      <div class="text__block">
        <p>
          {{ $t("topOfTheDiamond.sidebar.p4") }}
        </p>
        <p>
          {{ $t("topOfTheDiamond.sidebar.p5") }}
        </p>
      </div>
    </aside>
  </div>
</template>

<script lang="ts">
import { IStore } from "@/interfaces/store";
import { defineComponent, inject, onBeforeMount } from "vue";

export default defineComponent({
  name: "snowCatTour",
  setup() {
    onBeforeMount(() => {
      const tag = document.createElement("script");
      tag.setAttribute(
        "src",
        "https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=a5fa0d8d-ffc2-431e-bece-86e5d8fa2d7c"
      );
      document.head.appendChild(tag);
    });

    const trackBookNow = () => {
      (window as any).beam("/custom-events/snow-cat-tour-book-now");
    };

    const Store: IStore = inject("Store");

    const openDialog = () => {
      Store.isDialogOpen = true;
      Store.currentDialog = "default";
      (window as any).beam("/custom-events/snow-cat-tour-read-more");
    };

    return { openDialog, trackBookNow };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.top-of-the-diamond-tour--container {
  display: grid;
  grid-template-columns: 1fr;

  .image {
    grid-area: 1/1/-1/-1;

    .twic-image {
      --twic-ratio: 3;
      height: 100%;
      width: 100%;
    }
  }

  .sticky {
    grid-area: 1/1/-1/-1;
    position: -webkit-sticky;
    position: sticky;
    top: 100px;
    z-index: 1;
  }

  h2 {
    color: $yellow;
  }

  p {
    color: $white;
  }

  .header--container {
    grid-area: 1/1/-1/-1;
    color: $white;
    padding-top: 1.5rem;
    padding-left: 2rem;
    z-index: 1;
  }

  .content--wrapper {
    margin-top: 1rem;
    grid-template-columns: 1fr;
    padding: 0.5rem 2rem;
    box-sizing: border-box;

    p+p {
      margin-top: 0.7rem;
    }

    .tour-info-header {
      margin-top: 1rem;
    }

    .tour-info {
      display: grid;
      grid-template-columns: 1fr;

      div {
        margin-right: 2rem;
      }

      p {
        font-weight: 600;
      }

      &__guide button {
        margin-top: 0.5rem;
      }
    }

    .tour-info__guide {
      margin-top: 1rem;
      display: flex;
    }

    .certificates {
      img {
        height: 150px;
        transition: all 0.2s ease-in-out;

        &:focus,
        &:hover {
          transform: scale(2) translateY(-40px);
        }
      }
    }
  }

  .sidebar--container {
    background-color: $dark_grey;
    box-sizing: border-box;
    padding: 2rem 2rem;
    z-index: 1;

    p {
      padding: 0.5rem 0;
    }

    .text__block {
      padding: 0.5rem 0;

      p {
        padding: 0.1rem 0;
      }
    }
  }

  @include for-tablet-landscape-up {
    @include white-blue-bg-gradient(60deg);
    grid-template-columns: 1fr 1fr 1.5fr;

    .content--wrapper {
      grid-area: 2/1/3/3;

      .tour-info {
        grid-template-columns: 1fr 1fr;
      }

      .tour-info__guide {
        margin-top: unset;
        flex-direction: column;

        .certificates {
          margin-top: 1rem;
        }
      }
    }

    .sidebar--container {
      grid-area: 1/3/3/4;
      align-self: center;
      margin-right: 3rem;
      margin: 1rem 2rem 1rem 0;
      background-color: rgba($dark_grey, 0.9);
    }
  }

  @include for-medium-desktop-up {
    .sidebar--container {
      margin-right: 5rem;
    }
  }
}
</style>
