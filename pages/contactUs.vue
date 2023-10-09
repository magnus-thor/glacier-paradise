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
        v-for="info in contactUsInfoProps"
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

<script setup lang="ts">
useHead({
  title: "Contact Glacier Paradise | Get in Touch with Us",
  meta: [
    {
      name: "description",
      content:
        "Have a question or need help planning your Iceland adventure? Contact Glacier Paradise and our friendly team will be happy to assist you. Find our phone number, email, and address on this page.",
    },
  ],
});

const contactUsInfoProps: {
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
</script>
<style lang="scss" scoped>
@import "@/assets/base.scss";

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

    .image {
      grid-area: 1/1/-1/-1;
      img {
        display: block;
        height: 50vh;
      }
    }

    .contact-us-form--container {
      grid-area: 1/3/3/4;
      align-self: center;
      margin-right: 1.5rem;
    }

    .contact-us-info--container {
      grid-area: 2/1/3/-1;
      max-width: 60%;
    }
  }

  @include for-medium-desktop-up {
    .image {
      img {
        display: block;
        height: 60vh;
      }
    }

    .main-content--container {
      grid-area: overLay;
      width: 65%;
    }

    .contact-us-form--container {
      margin-right: 6rem;
    }
  }
}
</style>
