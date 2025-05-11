<template>
  <div class="buggy-tour--container">
    <div class="image">
      <!-- <img src="/images/buggy.sida.jpg" alt="" /> -->
      <TwicImg class=" twic-image" src="buggy.sida.jpg" alt="" />
    </div>
    <div class="header--container">
      <h1>{{ $t("buggy.content.header") }}</h1>
      <button class="bokunButton primary sticky js-bokunButton" disabled id="bokun_b0c877a8_9a94_4d9d_8e04_cbabb9212f5c"
        data-src="https://widgets.bokun.io/online-sales/a5fa0d8d-ffc2-431e-bece-86e5d8fa2d7c/experience/1019284?partialView=1"
        data-testid="widget-book-button" @click="trackBookNow">
        {{ $t("shared.bokun.buttons.book") }}
      </button>
    </div>
    <div class="content--wrapper">
      <h2 class="tour-info-header">{{ $t("buggy.info.header") }}</h2>
      <div class="tour-info">
        <div>
          <p>{{ $t("buggy.info.p1") }}</p>
          <p>{{ $t("buggy.info.p2") }}</p>
          <p>{{ $t("buggy.please_note.p1") }}</p>
          <p>{{ $t("buggy.please_note.p2") }}</p>
          <p>{{ $t("buggy.please_note.p3") }}</p>
        </div>
        <div class="tour-info__guide">
          <div>
            <p>
              {{ $t("buggy.info.p3") }}
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
      <p>{{ $t("buggy.content.p1") }}</p>
      <p>{{ $t("buggy.content.p2") }}</p>
      <p>{{ $t("buggy.content.p3") }}</p>
      <p>{{ $t("buggy.content.p4") }}</p>
    </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onBeforeMount } from "vue";
import { IStore } from "@/interfaces/store";

export default defineComponent({
  name: "buggyTour",
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
      (window as any).beam("/custom-events/buggy-tour-book-now");
    };

    const Store: IStore = inject("Store");

    const openDialog = () => {
      Store.isDialogOpen = true;
      Store.currentDialog = "buggy";
      (window as any).beam("/custom-events/buggy-tour-read-more");
    };

    return { openDialog, trackBookNow };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.buggy-tour--container {
  display: grid;
  grid-template-columns: 1fr;
  background-color: $sapphire_blue;

  .image {
    grid-area: 1/1/-1/-1;

    .twic-image {
      --twic-ratio: 3;
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
    color: cornsilk;
    padding-top: 1.5rem;
    padding-left: 2rem;
    z-index: 1;
  }

  .content--wrapper {
    padding: 2rem;

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
      padding: 0.7rem 0;
      line-height: 1.5;
    }
  }

  @include for-tablet-landscape-up {
    grid-template-columns: 1fr 1fr 1.5fr;
    @include white-blue-bg-gradient(60deg);

    .image {
      .twic-image {
        --twic-ratio: 1.8;
      }
    }

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
    .image {
      .twic-image {
        --twic-ratio: 3;
      }
    }

    .sidebar--container {
      margin-right: 5rem;
    }
  }
}
</style>
