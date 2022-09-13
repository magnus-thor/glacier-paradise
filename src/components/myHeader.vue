<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contactUs">Contact Us</router-link>
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
      </select>
      <nav>
      </nav>
    </div>
  </div>
</template>
<script>

export default {
  name: "MyHeader",
};
</script>
<style lang="sass">

</style>
