<template>
  <div class="image--container">
    <div ref="scrollingImage" class="scrolling-bg-image"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, ref } from "vue";

export default defineComponent({
  name: "bgImage",
  setup() {
    const scrollingImage = ref<HTMLElement>();
    const scrollRef = ref<HTMLElement>();

    const options = { capture: true };
    let innerWidth = ref(window.innerWidth);
    const callBack = () => {
      innerWidth.value = window.innerWidth;
      scrollingImage.value.style.width = "6144px";
    };
    window.addEventListener("resize", callBack, options);
    onUnmounted(() => {
      window.removeEventListener("resize", callBack, options);
    });

    return { scrollingImage, scrollRef };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/mixins.scss";

.image--container {
  overflow: hidden;
  // position: relative;
  // width: 100%;
}

.scrolling-bg-image {
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(/images/trodarinn-a-toppnum.jpg);
  width: 100%;
  height: 100%;
  background-position: 0 50%;
  background-repeat: no-repeat;
  // background-size: 100% 100%;
  // background-size: center center;
  background-size: cover;
  background-attachment: scroll;
  // -webkit-animation: slide 30s linear;
  // animation: slide 30s linear;

  @include for-desktop-up {
    // -webkit-animation: slide 40s linear;
    background-image: url(/images/iskyunum1_tinified.jpg);
    width: 5044px;
    background-attachment: fixed;

    background-size: 100% 100%;

    animation: slide 40s linear;
  }
}

@keyframes slide {
  0% {
    // -webkit-transform: translate3d(0, 0, 0);
    // transform: translate3d(0, 0, 0);
    transform: translateX(0);
  }
  50% {
    // -webkit-transform: translate3d(calc(100vw - 100%), 0, 0);
    // transform: translate3d(calc(100vw - 100%), 0, 0);
    // transform: translate3d(-2900px, 0, 0);
    transform: translateX(calc(100vw - 100%));
  }
  100% {
    // -webkit-transform: translate3d(0, 0, 0);
    // transform: translate3d(0, 0, 0);
    transform: translateX(0);
  }
}
</style>
