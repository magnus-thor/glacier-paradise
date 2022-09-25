<template>
  <div class="page">
    <!-- <div>{{ $t("aboutUs.text") }}</div> -->

    <Images />

    <!-- <Instagram /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Instagram from "@/components/instagram.vue";
import Images from "@/components/images.vue";

export default defineComponent({
  name: "About",
  components: { Instagram, Images },
});
</script>
<style lang="scss"></style>
