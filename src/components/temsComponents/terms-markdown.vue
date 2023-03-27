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
  margin: auto;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  background-color: $dark_grey;
  // box-sizing: border-box;
  padding: 1rem;
  // padding-right: 1rem;

  h1 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    color: $yellow;
  }

  h2 {
    margin: 1rem auto 0.4rem auto;
    text-align: left;
    color: $yellow;
  }

  p {
    margin: 0 auto;
    text-align: left;
    color: $white;

    &:last-of-type {
      margin-bottom: 3rem;
    }
  }

  @include for-tablet-portrait-up {
    // margin: auto;
    width: 65%;
  }

  @include for-desktop-up {
    // margin: auto;
    width: 50%;
  }
}
</style>
