<template>
  <div class="contact-us-info">
    <v-icon :name="iconName" scale="2.5" />
    <h2>{{ header }}:</h2>
    <p v-for="paragraph in paragraphs">{{ paragraph }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		iconName: String,
		header: String,
		paragraphs: Array<String>,
	},
	setup() {


		return {}
	}
})
</script>

<style lang="scss" scoped>
.contact-us-info {
  margin: 0.5rem;
  text-align: center;
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
</style>
