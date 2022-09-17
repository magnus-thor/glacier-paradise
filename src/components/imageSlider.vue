<template>
  <div class="imageSlider">
    <transition mode="in-out" appear
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

<script>
export default {
  name: "imageSlider",
  data() {
    return {
      images: [
        "../assets/images/fra-breiduvik.jpg",
        "../assets/images/hvitur-jokull-blar-himinn.jpg",
        "../assets/images/jokull-upp-med-stapafelli.jpg",
        "../assets/images/solsetur.jpg",
        "../assets/images/toppurinn.jpg",
        "../assets/images/trodarinn-a-toppnum.jpg",
      ],
      selectedImageNumber: 0,
    };
  },
  computed: {
    imageAlt() {
      return this.images[this.selectedImageNumber].split("/")[3];
    },
    disablePrevious() {
      return this.selectedImageNumber <= 0;
    },
    disableNext() {
      return this.selectedImageNumber >= this.images.length - 1;
    },
    selectedImage() {
      return new URL(this.images[this.selectedImageNumber], import.meta.url);
    },
  },
  methods: {
    previous() {
      this.selectedImageNumber--;
    },
    next() {
      this.selectedImageNumber++;
    },
  },
};
</script>

<style lang="scss" scoped>
.imageSlider {
  display: grid;
  // height: 300px;
  width: 100%;

  align-content: space-around;
  justify-content: space-between;
}

.image {
  grid-row: 1;
  grid-column: 1;
  width: 100vw;
  height: 40rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
