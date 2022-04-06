<template>
  <div class="mainLayout">
    <header>
      <my-header />
    </header>

    <main>
      <main-area />
      <about-us />
      <contact-us />
    </main>

    <footer>
      <my-footer />
    </footer>
  </div>
</template>
<script>
import ContactUs from './components/contactUs.vue'
import AboutUs from './components/aboutUs.vue'
import MainArea from './components/mainArea.vue'
import MyHeader from "./components/myHeader.vue";
import MyFooter from "./components/myFooter.vue";

export default {
  name: "App",
  components: { MyHeader, MyFooter, MainArea, AboutUs, ContactUs }
}
</script>
<style lang="scss">
@import "./assets/base.css";

.mainLayout {
  display: grid;
  grid-template-rows: 5rem 2fr 2fr 2fr 5rem;
  grid-template-areas:
    "header"
    "main"
    "aboutUs"
    "contactUs"
    "footer";
}

my-header {
  grid-area: header;
}

main-area {
  grid-area: main;
}

about-us {
  grid-area: aboutUs;
}

contact-us {
  grid-area: contactUs;
}

my-footer {
  grid-area: footer;
}
</style>