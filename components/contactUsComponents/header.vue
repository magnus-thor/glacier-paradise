<template>
  <div class="contact-us-header">
    <p>
      <strong>{{ $t("contactUs.preamble") }}?</strong>
    </p>
    <h1>{{ $t("contactUs.header") }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "contactUsHeader",
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.contact-us-header {
  color: $white;
  padding-top: 1.5rem;
  padding-left: 2rem;
}
</style>
