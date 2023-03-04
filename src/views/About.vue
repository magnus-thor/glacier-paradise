<template>
  <div class="page">
    <div class="about-us--wrapper">
      <h1>{{ $t("aboutUs.header") }}</h1>
      <img
        src="/images/vignir-og-kolfinna-rotated.jpg"
        alt="picture of owners"
      />
      <div>
        <p>{{ $t("aboutUs.company") }}</p>
        <p>{{ $t("aboutUs.vignir") }}</p>
        <p>{{ $t("aboutUs.kolfinna") }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutUsView",
  components: {},
});
</script>
<style lang="scss">
@import "@/assets/base.scss";
@import "@/assets/mixins.scss";

.about-us--wrapper {
  display: flex;
  flex-direction: column;

  h1 {
    margin: 2rem auto;
    width: 90%;
    text-align: center;
  }

  p {
    width: 80%;
    margin: 2rem auto 0 auto;
    text-align: left;
  }

  img {
    align-self: center;
    width: 80%;
    height: auto;
  }

  @include for-tablet-portrait-up {
    h1 {
      width: 80%;
    }

    p {
      width: 70%;
    }

    img {
      width: 60%;
    }
  }

  @include for-desktop-up {
    h1 {
      width: 70%;
    }

    p {
      width: 60%;
    }

    img {
      width: 40%;
    }
  }
}
</style>
