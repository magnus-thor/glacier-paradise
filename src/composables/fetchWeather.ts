import { IWeather } from "@/interfaces/weather";

export const fetchWeather = async () => {
  const stapiLocations = {
    lat: "64.76936",
    lon: "-23.62258",
  };
  let status: any = undefined;

  const getSymbolCode = (data: Record<string, any>): string => {
    if (data.next_1_hours) {
      return data.next_1_hours.summary.symbol_code;
    }
    if (data.next_6_hours) {
      return data.next_6_hours.summary.symbol_code;
    }
    if (data.next_12_hours) {
      return data.next_12_hours.summary.symbol_code;
    }
    return "unknown";
  };

  let weather: IWeather = await fetch(
    `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${stapiLocations.lat}&lon=${stapiLocations.lon}`
  )
    .then((res) => res.json())
    .then((res) => {
      const data = res.properties.timeseries[0].data;
      const details = data.instant.details;
      const symbol_code = getSymbolCode(data);
      return {
        air_temperature: details.air_temperature,
        wind_speed: details.wind_speed,
        wind_from_direction: Math.round(details.wind_from_direction),
        symbol_code,
      };
    })
    .catch((err) => (status = err));

  return weather;
};
