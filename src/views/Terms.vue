<template>
  <div class="page terms">
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
<style lang="scss" scoped>
@import "../assets/mixins.scss";

.terms {
  @include white-blue-bg-gradient(180deg);
  padding: 6rem 0 1rem 0;
}
</style>
