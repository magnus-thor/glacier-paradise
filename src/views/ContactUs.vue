<template>
  <div class="page">
    <contact-us-form />
  </div>
</template>

<script lang="ts">
import ContactUsForm from "@/components/contactUsForm.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactUs",
  components: { ContactUsForm },
});
</script>
<style lang="scss"></style>
