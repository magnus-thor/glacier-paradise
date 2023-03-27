<template>
  <div class="midnightSun--container">
    <div class="main-content-container">
      <img src="/images/midnightsun.sida.jpg" alt="" />
      <div class="content--wrapper">
        <div class="p1">
          <!-- TODO: Refactor header outside this div -->
          <h1>{{ $t("midnightSun.info.header") }}</h1>
          <p>{{ $t("midnightSun.info.p1") }}</p>
        </div>
        <div class="p2">
          <p>{{ $t("midnightSun.info.p2") }}</p>
          <!-- <button>{{ $t("midnightSun.info.p2") }}</button> -->
        </div>
        <div class="p3">
          <p>{{ $t("midnightSun.info.p3") }}</p>
        </div>
      </div>
    </div>
    <aside class="info--container">
      <div class="p1">
        <h1>{{ $t("midnightSun.content.header") }}</h1>
        <p>{{ $t("midnightSun.content.p1") }}</p>
      </div>
      <div class="p2">
        <p>{{ $t("midnightSun.content.p2") }}</p>
      </div>
      <div class="p3">
        <p>{{ $t("midnightSun.content.p3") }}</p>
      </div>
      <div class="p4">
        <p>{{ $t("midnightSun.content.p4") }}</p>
      </div>
    </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "midnightSunTour",
  setup() {},
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

button {
  grid-column: span 2;
  border: none;
  background-color: $yellow;
  color: $dark_grey;
  padding: 1rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 4px 4px black;
  transition: box-shadow 0.3s ease-out;
  width: 60%;
  margin: auto;

  &:hover {
    box-shadow: 2px 2px black;
  }
}

.midnightSun--container {
  margin: auto;
  display: grid;
  grid-template-areas: "overLay";
  min-height: calc(100vh - $header_height - $footer_height);
  @include white-blue-bg-gradient(60deg);

  .content--wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 2rem;
  }

  .info--container {
    background-color: $dark_grey;
  }

  h1 {
    padding-left: 2rem;
    color: $yellow;
  }

  p {
    color: $white;
  }

  img {
    width: 100%;
    height: 35rem;
  }

  .p1,
  .p2,
  .p3,
  .p4 {
    padding-right: 1rem;

    &:last-of-type {
      padding-right: 0;
    }
  }

  @include for-tablet-landscape-up {
    .main-content-container {
      grid-area: overLay;
      .content--wrapper {
        width: 60%;
      }
    }

    .info--container {
      grid-area: overLay;
      justify-self: end;
      width: 30%;
      margin-right: 2rem;
      margin-bottom: 2rem;
      margin-top: 2rem;
      padding-bottom: 2rem;
      border-radius: 5px;

      h1 {
        margin-top: 2rem;
      }

      p {
        margin-top: 2rem;
        padding: 0 2rem;
      }
    }
  }
}
</style>
