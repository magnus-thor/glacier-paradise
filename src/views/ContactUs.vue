<template>
  <div class="page contact-us-wrapper">
    <div class="main-content">
      <contact-us-header />
      <div class="contact-us-info--wrapper">
        <contact-us-info
          v-for="info in contactUsInfo"
          :icon-name="info.iconName"
          :header="$t(info.header)"
          :paragraphs="info.paragraphs"
        />
      </div>
    </div>
    <div class="contact-us-form-component">
      <contact-us-form />
    </div>
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

.contact-us-wrapper {
  display: grid;
  grid-template-areas: "overLay";
  margin: 1rem;
  margin-bottom: 0;

  @include for-tablet-landscape-down {
    .main-content {
      margin-bottom: 1rem;
    }
  }

  @include for-tablet-landscape-up {
    .main-content {
      grid-area: overLay;
    }

    .contact-us-form-component {
      grid-area: overLay;
      justify-self: end;
      width: 40%;
      margin-left: 1rem;
      min-height: 72vh;
    }
  }

  @include for-desktop-up {
  }
}
</style>
