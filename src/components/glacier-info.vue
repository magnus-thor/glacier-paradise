<template>
  <div class="glacier-info">
    <div class="glacier-info--content">
      <div class="text"></div>
      <div class="weather">
        <img :src="svgPath" :alt="weather.symbol_code" />
        <p>hiti: {{ weather.air_temperature }} </p>
        <p>vindur: {{ weather.wind_speed }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IWeather } from "@/interfaces/weather";
import { store } from "@/store/store";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "glacierInfo",
  setup() {
    const weather: IWeather = store.weather;

    const svgPath = `/weather-icons/svg/${weather.symbol_code}.svg`;

    return { weather, svgPath }
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.glacier-info {
  height: max-content;
  width: 100%;

  .glacier-info--content {
    padding: 2rem 1rem;
    height: 100%;
    width: 100%;
    background: white;
    display: flex
  }

  @media screen and (min-width: $small_screen) {
    display: flex;
    flex-direction: column;
    align-items: center;


    .glacier-info--content {
      max-width: 1024px;
    }
  }
}

.text {
  width: 80%;
}

.weather {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.8rem;

  img {
    width: 3rem;
    height: 3rem;
  }
}
</style>
