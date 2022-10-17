import { reactive } from "vue";
import { IWeather } from "@/interfaces/weather";

const weather: IWeather = {
  air_temperature: 0,
  wind_speed: 0,
  symbol_code: "",
};

export const store = reactive({
  weather,
});
