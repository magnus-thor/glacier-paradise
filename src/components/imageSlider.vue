<template>
  <div class="grid">
    <img class="image" :src="selectedImage" :alt="imageAlt" height="300" />
    <div class="buttons">
      <button class="button" @click="previous" :disabled="disablePrevious">
        Previous
      </button>
      <button class="button" @click="next" :disabled="disableNext">Next</button>
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
.grid {
  display: grid;
  height: 300px;

  align-content: space-around;
  justify-content: space-between;
}

.image {
  grid-row: 1;
  grid-column: 1;
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
}
</style>
