<template>
  <div class="page">
    <!-- <div>{{ $t("aboutUs.text") }}</div> -->

    <Images />

    <!-- <Instagram /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Instagram from "@/components/homeComponents/instagram.vue";
import Images from "@/components/aboutUsComponent/images.vue";

export default defineComponent({
  name: "AboutUsView",
  components: { Instagram, Images },
});
</script>
<style lang="scss"></style>
