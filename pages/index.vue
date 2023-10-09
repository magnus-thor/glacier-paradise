<template>
  <div class="page">
    <div class="home">
      <home-scrolling-bg-image />
      <h1>{{ $t("home.header") }}</h1>
      <div class="full"></div>
      <!-- TODO: Add an arrow pointing down -->
      <div ref="cardsRef" id="tours" class="cards--container">
        <home-cards v-if="loadCardsComponent" />
      </div>
      <!-- <div class="glacier-info--container">
        <glacier-info v-if="loadInstagramComponent" />
      </div> -->
      <div ref="instagramRef" class="instagram--container">
        <home-instagram v-if="loadInstagramComponent" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { onIntersect } from "@/composables/onIntersect";

const cardsRef = ref<HTMLElement>();
const instagramRef = ref<HTMLElement>();
const loadCardsComponent = ref(false);
const loadInstagramComponent = ref(false);
const observer = ref({});

const { afterEach } = useRouter();

afterEach((to) => {
  if (to.path === "/") {
    document.getElementById("header")!.classList.remove("header-background");
  } else {
    document.getElementById("header")!.classList.add("header-background");
  }
});

const onEnterToursComponent = () => {
  loadCardsComponent.value = true;
};

const onEnterInstagramComponent = () => {
  loadInstagramComponent.value = true;
};

onMounted(() => {
  observer.value = onIntersect(
    cardsRef.value as HTMLElement,
    onEnterToursComponent
  );
  observer.value = onIntersect(
    instagramRef.value as HTMLElement,
    onEnterInstagramComponent
  );
});
</script>
<style lang="scss" scoped>
@import "../assets/base.scss";

.page {
  overflow-x: hidden;

  h1 {
    z-index: 1;
    margin: auto;
    margin-top: 30vh;
    padding-left: 1rem;
    padding-right: 1rem;
    color: white;
    text-align: center;
    max-width: 35ch;
  }
}

.full {
  min-height: 45vh;
}

.home {
  display: grid;
  grid-template-columns: 1fr;
}

.videos--container,
.cards--container,
.instagram--container,
.glacier-info--container {
  margin-top: 3rem;
  margin-bottom: 2rem;
  z-index: 1;
}

@media (min-height: 800px) {
  .page {
    .full {
      min-height: 50vh;
    }
  }
}

@media (min-height: 1000px) {
  .page {
    .full {
      min-height: 50vh;
    }
  }
}

@media (min-height: 1300px) {
  .page {
    .full {
      min-height: 60vh;
    }
  }
}
</style>
