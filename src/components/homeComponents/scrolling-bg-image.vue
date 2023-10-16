<template>
  <div class="image--container">
    <div class="scrolling-bg-image">
      <img
        src="https://glacierparadise.twic.pics/iskyunum1_tinified.avif?twic=v1/cover=5076"
        alt=""
        rel="preload"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "scrollingBgImage",
  setup() {
    const loadPng = ref(false);
    if (
      navigator.userAgent.indexOf("MSIE") != -1 ||
      navigator.userAgent.indexOf("Edg") != -1
    ) {
      loadPng.value = true;
    }

    return { loadPng };
  },
});
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
