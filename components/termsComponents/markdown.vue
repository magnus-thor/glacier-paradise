<template>
  <div class="terms-wrapper">
    <h1>{{ $t("terms.header") }}</h1>

    <h2>{{ $t("terms.general.header") }}</h2>
    <p class="extra-space">{{ $t("terms.general.p1") }}</p>
    <p class="extra-space">{{ $t("terms.general.p2") }}</p>
    <p class="extra-space">{{ $t("terms.general.p3") }}</p>

    <h2>{{ $t("terms.refund.header") }}</h2>
    <p>{{ $t("terms.refund.p1") }}</p>
    <p>{{ $t("terms.refund.p2") }}</p>
    <p>{{ $t("terms.refund.p3") }}</p>

    <h2>{{ $t("terms.price.header") }}</h2>
    <p>{{ $t("terms.price.p1") }}</p>

    <h2>{{ $t("terms.taxes.header") }}</h2>
    <p>{{ $t("terms.taxes.p1") }}</p>

    <h2>{{ $t("terms.confidentiality.header") }}</h2>
    <p>{{ $t("terms.confidentiality.p1") }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "termsMarkdown",
  setup() {},
});
</script>
<style lang="scss">
@import "@/assets/base.scss";

.terms-wrapper {
  margin: auto;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  background-color: $dark_grey;
  padding: 1rem;

  h1 {
    margin-top: 2rem;
    text-align: center;
    color: $yellow;
  }

  h2 {
    margin-top: 2rem;
    text-align: left;
    color: $yellow;

    &:first-of-type {
      margin: 1rem 0 0 0;
    }
  }

  p {
    margin-top: 0.2rem;
    text-align: left;
    color: $white;

    &:last-of-type {
      margin-bottom: 3rem;
    }

    &.extra-space {
      margin-top: 0.4rem;
    }
  }

  @include for-tablet-portrait-up {
    width: 65%;
  }

  @include for-desktop-up {
    width: 50%;
  }
}
</style>
