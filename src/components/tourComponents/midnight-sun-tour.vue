<template>
  <div class="midnightSun--container">
    <div class="image">
      <!-- <img src="/images/midnightsun.sida.jpg" alt="" /> -->
      <TwicImg class="twic-image" src="midnightsun.sida.jpg" alt="" />
    </div>
    <h1 class="page-header">{{ $t("midnightSun.content.header") }}</h1>
    <div class="content--wrapper">
      <p>{{ $t("midnightSun.content.p1") }}</p>
      <p>{{ $t("midnightSun.content.p2") }}</p>
      <p>{{ $t("midnightSun.content.p3") }}</p>
      <p>{{ $t("midnightSun.content.p4") }}</p>
      <h2 class="tour-info-header">{{ $t("midnightSun.info.header") }}</h2>
      <div class="tour-info">
        <div>
          <p>{{ $t("midnightSun.info.p1") }}</p>
          <p>{{ $t("midnightSun.info.p2") }}</p>
        </div>
        <div class="tour-info__guide">
          <div>
            <p>
              {{ $t("midnightSun.info.p3") }}
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
      <h2>{{ $t("midnightSun.sidebar.header") }}</h2>

      <p>{{ $t("midnightSun.sidebar.p1") }}</p>
      <div class="text__block">
        <p>
          {{ $t("midnightSun.sidebar.p2") }}
        </p>
        <p>
          {{ $t("midnightSun.sidebar.p3") }}
        </p>
      </div>
      <div class="text__block">
        <p>
          {{ $t("midnightSun.sidebar.p4") }}
        </p>
        <p>
          {{ $t("midnightSun.sidebar.p5") }}
        </p>
      </div>
    </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import { IStore } from "@/interfaces/store";

export default defineComponent({
  name: "midnightSunTour",
  setup() {
    const Store: IStore = inject("Store");

    const openDialog = () => {
      Store.isDialogOpen = true;
      Store.currentDialog = "default";
      (window as any).beam("/custom-events/midnight-sun-tour-read-more");
    };

    return { openDialog };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.midnightSun--container {
  display: grid;
  grid-template-columns: 1fr;
  background-color: $sapphire_blue;

  .image {
    grid-area: 1/1/-1/-1;

    .twic-image {
      --twic-ratio: 3;
    }
  }

  .page-header {
    grid-area: 1/1/-1/-1;
    color: $white;
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
      padding: 0.5rem 0;
    }

    .text__block {
      padding: 0.5rem 0;

      p {
        padding: 0.1rem 0;
      }
    }
  }

  p {
    color: $white;
  }

  h2 {
    color: $yellow;
  }

  .p1,
  .p2,
  .p3,
  .p4 {
    padding-right: 1rem;

    &:last-of-type {
      padding-right: 0;
    }
  }

  @include for-tablet-landscape-up {
    grid-template-columns: 1fr 1fr 1.5fr;
    @include white-blue-bg-gradient(60deg);

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
