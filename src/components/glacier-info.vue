<template>
  <div class="glacier-info">
    <div class="glacier-info--content">
      <p>{{$t("glacierInfo")}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "glacierInfo",
  setup() { },
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.glacier-info {
  height: max-content;
  width: 100%;

  p {
    padding: 2rem 3rem;
  }

  .glacier-info--content {
    padding: 2rem 1rem;
    height: 100%;
    width: 100%;
    background: white;
  }

  @media screen and (min-width: $small_screen) {
    display: flex;
    flex-direction: column;
    align-items: center;


    p {
      padding: 2rem;
    }

    .glacier-info--content {
      max-width: 1024px;
      // height: 12rem;
    }
  }
}

h2 {
  margin-bottom: 0.5rem;
}
</style>
