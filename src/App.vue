<template>
  <div class="main-layout">
    <div id="preload">
      <img src="/images/iskyunum1_tinified.avif" rel="preload" />
    </div>

    <component :is="renderHeaderComponent" />

    <main class="content">
      <router-view v-slot="{ Component, route }">
        <transition
          :enterActiveClass="generateClassList2((route.meta.enterClass as string))"
          :leaveActiveClass="generateClassList2((route.meta.leaveClass as string))"
          enter-to-class="pos-absolute"
          leave-from-class="pos-absolute"
          mode="out-in"
        >
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
import MyHeader from "@/components/my-header.vue";
import MyFooter from "@/components/my-footer.vue";
import MobileHeader from "@/components/mobile-header.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "GlacierParadise",
  components: { MyHeader, MyFooter, MobileHeader },
  setup() {
    const { t } = useI18n({ useScope: "global" });

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
      return innerWidth.value < 780 ? "mobile-header" : "my-header";
    });

    const generateClassList = (className: string): string => {
      return `${className} pos-absolute`;
    };
    const generateClassList2 = (className: string): string => {
      return `${className}`;
    };

    return { renderHeaderComponent, t, generateClassList, generateClassList2 };
  },
});
</script>
<style lang="scss">
@import "@/assets/base.scss";
@import "animate.css";

div#preload {
  display: none;
}

.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $white;
}

.content {
  flex: 1 0 auto;
}

.pos-absolute {
  position: absolute;
  min-height: min-content;
  width: 100%;
}

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
