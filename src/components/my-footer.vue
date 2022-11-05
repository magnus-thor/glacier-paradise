<template>
  <div class="footer__container">
    <a class="logo" href="https://www.instagram.com/glacier.paradise/"
      ><img src="/logos/instagram-logo.png" alt="Instagram"
    /></a>
    <a class="logo" href="https://www.facebook.com/glacierparadise"
      ><img src="/logos/facebook-logo.png" alt="Facebook"
    /></a>
    <a
      class="logo clicky"
      title="Privacy-friendly Web Analytics"
      href="https://clicky.com/101385907"
      ><img
        alt="Clicky"
        src="https://static.getclicky.com/media/links/badge.gif"
        border="0"
    /></a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "myFooter",
});
</script>
<style lang="scss">
.footer__container {
  border: 1px solid;
  height: 5rem;
}

.logo {
  padding-left: 2rem;
  img {
    width: 30px;
    height: auto;
  }

  &.clicky {
    img {
      width: 80px;
      height: auto;
    }
  }
}
</style>
