<template>
  <div class="footer__container">My footer goes here</div>
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
</style>
