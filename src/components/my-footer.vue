<template>
  <div id="footer__container" class="footer__container">
    <div class="company-info">
      <h2>Glacier Paradise</h2>
      <div class="location">
        <p>Arnarstapavegur 2, 356 Snæfellsbær</p>
        <a href="https://goo.gl/maps/wJ1brAWbtDX9m1aD9" class="flip">
          <v-icon name="oi-location" scale="1.2" color="#d4af37" />
        </a>
      </div>
      <p>+354 8612844</p>
      <p>+354 8657402</p>
    </div>
    <div class="iceland-map">
      <p class="reykjavik">Reykjavik</p>
      <p class="arnarstapi">Arnarstapi</p>
      <img src="/logos/Map_Of_Iceland_clip_art_medium.png" alt="glacier" />
    </div>
    <div class="right-side">
      <div class="logos">
        <a class="logo" href="https://www.instagram.com/glacier.paradise/"><img src="/logos/instagram-logo.png"
            alt="Instagram" /></a>
        <a class="logo" href="https://www.facebook.com/glacierparadise"><img src="/logos/facebook-logo.png"
            alt="Facebook" /></a>
        <a class="logo clicky" title="Privacy-friendly Web Analytics" href="https://clicky.com/101385907"><img
            alt="Clicky" src="https://static.getclicky.com/media/links/badge.gif" border="0" /></a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "myFooter",
});
</script>
<style lang="scss" scoped>
@import "@/assets/base.scss";

.footer__container {
  height: $footer_height;
  background-color: $sapphire_blue;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  box-sizing: border-box;

  &.hide {
    display: none;
  }
}

.company-info {
  padding-left: 1rem;

  .location {
    display: flex;
    align-items: end;
  }

  h2 {
    color: $yellow;
    font-size: 0.9rem;
  }

  p {
    color: $white;
    font-size: 0.7rem;
  }
}

.iceland-map {
  position: relative;
  justify-self: center;
  font-size: 0.6rem;

  .reykjavik {
    position: absolute;
    top: 45px;
    left: 23px;
  }

  .arnarstapi {
    position: absolute;
    top: 30px;
    left: 10px;
  }

  img {
    width: 100px;
    height: auto;
  }

  @include for-tablet-landscape-up {
    .reykjavik {
      position: absolute;
      top: 96px;
      left: 48px;
    }

    .arnarstapi {
      position: absolute;
      top: 66px;
      left: 20px;
    }

    img {
      width: 200px;
      height: auto;
    }
  }
}

.right-side {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100%;
  box-sizing: border-box;
  padding: 1rem 1rem 3rem 0;

  .certificates {
    justify-self: end;

    img {
      width: 28px;
      height: auto;
    }
  }

  .logos {
    display: flex;
    align-items: end;
    justify-self: end;
    flex-direction: row;

    .logo {
      padding-right: 1rem;

      &:last-of-type {
        padding-right: unset;
      }

      img {
        width: 28px;
        height: auto;
      }

      &.clicky {
        img {
          width: 80px;
          height: auto;
        }
      }
    }

    @include for-tablet-landscape-up {
      .logo {
        padding-right: 2rem;

        img {
          width: 34px;
          height: auto;
        }

        &.clicky {
          img {
            width: 80px;
            height: auto;
          }
        }
      }
    }
  }
}
</style>
