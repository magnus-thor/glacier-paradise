<template>
	<div>
		<p if="status">{{status}}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	name: "weather",
	setup() {
		console.log("Weather")
		const stapiLocations = {
			lat: "64.76936",
			lon: "-23.62258"
		}
		let status = ref(null)
		const getSymbolCode = (data: Record<string, any>): string => {
			if (data.next_1_hours) {
				return data.next_1_hours.summary.symbol_code
			} else if (data.next_6_hours) {
				return data.next_6_hours.summary.symbol_code
			} else if (data.next_12_hours) {
				return data.next_12_hours.summary.symbol_code
			}
			return "unknown";
		}
		let weather = fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${stapiLocations.lat}&lon=${stapiLocations.lon}`,)
			.then(res => res.json())
			.then(res => {
				const data = res.properties.timeseries[0].data;
				const details = data.instant.details;
				const symbol_code = getSymbolCode(data);
				return {
					air_temperature: details.air_temperature,
					wind_speed: details.wind_speed,
					symbol_code: data.next_1_hours,
				}
			})
			.catch(err => status = err);

		return { status }
	}
})
</script>

<style scoped>

</style>