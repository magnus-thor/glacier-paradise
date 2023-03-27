<template>
  <div>
    <img src="/images/fra-breiduvik-cropped-2.jpg" alt="" />
    <div class="content--wrapper">
      <div class="empty"></div>
      <div class="company-info">
        <h2>{{ $t("aboutUs.header") }}</h2>
        <h3>{{ $t("aboutUs.sub-header") }}</h3>
        <p>{{ $t("aboutUs.company") }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "mainContent",
  setup() {},
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.company-info {
  width: 85%;
}

img {
  height: auto;
  width: 100%;
  object-fit: cover;
  display: block;
}
h2,
h3 {
  color: $yellow;
}

h2,
p {
  margin-top: 1rem;
}

p {
  font-size: 0.8rem;
  color: $white;
}

@include for-tablet-landscape-down {
  .company-info {
    margin: auto;
  }
}

@include for-tablet-landscape-up {
  .content--wrapper {
    display: flex;
  }

  .empty {
    width: 40%;
  }

  .company-info {
    padding-left: 2rem;
    width: 50%;
  }

  p {
    font-size: 1rem;
  }
}
</style>
