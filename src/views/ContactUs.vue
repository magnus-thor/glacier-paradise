<template>
  <div class="page contact-us--container">
    <div class="image">
      <img src="/images/toppur_panorama-resized.jpg" alt="" />
    </div>
    <div class="contact-us-header--container">
      <contact-us-header />
    </div>
    <div class="contact-us-info--container">
      <contact-us-info
        v-for="info in contactUsInfo"
        :icon-name="info.iconName"
        :header="$t(info.header)"
        :paragraphs="info.paragraphs"
        class="info__grid-item"
      />
    </div>

    <div class="contact-us-form--container">
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
        paragraphs: [
          "contactUs.info.openingPeriod.paragraph1",
          "contactUs.info.openingPeriod.paragraph2",
        ],
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
  grid-template-columns: 1fr;

  .image {
    grid-area: 1/1/-1/-1;
    img {
      display: block;
      width: 100%;
    }
  }

  .contact-us-header--container {
    grid-area: 1/1/-1/-1;
  }

  .contact-us-info--container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    box-sizing: border-box;
    padding: 0;
    margin: 1.5rem 1rem;
    .info__grid-item:last-of-type {
      grid-column: span 2;
      margin: auto;
      max-width: 48ch;
    }
  }

  @include for-tablet-landscape-up {
    grid-template-columns: 1fr 1fr 1fr;
    // grid-template-rows: 7fr 3fr;

    //TODO: use grid-columns to span over each other
    .image {
      grid-area: 1/1/-1/-1;
      // width: 100%;
      img {
        display: block;
        // height: 70vh;
        // width: 80%;
        // height: 70%;
      }
    }

    .contact-us-form--container {
      grid-area: 1/3/3/4;
      // max-width: 40%;
      // justify-self: end;
      align-self: center;
      margin-right: 1.5rem;
    }

    .contact-us-info--container {
      grid-area: 2/1/3/-1;
      // margin-top: -6rem;
      max-width: 60%;
    }
  }

  @include for-desktop-up {
    // .main-content--container {
    //   grid-area: overLay;
    //   width: 65%;
    // }

    // .contact-us-form-component {
    //   width: 25%;
    //   margin-right: 6rem;
    // }
  }
}
</style>
