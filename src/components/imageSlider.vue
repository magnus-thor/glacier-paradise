<template>
  <div class="imageSlider">
    <transition name="imageFade" mode="out-in"
      ><div class="image" :key="selectedImageNumber">
        <img :src="selectedImage" :alt="imageAlt" /></div
    ></transition>
    <div class="buttons">
      <button class="button" @click="previous" :disabled="disablePrevious">
        <v-icon name="fc-previous" fill="green" scale="2" />
      </button>
      <button class="button" @click="next" :disabled="disableNext">
        <v-icon name="fc-next" fill="green" scale="2" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
// import image1 from "public/images/fra-breiduvik.jpg";
// import image2 from "public/images/hvitur-jokull-blar-himinn.jpg";
// import image3 from "public/images/jokull-upp-med-stapafelli.jpg";
// import image4 from "public/images/solsetur.jpg";
// import image5 from "public/images/toppurinn.jpg";
// import image6 from "public/images/trodarinn-a-toppnum.jpg";

export default defineComponent({
  name: "imageSlider",
  setup() {
    const images = ref([
      "public/images/fra-breiduvik.jpg",
      "public/images/solsetur.jpg",
      "public/images/hvitur-jokull-blar-himinn.jpg",
      "public/images/jokull-upp-med-stapafelli.jpg",
      "public/images/solsetur.jpg",
      "public/images/toppurinn.jpg",
      "public/images/trodarinn-a-toppnum.jpg",
    ]);
    let selectedImageNumber = ref(0);

    const imageAlt = computed(
      () => images.value[selectedImageNumber.value].split("/")[3]
    );
    const disablePrevious = computed(() => selectedImageNumber.value <= 0);
    const disableNext = computed(
      () => selectedImageNumber.value >= images.value.length - 1
    );
    const selectedImage = computed(
      () => images.value[selectedImageNumber.value]
    );

    const previous = () => {
      selectedImageNumber.value--;
    };
    const next = () => {
      selectedImageNumber.value++;
    };

    return {
      selectedImageNumber,
      images,
      disableNext,
      disablePrevious,
      selectedImage,
      imageAlt,
      previous,
      next,
    };
  },
});
</script>

<style lang="scss" scoped>
.imageSlider {
  display: grid;
  // height: 300px;
  // width: 100%;

  // align-content: space-around;
  // justify-content: space-between;
}

.image {
  grid-row: 1;
  grid-column: 1;
  width: 90vw;
  height: 40rem;

  img {
    width: 100%;
    height: 100%;
    // object-fit: cover;
  }
}

.buttons {
  grid-row: 1;
  grid-column: 1;
  align-self: center;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  width: fill-available;
  padding-left: 3rem;
  padding-right: 3rem;

  button {
    cursor: pointer;
    border: none;
    background-color: inherit;
    stroke: blue; //TODO: swap to correct colors.
  }
}

.imageFade-enter-active,
.imageFade-leave-active {
  transition: opacity 0.5s ease;
}

.imageFade-enter-from,
.imageFade-leave-to {
  opacity: 0;
}
</style>
