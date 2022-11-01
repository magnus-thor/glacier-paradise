<template>
  <div>
    <figure data-behold-id="cDjxN13pDqwQdtEH9oOt"></figure>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";

export default {
  setup() {
    console.log("IG Setup");
    onMounted(() => {
      //@ts-expect-error
      window.beholdWidgets.initialize();
    });

    // if (!document.getElementById("instaFeed")) {
    //   const widgetScript = document.createElement("script");
    //   widgetScript.setAttribute("id", "instaFeed");
    //   widgetScript.setAttribute("src", "https://w.behold.so/widget.js");
    //   document.head.appendChild(widgetScript);
    // } else {
    //   console.log("Feed exists");
    // }
  },
};
</script>

<style lang="scss" scoped></style>
