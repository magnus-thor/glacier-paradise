<template>
  <div
    :class="{ 'modal-overlay': dialogOpen }"
    id="modal-overlay"
    :style="show"
  ></div>

  <div class="card" :style="`background-image: url(${image.src}) `">
    <div class="card__info">
      <h2>{{ card.header }}</h2>
      <button @click="openDialog">Read more</button>
    </div>

    <dialog :id="`cardDialog_${cardIndex}`" v-show="dialogOpen">
      <button @click="closeDialog">
        <v-icon name="io-close" scale="1.2" />
      </button>

      <div class="margin-left-right">
        <div class="info bottom-border">
          <div class="info--item">
            <div class="icon">
              <v-icon name="io-time-outline" scale="2" />
            </div>
            <div>
              <p>
                <strong>{{ $t("cards.shared.duration") }}</strong>
              </p>
              <p>{{ info.duration }} {{ $t("cards.shared.hours") }}</p>
            </div>
          </div>
          <div class="info--item">
            <div class="icon">
              <v-icon name="fa-bus" scale="2" />
            </div>
            <div>
              <p>
                <strong>{{ $t("cards.shared.departure") }}</strong>
              </p>
              <p>{{ info.departure }}</p>
            </div>
          </div>
        </div>
        <div class="card--header">
          <h2>{{ card.header }}</h2>
        </div>
        <div class="card--text bottom-border">
          <p>{{ card.text }}</p>
        </div>
        <a class="link" :href="link.href">{{ link.text }}</a>
      </div>
    </dialog>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from "vue";
import { CardImage, CardInfo, CardLink, CardText } from "@/types/props";

export default defineComponent({
  name: "card",
  props: {
    image: {
      required: true,
      type: Object as PropType<CardImage>,
    },
    card: {
      required: true,
      type: Object as PropType<CardText>,
    },
    link: {
      required: true,
      type: Object as PropType<CardLink>,
    },
    info: {
      required: true,
      type: Object as PropType<CardInfo>,
    },
    cardIndex: Number,
  },
  setup(props) {
    let cardDialog: HTMLDialogElement;
    onMounted(() => {
      cardDialog = document.getElementById(
        `cardDialog_${props.cardIndex}`
      ) as HTMLDialogElement;
      cardDialog.close();
    });
    let dialogOpen = ref(false);

    const openDialog = () => {
      cardDialog.showModal();
      dialogOpen.value = true;
    };

    const closeDialog = () => {
      dialogOpen.value = false;
      cardDialog.close();
    };

    const show = computed(() =>
      dialogOpen ? `background-image: url(${props.image.src})` : ""
    );

    return { dialogOpen, show, closeDialog, openDialog };
  },
});
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;

  background-repeat: no-repeat;
  background-size: cover;
}

.card {
  width: 26rem;
  height: 20rem;
  border: 1px inset grey;
  box-shadow: 5px 5px grey;
  // border-radius: 5%;
  background-size: cover;

  &__info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      align-self: center;
    }
  }

  h2 {
    padding-bottom: 1rem;
  }

  .margin-left-right {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .info {
    display: flex;
    margin-top: 1rem;
    justify-content: space-evenly;

    strong {
      font-weight: bold;
    }

    &--item {
      display: flex;
      align-items: center;

      p {
        margin: 0;
      }
    }

    .icon {
      margin-right: 0.5rem;
    }
  }

  .card--header {
    margin-top: 1rem;
  }

  .bottom-border {
    padding-bottom: 0.5rem;
    border-bottom: 1px inset grey; //TODO: swap to correct colors.
  }

  .link {
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    &:hover {
      background-color: green; //TODO: swap to correct colors.
      cursor: pointer;
    }
  }
}

dialog {
  display: flex;
  flex-direction: column;

  button {
    border: none;
    background-color: inherit;
    align-self: flex-end;
  }
}
</style>
