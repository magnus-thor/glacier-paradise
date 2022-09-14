<template>
  <div>
    <img src="../assets/images/trodarinn-a-toppnum.jpg" alt="Trodarinn a toppnum">
    <YoutubeVideos />
  </div>
</template>
<script>
import YoutubeVideos from '../components/youtubeVideos.vue';
export default {
  name: "Home",
  components: { YoutubeVideos }
};
</script>
<style lang="scss" scoped>
div {
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 3rem;
  padding-bottom: 3rem;
  justify-items: center;
}
</style>
