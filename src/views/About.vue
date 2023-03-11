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
  // flex-direction: column;

  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.2em;
  }

  // p {
  //   width: 80%;
  //   margin: 2rem auto 0 auto;
  //   text-align: left;
  // }

  // img {
  //   align-self: center;
  //   width: 80%;
  //   height: auto;
  // }

  // @include for-tablet-portrait-up {
  //   h1 {
  //     width: 80%;
  //   }

  //   p {
  //     width: 70%;
  //   }

  //   img {
  //     width: 60%;
  //   }
  // }

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
      justify-self: end;
      width: 30%;
      margin-right: 1rem;
      min-height: 72vh;
    }
  }
}
</style>
