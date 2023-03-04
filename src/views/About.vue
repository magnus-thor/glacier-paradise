<template>
  <div class="page">
    <div class="about-us--wrapper">
      <h1>About us</h1>
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

.about-us--wrapper {
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
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

  @media screen and (min-width: $small_screen) {
    p {
      width: 60%;
    }

    img {
      width: 60%;
    }
  }

  @media screen and (min-width: $medium_screen) {
    p {
      width: 40%;
    }

    img {
      width: 40%;
    }
  }
}
</style>
