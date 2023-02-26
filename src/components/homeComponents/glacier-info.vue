<template>
  <div class="glacier-info">
    <div class="glacier-info--content">
      <div class="text">
        <a href="https://goo.gl/maps/wJ1brAWbtDX9m1aD9" class="flip">
          <v-icon name="oi-location" scale="2" color="#3a57b9" />
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
    padding: 2rem 0;
    height: 100%;
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-evenly;
  }

  @media screen and (min-width: $small_screen) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .glacier-info--content {
      max-width: 1024px;
      flex-direction: row;
      padding: 2rem 1rem;

      + a {
        margin-right: 9rem;
      }
    }
  }
}

.text {
  display: flex;
  align-items: flex-end;
  justify-content: center;

  > a {
    margin-right: 1rem;
  }

  @media screen and (min-width: $small_screen) {
    > a {
      margin-right: 9rem;
    }
  }
}

.weather {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-around;
  row-gap: 0.8rem;

  @media screen and (max-width: $small_screen) {
    padding-top: 1rem;
    p {
      padding-left: 2rem;
    }
  }

  @media screen and (min-width: $small_screen) {
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

.flip:hover {
  backface-visibility: visible !important;
  animation: flip 2s ease infinite;
}

@keyframes flip {
  0% {
    transform: perspective(400px) rotateY(0);
    animation-timing-function: ease-out;
  }
  40% {
    transform: perspective(400px) translateZ(150px) rotateY(170deg);
    animation-timing-function: ease-out;
  }
  50% {
    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    animation-timing-function: ease-in;
  }
  80% {
    transform: perspective(400px) rotateY(360deg) scale(0.95);
    animation-timing-function: ease-in;
  }
  100% {
    transform: perspective(400px) scale(1);
    animation-timing-function: ease-in;
  }
}
</style>
