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
  name: "termsMarkdown",
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
@import "@/assets/base.scss";

.markdown {
  margin: auto 1rem;

  h1 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  h2 {
    margin: 1rem auto 0.4rem auto;
    text-align: left;
  }

  p {
    margin: 0 auto;
    text-align: left;

    &:last-of-type {
      margin-bottom: 3rem;
    }
  }

  @media screen and (min-width: $small_screen) {
    margin: auto;
    width: 60%;
  }

  @media screen and (min-width: $medium_screen) {
    margin: auto;
    width: 40%;
  }
}
</style>
