<template>
  <div class="page">
    <terms-markdown />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TermsMarkdown from "@/components/termsMarkdown.vue";

export default defineComponent({
  name: "Terms",
  components: { TermsMarkdown },
});
</script>
<style lang="scss" scoped></style>
