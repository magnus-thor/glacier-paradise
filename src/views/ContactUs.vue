<template>
  <div class="page contact-us-page">
    <contact-us-header />
    <div class="contact-us-info--wrapper">
      <contact-us-info
        v-for="info in contactUsInfo"
        :icon-name="info.iconName"
        :header="$t(info.header)"
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
  name: "ContactUsView",
  components: { ContactUsForm, ContactUsHeader, ContactUsInfo },
  setup() {
    const contactUsInfo: {
      iconName: string;
      header: string;
      paragraphs: string[];
    }[] = [
      {
        iconName: "fa-regular-address-card",
        header: "contactUs.info.address.header",
        paragraphs: ["Samkomuhúsið á Stapa", "356 Snæfellsbær"],
      },
      {
        iconName: "fc-phone-android",
        header: "contactUs.info.phone.header",
        paragraphs: ["+354 8612844", "+354 8657402"],
      },
      {
        iconName: "fa-regular-clock",
        header: "contactUs.info.openingPeriod.header",
        paragraphs: ["contactUs.info.openingPeriod.paragraphs"],
      },
    ];

    return { contactUsInfo };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/base.scss";
@import "@/assets/mixins.scss";

.contact-us-page {
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 70rem;
  margin: auto;
}

.contact-us-info--wrapper {
  // width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;

  @include for-tablet-portrait-up {
    width: 65%;
  }
}
</style>
