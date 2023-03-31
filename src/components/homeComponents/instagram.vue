<template>
  <div>
    <figure data-behold-id="cDjxN13pDqwQdtEH9oOt"></figure>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted } from "vue";

export default defineComponent({
  name: "instagram",
  setup() {
    onBeforeMount(() => {
      const tag = document.createElement("script");
      tag.setAttribute("src", "https://w.behold.so/widget.js");
      tag.setAttribute("type", "module");
      document.head.appendChild(tag);
    }),
      onMounted(() => {
        window.beholdWidgets.initialize();
      });
  },
});
</script>

<style lang="scss" scoped></style>
