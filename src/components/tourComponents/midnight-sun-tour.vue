<template>
  <div class="midnightSun--wrapper">
    <img src="/images/midnightsun-630-1200.sida.jpg" alt="" />

    <h1>{{ $t("midnightSun.header") }}</h1>
    <div class="p1">
      <p>{{ $t("midnightSun.p1") }}</p>
      <img src="/images/bjarturhiminn.jpg" alt="" />
    </div>
    <div class="p2">
      <img src="/images/rutan.jpg" alt="" />
      <p>{{ $t("midnightSun.p2") }}</p>
    </div>
    <div class="p3">
      <p>{{ $t("midnightSun.p3") }}</p>
      <img src="/images/trodararnir.jpg" alt="" />
    </div>
    <div class="p4">
      <img src="/images/midnightsun.card.jpg" alt="" />
      <p>{{ $t("midnightSun.p4") }}</p>
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
  @include yellow-brownish-bg-gradient;

  h1 {
    padding-left: 2rem;
    color: $white;
    // margin-bottom: 1rem;
  }

  img {
    width: 100%;
    height: auto;
  }

  .p1,
  .p2,
  .p3,
  .p4 {
    padding: 0 2rem;
    // display: flex;
    align-items: center;

    img {
      width: 180px;
      height: auto;
      border-radius: 50%;
    }
  }
}
</style>
