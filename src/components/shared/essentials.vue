<template>
  <dialog id="essentials-dialog" :open="isOpen">
    <h2>What to Bring and Wear for a Glacier Trip</h2>
    <p>
      Visiting a glacier can be a real adventure, but it's important to come
      prepared with the right gear. Here are some essential items you should
      bring and wear when visiting the top of a glacier:
    </p>
    <h3>Clothing</h3>

    <ul>
      <li>
        Dress in layers, so you can add or remove clothing depending on your
        body temperature
      </li>
      <li>Bring a warm, waterproof jacket, ideally with a hood</li>
      <li>Wear sturdy, waterproof hiking boots with good ankle support</li>
      <li>Gloves/mittens and a hat to keep extremities warm</li>

      <li>Non cotton thermal underwear and synthetic socks</li>
      <li>
        Base layers made of wicking fabrics like wool or synthetic that will
        prevent you from getting damp with perspiration
      </li>
    </ul>
    <h3>Other Essential Gear</h3>
    <li>Sunglasses and sunscreen to protect from sun damage</li>
    <li>A small backpack to carry extra clothing or equipment</li>
    <li>
      A water bottle or thermos filled with hot drink to stay hydrated and warm
      during the trip
    </li>

    <p>
      Please note that glacier trips can be challenging, physically demanding
      and weather-dependent so, to ensure safety, they're often guided by
      experienced tour operators. If you're unsure about whether a glacier trip
      is appropriate for you, consult with the tour operator beforehand or seek
      medical advice. By taking these precautions and wearing the appropriate
      clothing and gear, you'll be ready for an unforgettable experience atop a
      glacier.
    </p>
  </dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "essentials",
  setup() {
    const isOpen = ref(false);

    return { isOpen };
  },
});
</script>

<style lang="scss" scoped></style>
