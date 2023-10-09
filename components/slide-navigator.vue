<template>
  <!-- <NuxtTransition> -->
  <aside
    ref="asideRef"
    class="side-drawer"
    :class="{
      'animate-out': !drawerIsOpen,
      'animate-in': drawerIsOpen,
      hide: !drawerIsOpen,
    }"
    v-click-outside="closeDrawer"
  >
    <div class="top-row">
      <template v-for="lang in availableLocales">
        <button
          :key="`locale-${lang}`"
          @click="changeLocale(lang)"
          v-if="lang.code !== locale"
          class="locale-button"
        >
          {{ lang.name }}
        </button>
      </template>
      <v-icon
        name="io-close"
        scale="1.5"
        @click="closeDrawer"
        color="#fff"
      ></v-icon>
    </div>
    <div class="routes">
      <template v-for="(route, index) in routes">
        <nav class="item">
          <router-link :to="route.linkTo">{{
            $t(route.nameTranslationKey)
          }}</router-link>
        </nav>
      </template>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { LocaleObject } from "vue-i18n-routing";

const props = defineProps<{ openDrawer: boolean }>();
const emit = defineEmits(["close"]);
const drawerIsOpen = ref(false);
const reactToClickOutside = ref(false);
const asideRef = ref<HTMLElement>();

const { routes, changeLocale } = setupRoutes();

const { locale, locales } = useI18n();

const availableLocales = computed(() => {
  return (locales.value as LocaleObject[]).filter(
    (i) => i.code !== locale.value
  );
});

watch(
  () => props.openDrawer,
  (newVal) => {
    if (newVal) openDrawer();
  }
);

const { beforeEach } = useRouter();

beforeEach(() => {
  drawerIsOpen.value = false;
  reactToClickOutside.value = false;
  emit("close");
});

const openDrawer = () => {
  drawerIsOpen.value = true;
  setTimeout(() => (reactToClickOutside.value = true), 100);
};

const closeDrawer = () => {
  if (reactToClickOutside.value) {
    drawerIsOpen.value = false;
    reactToClickOutside.value = false;
    emit("close");
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.side-drawer {
  position: fixed;
  right: 0;
  width: 17rem;
  height: 100vh;
  background-color: $blue;
  z-index: 100;
  @include ellipse-bg-midnight_blue-gradient(bottom);
}

.routes {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 1rem;

  .item {
    margin-bottom: 0.2rem;

    button.nav-button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }

    a,
    button.nav-button {
      color: $yellow;
      font-weight: 600;
      font-size: 20px;

      &.bottom-border {
        border-bottom: 1px solid;
      }
    }

    a:hover {
      color: $white;
    }

    a.router-link-active {
      color: $white;
    }
  }
}

.top-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  margin-bottom: 1rem;

  button {
    justify-self: start;
  }

  svg {
    justify-self: end;
  }
}

.hide:not(.show) {
  display: none;
}

.animate-in {
  animation: show 300ms;
}

.animate-out {
  animation: hide 300ms;
}

@keyframes show {
  from {
    width: 10rem;
  }
  to {
    width: 17rem;
  }
}

@keyframes hide {
  from {
    width: 17rem;
  }
  to {
    width: 10rem;
  }
}
</style>
