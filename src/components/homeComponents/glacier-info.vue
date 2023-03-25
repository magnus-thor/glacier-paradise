<template>
  <div class="glacier-info">
    <div class="glacier-info--content">
      <div class="text">
        <div class="iceland-map">
          <a
            href="https://goo.gl/maps/wJ1brAWbtDX9m1aD9"
            class="location-icon flip"
          >
            <v-icon name="oi-location" scale="2" color="#3a57b9" />
          </a>
          <img src="/logos/Map_Of_Iceland_clip_art_medium.png" alt="glacier" />
        </div>
        <img src="/logos/transparent_glacier.png" alt="glacier" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "glacierInfo",
  setup() {},
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";
@import "@/assets/mixins.scss";

.glacier-info {
  height: max-content;
  width: 100%;

  .glacier-info--content {
    padding: 2rem 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-evenly;
  }

  @include for-tablet-portrait-up {
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

.iceland-map {
  position: relative;
  font-size: 0.6rem;

  .location-icon {
    position: absolute;
    top: 80px;
    left: 2px;
  }
}

.text {
  display: flex;
  align-items: flex-end;
  justify-content: center;

  > a {
    margin-right: 1rem;
  }

  @include for-tablet-portrait-up {
    > a {
      margin-right: 9rem;
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
