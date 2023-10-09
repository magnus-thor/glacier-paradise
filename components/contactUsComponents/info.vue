<template>
  <section aria-describedby="contact-us-info-header" class="contact-us-info">
    <v-icon :name="iconName" scale="2.5" color="#dadada" />
    <h2 id="contact-us-info-header">{{ header }}:</h2>
    <div class="info-text">
      <p v-for="paragraph in paragraphs">{{ $t(paragraph) }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  iconName: String;
  header: String;
  paragraphs: String[];
}>();
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
