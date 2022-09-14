<template>
  <div class="markdown">
    <component :is="componentToRender" />
  </div>
</template>
<script>
import { VueComponent as MarkdownIs } from "@/assets/md/terms_is.md";
import { VueComponent as MarkdownEn } from "@/assets/md/terms_en.md";

export default {
  name: "TermsMarkdown",
  components: {
    MarkdownIs, MarkdownEn
  },
  computed: {
    componentToRender() {
      const lang = this.$i18n.locale;
      return `markdown-${lang}`;
    }
  }
}
</script>
<style lang="scss">
.markdown {
  padding: 5rem;

}
</style>