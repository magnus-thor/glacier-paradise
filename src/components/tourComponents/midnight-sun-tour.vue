<template>
  <div class="midnightSun--container">
    <div class="image">
      <img src="/images/midnightsun.sida.jpg" alt="" />
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
        <p>
          {{ $t("midnightSun.info.p3") }}
          <span
            ><button class="primary small" @click="openDialog">
              {{ $t("shared.links.readMore") }}
            </button></span
          >
        </p>
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
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "midnightSunTour",
  setup() {
    const openDialog = () => {
      (document.getElementById("essentials-dialog") as HTMLDialogElement).open =
        true;
    };

    return { openDialog };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.midnightSun--container {
  // margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  // min-height: calc(100vh - $header_height - $footer_height);
  @include white-blue-bg-gradient(60deg);

  .image {
    grid-area: 1/1/-1/-1;
    img {
      display: block;
      width: 100%;
    }
  }

  .page-header {
    grid-area: 1/1/-1/-1;
    color: $white;
    padding-top: 1.5rem;
    padding-left: 2rem;
  }

  .content--wrapper {
    padding: 2rem;

    p + p {
      margin-top: 0.7rem;
    }

    .tour-info-header {
      margin-top: 1rem;
    }

    .tour-info {
      display: grid;
      grid-template-columns: 3fr 3fr;

      div {
        margin-right: 2rem;
      }

      p {
        font-weight: 600;
      }
    }
  }

  .sidebar--container {
    background-color: $dark_grey;
    box-sizing: border-box;
    padding: 2rem 2rem;

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

  // img {
  //   width: 100%;
  //   height: 35rem;
  // }

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
    $row1-height: 50vh;
    grid-template-columns: 1fr 1fr 1.5fr;
    grid-template-rows: $row1-height;
    // grid-area: 1/1/-1/-1;

    .image {
      img {
        height: $row1-height;
      }
    }

    .content--wrapper {
      grid-area: 2/1/3/3;
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
    $row1-height: 40vh;
    // grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: $row1-height;
    .image {
      img {
        display: block;
        height: $row1-height;
      }
    }

    .sidebar--container {
      margin-right: 5rem;
    }
  }
}
</style>
