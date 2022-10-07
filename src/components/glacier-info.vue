<template>
  <div class="glacier-info">
    <div class="glacier-info--content">
      <h2>Snæfellsjökull</h2>
      <p>Hæð: 1.446 m</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "glacierInfo",
  setup() {},
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";
.glacier-info {
  height: 10rem;
  width: 100%;

  .glacier-info--content {
    padding: 1rem;
  }
  @media screen and (min-width: $small_screen) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .glacier-info--content {
      max-width: 1024px;
      width: 100%;
      height: 10rem;
      background: white;
    }
  }
}

h2 {
  margin-bottom: 0.5rem;
}
</style>
