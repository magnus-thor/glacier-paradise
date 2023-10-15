<template>
  <aside class="info-wrapper">
    <h1>{{ $t("aboutUs.info-header") }}</h1>

    <div class="staff">
      <h2>Vignir</h2>
      <TwicImg class="staff-image" src="/vignir.jpg" alt="" refit />
      <p>{{ $t("aboutUs.vignir") }}</p>
    </div>

    <div class="staff">
      <h2>Kolfinna</h2>
      <TwicImg class="staff-image" src="/kolfinna.jpg" alt="" zoom="1.5" />
      <p>{{ $t("aboutUs.kolfinna") }}</p>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "info",
  setup() {},
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.info-wrapper {
  position: relative;
  padding: 2rem;
  background-color: $dark_grey;
  margin-top: 1rem;
  z-index: 10;

  @include for-tablet-landscape-up {
    min-height: calc(100vh - $header_height - $footer_height - 3rem);
    padding-bottom: unset;
  }

  h1,
  h2 {
    color: $yellow;
  }

  h2 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: $white;
  }
}

.staff {
  .staff-image {
    border-radius: 50%;
    shape-outside: ellipse(45.95% 55.21% at 34px 40px);

    width: 70px;
    float: left;
    margin-right: 2rem;
  }

  @include for-tablet-landscape-up {
    .staff-image {
      shape-outside: ellipse(45.95% 55.21% at 50px 65px);
      width: 100px;
      margin-right: 2rem;
    }
  }
}
</style>
