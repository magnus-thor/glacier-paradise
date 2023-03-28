<template>
  <div class="main-layout">
    <component :is="renderHeaderComponent" />

    <main class="content">
      <router-view v-slot="{ Component, route }">
        <!-- TODO: fix height while transitioning -> https://markus.oberlehner.net/blog/vue-router-page-transitions/ -->
        <transition
          :enterActiveClass="generateClassList2((route.meta.enterClass as string))"
          :leaveActiveClass="generateClassList2((route.meta.leaveClass as string))"
          enter-to-class="pos-absolute"
          leave-from-class="pos-absolute"
          mode="out-in"
        >
          <component :is="Component" />
          <!-- TODO: pass openDialog to corresponding component -->
        </transition>
      </router-view>
    </main>

    <essentials-dialog />

    <footer class="footer">
      <my-footer />
    </footer>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  defineAsyncComponent,
  onUnmounted,
  ref,
  provide,
} from "vue";
import MyFooter from "@/components/my-footer.vue";
import EssentialsDialog from "@/components/shared/essentials.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "GlacierParadise",
  components: {
    MobileHeader: defineAsyncComponent(
      () => import("@/components/mobile-header.vue")
    ),
    MyHeader: defineAsyncComponent(() => import("@/components/my-header.vue")),
    MyFooter,
    EssentialsDialog,
  },
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

    return {
      renderHeaderComponent,
      t,
      generateClassList,
      generateClassList2,
    };
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
  @include white-blue-bg-gradient(180deg);

  @include for-tablet-landscape-up {
    @include white-blue-bg-gradient;
  }
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

// body:has(dialog[open]) {
//   overflow: hidden;
// }

.animate__animated.animate__fadeInRight,
.animate__animated.animate__fadeInLeft,
.animate__animated.animate__fadeOutLeft,
.animate__animated.animate__fadeOutRight {
  --animate-duration: 0.5s;
}
</style>
