<template>
  <div class="page about-us--wrapper">
    <div class="main-content">
      <about-main-content />
    </div>
    <div class="info-component">
      <about-info />
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "About Glacier Paradise | Our Story and Mission",
  meta: [
    {
      name: "description",
      content:
        "Learn about Glacier Paradise and our mission to provide unique and unforgettable experiences in Iceland. Discover our story, team, and commitment to sustainable tourism.",
    },
  ],
});
</script>
<style lang="scss">
@import "@/assets/base.scss";

.about-us--wrapper {
  display: grid;
  grid-template-areas: "overLay";

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
    }
  }

  @include for-desktop-up {
  }
}
</style>
