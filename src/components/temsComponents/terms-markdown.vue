<template>
  <div class="markdown">
    <component :is="componentToRender" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { VueComponent as MarkdownIs } from "@/assets/md/terms_is.md";
import { VueComponent as MarkdownEn } from "@/assets/md/terms_en.md";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "TermsMarkdown",
  components: {
    MarkdownIs,
    MarkdownEn,
  },
  setup() {
    const { locale } = useI18n();
    const componentToRender = computed(() => {
      const lang = locale.value;
      return `markdown-${lang}`;
    });

    return { componentToRender };
  },
});
</script>
<style lang="scss">
.markdown {
  padding: 5rem;
}
</style>
