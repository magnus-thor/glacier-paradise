<template>
  <div class="page">
    <terms-markdown />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TermsMarkdown from "@/components/temsComponents/terms-markdown.vue";

export default defineComponent({
  name: "TermsView",
  components: { TermsMarkdown },
});
</script>
<style lang="scss" scoped></style>
