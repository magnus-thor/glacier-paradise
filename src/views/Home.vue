<template>
  <div class="page">
    <div class="home">
      <div class="image--container">
        <div ref="scrollingImage" id="image" class="scrolling-bg-image"></div>
      </div>
      <div class="full"></div>
      <!-- <Instagram /> -->
      <div ref="scrollRef" class="glacier-info--container">
        <GlacierInfo v-if="loadComponents" />
      </div>
      <div class="cards--container">
        <Cards v-if="loadComponents" />
      </div>
      <!-- <div class="videos--container"> -->
      <!-- <YoutubeVideos /> -->
      <!-- </div> -->
    </div>
  </div>
</template>
<script lang="ts">
import GlacierInfo from "@/components/glacier-info.vue";
import Cards from "@/components/cards.vue";
// import YoutubeVideos from "@/components/youtubeVideos.vue";
// import ImageSlider from "@/components/imageSlider.vue";
import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue";
// import Instagram from "@/components/instagram.vue";
import { onIntersect } from "@/composables/onIntersect";

// : defineAsyncComponent(
//       () => import("@/components/glacier-info.vue")
//     )
// : defineAsyncComponent(() => import("@/components/cards.vue"))

export default defineComponent({
  name: "HomeComponent",
  components: {
    // YoutubeVideos,
    // ImageSlider,
    Cards,
    GlacierInfo,
    // Instagram
  },
  setup() {
    const scrollingImage = ref();
    const scrollRef = ref();
    const observer = ref({});

    const ua = navigator.userAgent

    onMounted(() => {

      if (
        /iPad|iPhone|iPod/.test(ua)
      ) {
        document.getElementById("image").classList.add("ios")
      }
    })

    const loadComponents = ref(false);

    const onEnter = () => {
      loadComponents.value = true;
    };

    const onExit = () => { };

    const options = { capture: true };
    let innerWidth = ref(window.innerWidth);
    const callBack = () => {
      innerWidth.value = window.innerWidth;
      scrollingImage.value.style.width = "6144px";
    };
    window.addEventListener("resize", callBack, options);
    onBeforeUnmount(() => {
      window.removeEventListener("resize", callBack, options);
      observer.value = onIntersect(scrollRef.value, onEnter, onExit, false);
    });

    return { scrollingImage, loadComponents, scrollRef };
  },
});
</script>
<style lang="scss" scoped>
.page {
  overflow: hidden;
  position: relative;
}

.full {
  min-height: 90vh;
}

.home {
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 3rem;
  justify-items: center;
}

.mainImage {
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 80%;
    height: 100vh;
  }
}

.videos--container,
.cards--container,
.glacier-info--container {
  margin-top: 2rem;
  // margin-bottom: 6rem;
  width: 100vw;
  z-index: 1;
}

.image--container {
  position: absolute;
}

.scrolling-bg-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 5076px;
  height: 100vh;
  background-position: 0 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  background-image: url(/images/iskyunum1_tinified.jpg);
  -webkit-animation: slide 70s linear;
  animation: slide 70s linear;

  &.ios {
    background-size: cover;
    animation: slide-ios 70s linear;
  }

  @media screen and (min-width: 1024px) {
    -webkit-animation: slide 40s linear;
    animation: slide 30s linear;

    .ios {
      animation: slide-ios 30s linear;
    }
  }
}

@keyframes slide {
  0% {
    // -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  50% {
    // -webkit-transform: translate3d(calc(100vw - 100%), 0, 0);
    transform: translate3d(calc(100vw - 100%), 0, 0);
  }

  100% {
    // -webkit-transform: translate3d(0, 0, 0);
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
