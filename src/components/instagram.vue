<template>
  <div>
    <div data-behold-id="cDjxN13pDqwQdtEH9oOt"></div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    console.log("IG Setup");

    if (!document.getElementById("instaFeed")) {
      const widgetScript = document.createElement("script");
      widgetScript.setAttribute("id", "instaFeed");
      widgetScript.setAttribute("src", "https://w.behold.so/widget.js");
      document.head.appendChild(widgetScript);
    } else {
      console.log("Feed exists");
    }
    // document
    //   .getElementById("feed")
    //   .setAttribute("data-behold-id", "cDjxN13pDqwQdtEH9oOt");
  },
};
</script>

<style lang="scss" scoped></style>
