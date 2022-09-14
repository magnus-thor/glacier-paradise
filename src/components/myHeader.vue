<template>
  <div class="header">
    <div class="item">
      <router-link to="/">Home</router-link>
    </div>
    <div class="item">
      <router-link to="/about">About</router-link>
    </div>
    <div class="item">
      <router-link to="/contactUs">Contact Us</router-link>
    </div>
    <div class="item">
      <router-link to="/terms">Terms</router-link>
    </div>
    <div class="item">
      <div class="locale-changer">
        <select v-model="$i18n.locale">
          <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}
          </option>
        </select>
        <nav>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "MyHeader",
};
</script>
<style lang="scss">
.header {
  padding: 1rem 5rem 0 5rem;
  display: flex;

  .item {
    padding-right: 2rem;

    &:last-of-type {
      margin-left: auto;
    }
  }
}
</style>
