<template>
  <div class="page contact-us-page">
    <contact-us-header />
    <div class="contact-us-info--wrapper">
      <contact-us-info
        v-for="info in contactUsInfo"
        :icon-name="info.iconName"
        :header="info.header"
        :paragraphs="info.paragraphs"
      />
    </div>
    <contact-us-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactUsHeader from "@/components/contactUsComponents/contact-us-header.vue";
import ContactUsForm from "@/components/contactUsComponents/contact-us-form.vue";
import ContactUsInfo from "@/components/contactUsComponents/contact-us-Info.vue";

export default defineComponent({
  name: "ContactUs",
  components: { ContactUsForm, ContactUsHeader, ContactUsInfo },
  setup() {
    const contactUsInfo = [
      {
        iconName: "fa-regular-address-card",
        header: "Address",
        paragraphs: ["Samkomuhúsið á Stapa", "356 Snæfellsbær"],
      },
      {
        iconName: "fc-phone-android",
        header: "Phone",
        paragraphs: ["+354 8612844", "+354 8657402"],
      },
      {
        iconName: "fa-regular-clock",
        header: "Opening period",
        paragraphs: ["All year round !"],
      },
    ];
    return { contactUsInfo };
  },
});
</script>
<style lang="scss">
@import "@/assets/base.scss";

.contact-us-page {
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-us-info--wrapper {
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: $small_screen) {
    width: 65%;
  }
}
</style>
