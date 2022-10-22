<template>
  <div class="page contact-us-page">
    <contact-us-header />
    <contact-us-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactUsHeader from "@/components/contactUsComponents/contactUsHeader.vue";
import ContactUsForm from "@/components/contactUsComponents/contactUsForm.vue";

export default defineComponent({
  name: "ContactUs",
  components: { ContactUsForm, ContactUsHeader },
});
</script>
<style lang="scss">
.contact-us-page {
  margin-top: 10%;
  display: flex;
  // grid-template-columns: 1fr;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
}
</style>
