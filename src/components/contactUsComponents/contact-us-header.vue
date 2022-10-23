<template>
  <div class="contact-us-header">
    <div>
      <p><strong>Any questions?</strong></p>
      <h1>Contact us</h1>
    </div>
    <!-- <div class="contact-us-info--wrapper">
      <contact-us-info
        v-for="info in contactUsInfo"
        :icon-name="info.iconName"
        :header="info.header"
        :paragraphs="info.paragraphs"
      />
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  setup() {
    //TODO: rename
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

<style scoped>
.contact-us-header {
  text-align: center;
}

/* .contact-us-info--wrapper {
  margin-top: 2rem;
  display: flex;
} */
</style>
