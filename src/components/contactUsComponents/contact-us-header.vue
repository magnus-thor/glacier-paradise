<template>
  <div class="contact-us-header">
    <div>
      <p>
        <strong>{{ $t("contactUs.preamble") }}?</strong>
      </p>
      <h1>{{ $t("contactUs.header") }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "contactUsHeader",
});
</script>

<style scoped>
.contact-us-header {
  text-align: center;
}
</style>
