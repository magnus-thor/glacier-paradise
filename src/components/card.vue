<template>
  <div
    v-if="displayBG"
    :class="{ 'modal-overlay': displayBG }"
    id="modal-overlay"
    :style="show"
  ></div>

  <div class="card">
    <img :src="image.src" :alt="image.alt" />
    <button @click="openDialog">click</button>

    <dialog :id="`cardDialog_${cardIndex}`">
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
        <button @click="closeDialog">ok</button>
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
    cardIndex: Number,
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
      // debugger;
      console.log("closeDialog", this.dialogOpen);
      this.dialogOpen = false;
      this.cardDialog.close();
    },
  },
  computed: {
    show() {
      console.log("show", this.dialogOpen);
      return this.dialogOpen ? `background-image: url(${this.image.src})` : "";
    },
    displayBG() {
      return this.dialogOpen;
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
  border: 1px inset grey;
  box-shadow: 5px -5px grey;
  // border-radius: 5%;

  h2 {
    padding-bottom: 1rem;
  }

  img {
    width: 100%;
    object-fit: fill;
    // border-top-left-radius: 6.5%;
    // border-top-right-radius: 6.5%;
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
</style>
