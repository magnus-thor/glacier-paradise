<template>
  <div class="midnightSun--container">
    <div class="main-content-container">
      <img src="/images/midnightsun-50%.sida.jpg" alt="" />
      <div class="content--wrapper">
        <div class="p1">
          <h1>{{ $t("midnightSun.header") }}</h1>
          <p>{{ $t("midnightSun.p1") }}</p>
          <!-- <img src="/images/bjarturhiminn.jpg" alt="" /> -->
        </div>
        <div class="p2">
          <!-- <img src="/images/rutan.jpg" alt="" /> -->
          <p>{{ $t("midnightSun.p2") }}</p>
        </div>
        <div class="p3">
          <p>{{ $t("midnightSun.p3") }}</p>
          <!-- <img src="/images/trodararnir.jpg" alt="" /> -->
        </div>
        <div class="p4">
          <!-- <img src="/images/midnightsun-resized.card.jpg" alt="" /> -->
          <p>{{ $t("midnightSun.p4") }}</p>
        </div>
      </div>
    </div>
    <div class="info--container">
      <div class="p1">
        <h1>{{ $t("midnightSun.header") }}</h1>
        <p>{{ $t("midnightSun.p1") }}</p>
        <!-- <img src="/images/bjarturhiminn.jpg" alt="" /> -->
      </div>
      <div class="p2">
        <!-- <img src="/images/rutan.jpg" alt="" /> -->
        <p>{{ $t("midnightSun.p2") }}</p>
      </div>
      <div class="p3">
        <p>{{ $t("midnightSun.p3") }}</p>
        <!-- <img src="/images/trodararnir.jpg" alt="" /> -->
      </div>
      <div class="p4">
        <!-- <img src="/images/midnightsun-resized.card.jpg" alt="" /> -->
        <p>{{ $t("midnightSun.p4") }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "midnightSunTour",
  setup() {},
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";
@import "@/assets/mixins.scss";

.midnightSun--container {
  margin: auto;
  // background-color: $white;
  @include white-blue-bg-gradient;
  display: grid;
  grid-template-areas: "overLay";

  .content--wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 2rem;
  }

  .info--container {
    background-color: $dark_grey;

    // @include yellow-brownish-bg-gradient(280deg);
  }

  h1 {
    padding-left: 2rem;
    color: $yellow;
    // margin-bottom: 1rem;
  }

  p {
    color: $white;
  }

  img {
    width: 100%;
    height: 35rem;
  }

  .p1,
  .p2,
  .p3,
  .p4 {
    padding-right: 1rem;

    &:last-of-type {
      padding-right: 0;
    }
    // display: flex;
    // align-items: center;

    // width: 25%;

    // img {
    //   width: 180px;
    //   height: auto;
    //   border-radius: 50%;
    // }
  }

  @include for-tablet-landscape-up {
    .main-content-container {
      grid-area: overLay;
      .content--wrapper {
        width: 60%;
      }
    }

    .info--container {
      grid-area: overLay;
      justify-self: end;
      width: 30%;
      margin-right: 2rem;
      margin-bottom: 2rem;
      // min-height: 65vh;
      margin-top: 2rem;
      border-radius: 5px;

      h1 {
        margin-top: 2rem;
      }

      p {
        margin-top: 2rem;
        padding: 0 2rem;
      }
    }
  }
}
</style>
