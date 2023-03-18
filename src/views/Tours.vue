<template>
  <div class="page">
    <router-view v-slot="{ Component, route }">
      <transition
        :enterActiveClass="route.meta.enterClass as string"
        :leaveActiveClass="route.meta.leaveClass as string"
        enter-to-class="pos-absolute"
        leave-from-class="pos-absolute"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToursView",
  setup() {},
});
</script>

<style lang="scss" scoped></style>
