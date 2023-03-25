<template>
  <div class="contact-us-info">
    <v-icon :name="iconName" scale="2.5" color="#dadada" />
    <h2>{{ header }}:</h2>
    <div class="info-text">
      <p v-for="paragraph in paragraphs">{{ $t(paragraph) }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "contactUsInfo",
  props: {
    iconName: String,
    header: String,
    paragraphs: {
      type: Array<string>,
      default: [],
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.contact-us-info {
  text-align: center;
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  color: $yellow;
}

p {
  color: $white;
  padding-bottom: 0.2rem;
}
</style>
