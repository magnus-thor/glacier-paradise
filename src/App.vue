<template>
  <div class="mainLayout">
    <header>
      <component :is="renderHeaderComponent" />
    </header>

    <main class="content">
      <router-view v-slot="{ Component, route }">
        <transition
          :enter-active-class="route.meta.enterClass"
          :leave-active-class="route.meta.leaveClass"
        >
          <keep-alive include="About">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </main>

    <footer class="footer">
      <my-footer />
    </footer>
  </div>
</template>
<script>
import MyHeader from "@/components/myHeader.vue";
import MyFooter from "@/components/myFooter.vue";
import MobileHeader from "@/components/mobileHeader.vue";

export default {
  name: "App",
  components: { MyHeader, MyFooter, MobileHeader },
  mounted() {
    window.addEventListener("resize", () => {
      this.innerWidth = window.innerWidth;
    });
  },
  data() {
    return {
      innerWidth: window.innerWidth,
    };
  },
  computed: {
    mobileView() {
      return this.innerWidth < 760;
    },
    renderHeaderComponent() {
      return this.mobileView ? "mobile-header" : "my-header";
    },
  },
};
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
  position: relative;
}

.page {
  position: absolute;
  height: 100%;
  width: 100%;
}

.footer {
  flex-shrink: 0;
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
