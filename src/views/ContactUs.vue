<template>
  <div class="page contact-us--container">
    <div class="image">
      <img src="/images/toppur_panorama.jpg" alt="" />
    </div>
    <div class="main-content--container">
      <div class="contact-us-header--container">
        <contact-us-header />
      </div>
      <div class="contact-us-info--container">
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

.contact-us--container {
  display: grid;
  grid-template-areas: "overLay";

  .image {
    img {
      display: block;
      width: 100%;
    }
  }

  .main-content--container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "info ";
    justify-items: center;
    align-items: center;
    margin-top: 2rem;

    .contact-us-header--container {
      grid-area: header;
    }

    .contact-us-info--container {
      display: flex;
      flex-direction: row;
      grid-area: info;
    }
  }

  // @include for-tablet-landscape-down {
  //   .main-content {
  //     margin-bottom: 1rem;
  //   }
  // }

  @include for-tablet-landscape-up {
    .image {
      img {
        display: block;
        width: 100%;
        height: calc(100vh - $header_height - $footer_height);
      }
    }

    .main-content--container {
      grid-area: overLay;
    }

    .image {
      grid-area: overLay;
    }

    .contact-us-form-component {
      grid-area: overLay;
      justify-self: end;
      width: 30%;
      margin-right: 2em;
    }
  }

  @include for-desktop-up {
    .contact-us-form-component {
      width: 25%;
      margin-right: 6rem;
    }
  }
}
</style>
