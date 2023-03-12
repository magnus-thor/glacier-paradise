<template>
  <div>
    <img src="/images/fra-breiduvik-cropped-2.jpg" alt="" />
    <div class="company-info">
      <h2 class="add-after">{{ $t("aboutUs.header") }}</h2>
      <h3 class="add-after">{{ $t("aboutUs.sub-header") }}</h3>
      <p>{{ $t("aboutUs.company") }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "mainContent",
  setup() {
    const text = ref("hello there");

    return { text };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/mixins.scss";

$afterText: v-bind("text");

.company-info {
  width: 85%;
}

img {
  height: auto;
  width: 100%;
  object-fit: cover;
}

h2,
p {
  margin-top: 1rem;
}

p {
  font-size: 0.8rem;
}

@include for-tablet-landscape-down {
  .company-info {
    margin: auto;
  }
}

@include for-tablet-landscape-up {
  .company-info {
    padding-left: 2rem;
    width: 50%;
  }

  p {
    font-size: 1rem;
  }
}
</style>
