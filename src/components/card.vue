<template>
  <div
    :class="{ 'modal-overlay': dialogOpen }"
    id="modal-overlay"
    :style="show"
  ></div>

  <div class="card" :style="`background-image: url(${this.image.src}) `">
    <div class="card__info">
      <h2>{{ card.header }}</h2>
      <button @click="openDialog">Read more</button>
    </div>

    <dialog :id="`cardDialog_${cardIndex}`">
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

<script>
export default {
  name: "card",
  props: {
    image: { src: String, alt: String },
    card: { header: String, text: String },
    link: { text: String, href: String },
    info: {
      duration: String,
      departure: String,
    },
    cardIndex: String,
  },
  mounted() {
    this.cardDialog = document.getElementById(`cardDialog_${this.cardIndex}`);
  },
  data() {
    return {
      dialogOpen: false,
      cardDialog: "",
    };
  },

  methods: {
    openDialog() {
      if (typeof this.cardDialog.showModal === "function") {
        this.cardDialog.showModal();
        this.dialogOpen = true;
      } else {
        outputBox.value =
          "Sorry, the <dialog> API is not supported by this browser.";
      }
    },
    closeDialog() {
      this.dialogOpen = false;
      this.cardDialog.close();
    },
  },
  computed: {
    show() {
      return this.dialogOpen ? `background-image: url(${this.image.src})` : "";
    },
  },
};
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
