<template>
  <div class="info-wrapper">
    <h1>{{ $t("aboutUs.info-header") }}</h1>

    <div class="staff">
      <h2>Vignir</h2>
      <img class="staff-image" src="/images/vignir.jpg" alt="" />
      <p>{{ $t("aboutUs.vignir") }}</p>
    </div>

    <div class="staff">
      <h2>Kolfinna</h2>
      <img class="staff-image right" src="/images/kolfinna.jpg" alt="" />
      <p>{{ $t("aboutUs.kolfinna") }}</p>
    </div>
  </div>
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
@import "@/assets/variables.scss";
@import "@/assets/mixins.scss";

.info-wrapper {
  padding: 2rem;
  // padding-bottom: 1rem;
  background-color: $dark_grey;
  margin-bottom: 1rem;

  @include for-tablet-landscape-up {
    min-height: 85%;
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
