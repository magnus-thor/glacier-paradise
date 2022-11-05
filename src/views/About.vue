<template>
  <div class="page">
    <!-- <div>{{ $t("aboutUs.text") }}</div> -->

    <images />

    <!-- <Instagram /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Images from "@/components/aboutUsComponent/images.vue";

export default defineComponent({
  name: "AboutUsView",
  components: { Images },
});
</script>
<style lang="scss"></style>
