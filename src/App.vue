<template>
  <div class="mainLayout">
    <!-- <div class="image-container"></div> -->

    <component :is="renderHeaderComponent" />

    <main class="content">
      <router-view v-slot="{ Component, route }">
        <transition :enterActiveClass="generateClassList2((route.meta.enterClass as string))"
          :leaveActiveClass="generateClassList2((route.meta.leaveClass as string))" enter-to-class="posAbsolute"
          leave-from-class="posAbsolute" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="footer">
      <my-footer />
    </footer>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onUnmounted, ref } from "vue";
import MyHeader from "@/components/myHeader.vue";
import MyFooter from "@/components/myFooter.vue";
import MobileHeader from "@/components/mobileHeader.vue";
import { useI18n } from "vue-i18n";
import { store } from "./store/store";
import { fetchWeather } from "./composables/fetchWeather";
import { IWeather } from "@/interfaces/weather";

export default defineComponent({
  name: "App",
  components: { MyHeader, MyFooter, MobileHeader },
  setup() {
    const { t } = useI18n({ useScope: "global" });

    fetchWeather().then((weather: IWeather) => store.weather = weather)

    const options = { capture: true };
    let innerWidth = ref(window.innerWidth);
    const callBack = () => {
      innerWidth.value = window.innerWidth;
    };
    window.addEventListener("resize", callBack, options);
    onUnmounted(() => {
      window.removeEventListener("resize", callBack, options);
    });

    const renderHeaderComponent = computed(() => {
      return innerWidth.value < 710 ? "mobile-header" : "my-header";
    });

    const generateClassList = (className: string): string => {
      return `${className} posAbsolute`;
    };
    const generateClassList2 = (className: string): string => {
      return `${className}`;
    };

    return { renderHeaderComponent, t, generateClassList, generateClassList2 };
  },
});
</script>
<style lang="scss">
@import "./assets/base.scss";
@import "animate.css";

.mainLayout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $white;
}

.content {
  flex: 1 0 auto;
}

.posAbsolute {
  position: absolute;
  min-height: min-content;
  width: 100%;
}

//TODO: fix footer when using the router
.footer {
  z-index: 1;
}

body:has(dialog[open]) {
  overflow: hidden;
}

dialog {
  position: fixed;
  width: 25rem;
  z-index: 100;
  border: 1px solid;
  box-shadow: 2px 2px;
}

.animate__animated.animate__fadeInRight,
.animate__animated.animate__fadeInLeft,
.animate__animated.animate__fadeOutLeft,
.animate__animated.animate__fadeOutRight {
  --animate-duration: 0.5s;
}
</style>
