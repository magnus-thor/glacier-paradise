<template>
  <div class="page">
    About Us Area
    <div>{{ $t("aboutUs.text") }}</div>

    <!-- <Instagram /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Instagram from "@/components/instagram.vue";

export default defineComponent({
  name: "About",
  components: { Instagram },
});
</script>
<style lang="scss"></style>
