<template>
  <div>
    <figure data-behold-id="cDjxN13pDqwQdtEH9oOt"></figure>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "instagram",
  setup() {
    console.log("IG Setup");
    onMounted(() => {
      window.beholdWidgets.initialize();
    });
  },
});
</script>

<style lang="scss" scoped></style>
