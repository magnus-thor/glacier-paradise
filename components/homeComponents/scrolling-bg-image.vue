<template>
  <div class="image--container">
    <link
      href="/images/iskyunum1_tinified.avif"
      rel="preload"
      as="image"
      v-if="!isEdge"
    />
    <div
      ref="scrollingImage"
      id="image"
      :class="[
        'scrolling-bg-image',
        {
          pngBgImage: isEdge,
        },
      ]"
    ></div>
  </div>
</template>

<script lang="ts" setup>
const { isEdge } = useDevice();
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.image--container {
  position: absolute;
}

.scrolling-bg-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 5076px;
  height: 100vh;
  background-size: 100% 100%;

  background-image: url("/images/iskyunum1_tinified.avif");
  &.pngBgImage {
    background-image: url("/images/iskyunum1_tinified.png");
  }

  animation: slide-small-screen 40s linear;
  translate: -80% 0;

  @include for-tablet-portrait-up {
    translate: 0 0;
    -webkit-animation: slide 40s linear;
    animation: slide 40s linear;
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
