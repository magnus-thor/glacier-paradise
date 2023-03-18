<template>
  <div class="midnightSun--wrapper">
    <!-- <img src="/images/midnightsun-1200-630.sida.jpg" alt="" /> -->
    <!-- <img src="/images/midnightsun-630-1200.sida.jpg" alt="" /> -->
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
        <!-- <img src="/images/midnightsun.card.jpg" alt="" /> -->
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

.midnightSun--wrapper {
  margin: auto;
  @include white-blue-bg-gradient;

  .content--wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 2rem;
  }

  h1 {
    padding-left: 2rem;
    color: $white;
    // margin-bottom: 1rem;
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
}
</style>
