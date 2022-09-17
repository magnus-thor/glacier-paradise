<template>
  <div class="card">
    <img :src="renderImage" :alt="image.alt" />
    <div class="margin-left-right">
      <div class="info bottom-border">
        <div class="info--item">
          <div class="icon">
            <v-icon name="io-time-outline" scale="2" />
          </div>
          <div>
            <p>
              <strong>{{ $t("cards.shared.departure") }}</strong>
            </p>
            <p>{{ info.duration }}</p>
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
  },
  data() {
    return {};
  },
  computed: {
    renderImage() {
      return new URL(this.image.src, import.meta.url);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 26rem;
  border: 1px inset grey;
  box-shadow: 5px 5px grey;

  h2 {
    padding-bottom: 1rem;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
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

.flex {
  display: flex;
}
</style>
