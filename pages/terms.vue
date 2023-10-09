<template>
  <div class="page terms">
    <terms-markdown />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Terms of Service | Glacier Paradise",
  meta: [
    {
      name: "description",
      content:
        "Read our Terms of Service to understand your rights and obligations when using our website. By accessing our site, you agree to be bound by these terms, so please read them carefully. Contact us if you have any questions or concerns.",
    },
  ],
});
</script>
<style lang="scss" scoped>
@import "../assets/mixins.scss";

.terms {
  @include white-blue-bg-gradient(180deg);
  padding: 1rem 0 1rem 0;
}
</style>
