<template>
  <div class="top-of-the-diamond-tour--container">
    <div class="image">
      <img src="/images/toppur_panorama-resized.jpg" alt="" />
    </div>
    <!-- <div class="header--container">
      <h1>Top of the diamond</h1>
    </div> -->
    <div class="content--wrapper">
      <p>Info content 1</p>
      <p>Info content 2</p>
      <p>Info content 3</p>
    </div>
    <aside class="sidebar--container">
      <h2>{{ $t("topOfTheDiamond.header") }}</h2>
      <p>{{ $t("topOfTheDiamond.p1") }}</p>
      <p>{{ $t("topOfTheDiamond.p2") }}</p>
      <p>{{ $t("topOfTheDiamond.p3") }}</p>
      <p>{{ $t("topOfTheDiamond.p4") }}</p>
      <button
        class="bokunButton"
        disabled
        id="bokun_b3447b9e_8bf3_4090_a58d_8b930ced9c1d"
        data-src="https://widgets.bokun.io/online-sales/a5fa0d8d-ffc2-431e-bece-86e5d8fa2d7c/experience-calendar/17979?partialView=1"
        data-testid="widget-book-button"
      >
        Book now
      </button>
    </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "snowCatTour",
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.top-of-the-diamond-tour--container {
  display: grid;
  grid-template-columns: 1fr;

  .image {
    grid-area: 1/1/-1/-1;
    img {
      display: block;
      width: 100%;
    }
  }

  .header--container {
    grid-area: 1/1/-1/-1;
    color: $white;
    padding-top: 1.5rem;
    padding-left: 2rem;
  }

  .content--wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2rem;
    justify-items: center;
    box-sizing: border-box;
  }

  .sidebar--container {
    display: grid;
    background-color: $dark_grey;
    box-sizing: border-box;
    padding: 2rem 2rem;

    h2 {
      color: $yellow;
    }

    p {
      color: $white;
      padding: 0.5rem 0;
    }
  }

  @include for-tablet-landscape-up {
    $row1-height: 50vh;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: $row1-height;

    .image {
      grid-area: 1/1/-1/-1;
      img {
        height: $row1-height;
        display: block;
      }
    }

    .content--wrapper {
      grid-area: 2/1/3/3;
      // max-width: 60%;
    }

    .sidebar--container {
      grid-area: 1/3/3/4;
      align-self: center;
      margin-right: 3rem;
      margin: 1rem 2rem 1rem 0;
      background-color: rgba($dark_grey, 0.9);
    }
  }

  @include for-medium-desktop-up {
    $row1-height: 40vh;
    grid-template-rows: $row1-height;
    .image {
      img {
        display: block;
        height: $row1-height;
      }
    }

    .content--wrapper {
      // width: 75%;
    }

    .sidebar--container {
      margin-right: 5rem;
    }
  }
}

// BOKUN
.bokunButton {
  margin-top: 1rem;
  display: inline-block;
  padding: 10px 20px;
  background: #d4af37;
  border-radius: 5px;
  box-shadow: none;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  color: #43464e;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
  margin: auto;
  // height: 2rem;
  // width: 10rem;
}

.bokunButton:hover {
  background: #9d8022;
}

.bokunButton:active {
  background: #b29126;
}

.widgetRoot {
  background-color: yellow;
}

.bk-widget-container {
  /* Change the font color to red */
  color: red;
}
</style>
