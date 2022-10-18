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
import { defineComponent, ref, computed } from "vue";
import { fetchWeather } from "@/composables/fetchWeather";


export default defineComponent({
  name: "glacierInfo",
  async setup() {
    // const weather = computed(() => {
    //   return store.weather;
    // })

    const tempWeather = await fetchWeather();
    const weather = ref(tempWeather);

    const svgPath = computed(() => {
      return `/weather-icons/svg/${weather.value.symbol_code}.svg`;
    })

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
