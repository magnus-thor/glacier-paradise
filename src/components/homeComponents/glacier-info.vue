<template>
  <div class="glacier-info">
    <div class="glacier-info--content">
      <div class="text">
        <a href="https://goo.gl/maps/wJ1brAWbtDX9m1aD9">
          <v-icon name="oi-location" scale="4" />
        </a>
        <img src="/logos/new_glacier_logo_with_height.png" alt="glacier" />
      </div>
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { fetchWeather } from "@/composables/fetchWeather";
import { IWeather } from "@/interfaces/weather";

export default defineComponent({
  name: "glacierInfo",
  async setup() {
    onMounted(() => {
      document.getElementById(
        "windIcon"
      ).style.rotate = `${weather.value.wind_from_direction}deg`;
    });
    const tempWeather: IWeather = await fetchWeather();
    const weather = ref(tempWeather);
    const inputValue = ref(1);

    const svgPath = computed(() => {
      return `/weather-icons/svg/${weather.value.symbol_code}.svg`;
    });

    return { weather, svgPath, inputValue };
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
    display: flex;
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
  // height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  // img {
  //   width: 3rem;
  //   height: 3rem;
  // }
}

.weather {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-around;
  row-gap: 0.8rem;

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
