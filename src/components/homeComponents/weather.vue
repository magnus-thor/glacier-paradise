<template>
  <div class="weather">
    <img :src="svgPath" :alt="weather.symbol_code" />
    <p class="celsius">
      {{ weather.air_temperature }}
      <v-icon name="wi-celsius" scale="2" />
    </p>
    <p>
      {{ weather.wind_speed }} m/s
      <v-icon name="wi-direction-up" id="windIcon" />
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";

import { fetchWeather } from "@/composables/fetchWeather";
import { IWeather } from "@/interfaces/weather";
export default defineComponent({
  name: "weather",
  async setup() {
    onMounted(() => {
      console.log(
        "weather.value.wind_from_direction",
        weather.value.wind_from_direction
      );
      document.getElementById(
        "windIcon"
      ).style.rotate = `${weather.value.wind_from_direction}deg`;
    });
    const tempWeather: IWeather = await fetchWeather();
    const weather = ref(tempWeather);

    const svgPath = computed(() => {
      return `/weather-icons/svg/${weather.value.symbol_code}.svg`;
    });

    return { weather, svgPath };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";
@import "@/assets/mixins.scss";

.weather {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-around;
  row-gap: 0.8rem;

  @include for-tablet-portrait-down {
    padding-top: 1rem;
    p {
      padding-left: 2rem;
    }
  }

  @include for-tablet-portrait-up {
    flex-direction: column;
    align-items: end;
  }

  img {
    width: 3rem;
    height: 3rem;
  }

  .celsius {
    svg {
      margin-left: -10px;
      vertical-align: middle;
    }
  }
}
</style>
