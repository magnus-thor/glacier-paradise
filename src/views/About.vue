<template>
  <div class="page">
    About Us Area
    <div>{{ $t("aboutUs.text") }}</div>

    <!-- <Instagram /> -->
  </div>
</template>

<script>
import Instagram from "@/components/instagram.vue";
export default {
  name: "About",
  components: { Instagram },
};
</script>
<style lang="scss"></style>
