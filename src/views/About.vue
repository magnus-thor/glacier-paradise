<template>
  <div class="page about-us--wrapper">
    <div class="main-content">
      <main-content />
    </div>
    <div class="info-component">
      <info />
    </div>
  </div>
</template>

<script lang="ts">
import Info from "@/components/aboutUsComponents/info.vue";
import MainContent from "@/components/aboutUsComponents/mainContent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutUsView",
  components: { Info, MainContent },
});
</script>
<style lang="scss">
@import "@/assets/base.scss";
@import "@/assets/mixins.scss";

.about-us--wrapper {
  display: grid;
  grid-template-areas: "overLay";
  margin: 1rem;
  margin-bottom: 0;

  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.2em;
  }

  @include for-tablet-landscape-down {
    .main-content {
      margin-bottom: 1rem;
    }
  }

  @include for-tablet-landscape-up {
    .main-content {
      grid-area: overLay;
    }

    .info-component {
      grid-area: overLay;
      justify-self: start;
      width: 30%;
      margin-left: 1rem;
      min-height: 72vh;
    }
  }

  @include for-desktop-up {
  }
}
</style>
