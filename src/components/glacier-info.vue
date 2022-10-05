<template>
  <div class="glacier-info">
    <h2>Snæfellsjökull</h2>
    <p>Hæð: 1.446 m</p>
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
.glacier-info {
  height: 10rem;
  width: 100%;
  background: white;
}

h2 {
  margin-bottom: 0.5rem;
}
</style>
