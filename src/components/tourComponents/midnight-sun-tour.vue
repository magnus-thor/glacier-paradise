<template>
  <div class="midnightSun--wrapper">
    <h1>{{ $t("midnightSun.header") }}</h1>
    <img src="" alt="TODO fix" />
    <p>{{ $t("midnightSun.p1") }}</p>
    <p>{{ $t("midnightSun.p2") }}</p>
    <p>{{ $t("midnightSun.p3") }}</p>
    <p>{{ $t("midnightSun.p4") }}</p>
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
.midnightSun--wrapper {
  margin: auto;
  max-width: 100ch;

  h1 {
    text-align: center;
  }

  p {
    margin-top: 1rem;
  }
}
</style>
