<template>
  <div class="footer__container">
    <a class="logo" href="https://www.instagram.com/glacier.paradise/"
      ><img src="/logos/instagram-logo.png" alt="Instagram"
    /></a>
    <a class="logo" href="https://www.facebook.com/glacierparadise"
      ><img src="/logos/facebook-logo.png" alt="Facebook"
    /></a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyFooter",
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
}
</style>
