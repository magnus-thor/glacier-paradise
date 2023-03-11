<template>
  <div class="info-wrapper">
    <h1>some header goes here</h1>

    <div class="staff">
      <h2>Vignir</h2>
      <div class="image-text--wrapper">
        <img class="staff-image" src="/images/vignir.jpg" alt="" />
        <p>{{ $t("aboutUs.vignir") }}</p>
      </div>
    </div>

    <div class="staff">
      <h2>Kolfinna</h2>
      <div class="image-text--wrapper">
        <img class="staff-image right" src="/images/kolfinna.jpg" alt="" />
        <p>{{ $t("aboutUs.kolfinna") }}</p>
      </div>
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

.info-wrapper {
  padding: 2rem;
  background-color: $yellow_info;
  height: 100%;

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
  .image-text--wrapper {
    // display: flex;

    &.reverse {
      // flex-direction: row-reverse;
    }
  }

  .staff-image {
    border-radius: 50%;
    shape-outside: circle(50%);

    width: 100px;
    float: left;
    margin-right: 1rem;

    &.right {
      float: right;
    }
  }
}
</style>
