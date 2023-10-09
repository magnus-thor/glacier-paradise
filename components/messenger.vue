<template>
  <div>
    <div id="fb-root"></div>
    <div id="fb-customer-chat" class="fb-customerchat"></div>
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      type: "text/javascript",
      hid: "fb-customer-chat",
      body: true,
      innerHTML: `
          var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page_id", "519185738148188");
          chatbox.setAttribute("attribution", "biz_inbox");

          window.fbAsyncInit = function () {
            FB.init({
              xfbml: true,
              version: "v15.0",
            });
          };

          (function (d, s, id) {
            var js,
              fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src =
              "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
            fjs.parentNode.insertBefore(js, fjs);
          })(document, "script", "facebook-jssdk");
          `,
    },
  ],
});
</script>

<style lang="scss" scoped></style>
