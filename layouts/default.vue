<template>
  <div class="main-layout">
    <MobileHeader v-if="isMobileOrTablet || showMobileHeader" />
    <MainHeader v-else />
    <main class="content">
      <SeoKit/>
      <slot />
      <ClientOnly>
        <Messenger />
      </ClientOnly>
    </main>
    <footer class="footer">
      <my-footer />
    </footer>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  innerWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    innerWidth.value = window.innerWidth;
  });
});

const { isMobileOrTablet } = useDevice();
const innerWidth = ref(800);

const showMobileHeader = computed(() => {
  return innerWidth.value < 780;
});
</script>

<style lang="scss">
@import "@/assets/base.scss";

.page-left-enter-active,
.page-right-enter-active,
.page-up-enter-active,
.page-down-enter-active,
.page-left-leave-active,
.page-right-leave-active,
.page-up-leave-active,
.page-down-leave-active {
  position: fixed;
  top: $header_height;
  left: 0;
  right: 0;
  transition: all 300ms linear;
}

.page-index-enter-active,
.page-index-leave-active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 300ms linear;
}

.page-left-enter-from,
.page-right-leave-to {
  transform: translateX(100%);
}

.page-index-enter-from,
.page-index-leave-to,
.page-left-leave-to,
.page-right-enter-from {
  transform: translateX(-100%);
}

.page-index-enter-to,
.page-left-enter-to,
.page-right-enter-to {
  transform: translateX(0);
}

// When navigating to a subroute
.page-down-enter-from,
.page-up-leave-to {
  transform: translateY(100%);
}

.page-down-leave-to,
.page-up-enter-from {
  transform: translateY(-100%);
}

.page-down-enter-to,
.page-up-enter-to {
  transform: translateY(0);
}

div#preload {
  display: none;
}

.main-layout {
  min-height: calc(100vh + $footer_height);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: $header_height auto $footer_height;
  background-color: $white;
  @include white-blue-bg-gradient(180deg);

  @include for-tablet-landscape-up {
    @include white-blue-bg-gradient;
  }
}

.footer {
  z-index: 1;
}
</style>
