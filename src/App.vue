<template>
  <div class="mainLayout">
    <header>
      <my-header />
    </header>


    <main class="content">
      <router-view />

    </main>

    <footer class="footer">
      <my-footer />
    </footer>
  </div>
</template>
<script>
import MyHeader from "@/components/myHeader.vue";
import MyFooter from "@/components/myFooter.vue";

export default {
  name: "App",
  components: { MyHeader, MyFooter },
};
</script>
<style lang="scss">
@import "./assets/base.css";


.mainLayout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1 0 auto;
}

.footer {
  flex-shrink: 0;
  // margin-top: auto;
}
</style>
