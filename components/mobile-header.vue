<template>
  <header ref="scrollRef">
    <div
      id="header"
      class="header"
      :class="{ 'header-background': !showCenterLogo }"
    >
      <div
        id="header-logo"
        class="header-logo"
        :class="{ 'center-logo': showCenterLogo }"
      >
        <img
          id="header-image"
          src="/logos/logo-glacier-paradise-transparent.png"
          alt="Glacier paradise logo"
          rel="preload"
        />
      </div>
      <v-icon
        class="burger-button"
        name="fa-hamburger"
        scale="2.5"
        color="#dadada"
        @click="openDrawer"
      />
    </div>
    <SlideNavigator :open-drawer="drawerIsOpen" @close="closeDrawer">
    </SlideNavigator>
  </header>
</template>

<script lang="ts" setup>
import { setupHeader } from "@/composables/headerShared";
const drawerIsOpen = ref(false);

const { scrollRef, showCenterLogo } = setupHeader();

const openDrawer = () => {
  drawerIsOpen.value = true;
};

const closeDrawer = () => {
  drawerIsOpen.value = false;
};
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.header {
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  z-index: 15;
  justify-items: space-between;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  height: $header_height; //TODO: smaller header, use $header_height_mobile and all calcs for min height need to be responsive
  box-sizing: border-box;
}

.header-background {
  background-color: $sapphire_blue;
}

.header-logo {
  justify-self: flex-start;

  img {
    width: 7rem;
    height: auto;
  }
}

.burger-button {
  justify-self: flex-end;
  max-width: 3rem;
  // margin-right: 1.2rem;
}

.center-logo {
  img {
    position: fixed;
    width: 14rem;

    top: 20vh;
    left: calc(50% - 7rem);
    transition: 2s;
  }
}

.item a {
  font-weight: 600;
  font-size: 24px;
}

.locale-button {
  background: none;
  color: $white;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 24px;
  margin-top: 0.6rem;
  margin-left: 1rem;
}
</style>
