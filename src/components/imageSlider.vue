<template>
  <div>
    <img :src="selectedImage" :alt="imageAlt" height="300" />
    <div class="buttons">
      <button @click="previous" :disabled="disablePrevious">Previous</button>
      <button @click="next" :disabled="disableNext">Next</button>
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
  // created() {
  //   this.selectedImage = new URL(
  //     this.images[this.selectedImageNumber],
  //     import.meta.url
  //   );
  // },
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
.buttons {
  margin-top: 1rem;

  button:first-child {
    margin-right: 1rem;
  }
}
</style>
