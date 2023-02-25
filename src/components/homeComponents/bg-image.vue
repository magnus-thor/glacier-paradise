<template>
  <div class="image--container">
    <div ref="scrollingImage" id="image" class="scrolling-bg-image"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "BgImage",
  setup() {
    const ua = navigator.userAgent;

    onMounted(() => {
      if (/iPad|iPhone|iPod/.test(ua)) {
        document.getElementById("image").classList.add("ios");
      }
    });

    return {};
  },
});
</script>

<style lang="scss" scoped>
.image--container {
  position: absolute;
}

.scrolling-bg-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 5076px;
  height: 100vh;
  background-image: url(/images/iskyunum1_tinified.avif);
  background-repeat: repeat-x;
  background-size: auto;
  background-attachment: fixed;
  background-position: center;
  animation: slide 10s linear infinite;
}

@keyframes slide {
  from {
    background-position: left;
  }
  to {
    background-position: right;
  }
}
</style>
