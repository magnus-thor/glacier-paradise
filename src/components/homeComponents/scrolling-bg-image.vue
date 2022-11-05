<template>
  <div class="image--container">
    <div ref="scrollingImage" id="image" class="scrolling-bg-image"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "scrollingBgImage",
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
  background-size: cover;
  background-image: url(/images/iskyunum1_tinified.avif);
  animation: slide-small-screen 30s linear;
  translate: -80% 0;

  // TODO: add @media (orientation: landscape) and (orientation: portrait) for the image

  &.ios {
    background-size: cover;
    animation: slide-ios 70s linear;
  }

  @media screen and (min-width: 1024px) {
    translate: 0 0;
    -webkit-animation: slide 40s linear;
    animation: slide 40s linear;

    &.ios {
      animation: slide-ios 30s linear;
    }
  }
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(calc(100vw - 100%), 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slide-small-screen {
  0% {
    transform: translate3d(80%, 0, 0);
  }

  90% {
    transform: translate3d(calc(100vw - 20%), 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slide-ios {
  0% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(-2900px, 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
