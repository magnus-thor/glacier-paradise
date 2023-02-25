<template>
  <div class="form">
    <form
      name="contact-us"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      class="form-grid"
    >
      <input type="hidden" name="form-name" value="contact-us" />
      <div class="input-fields">
        <div class="name">
          <label for="text"> Your Name: </label>
          <input id="text" type="text" name="name" required />
        </div>
        <div class="email">
          <label for="email"> Your Email: </label>
          <input id="email" type="email" name="email" required />
        </div>
        <div class="subject">
          <label for="subject"> Subject: </label>
          <input id="subject" type="text" name="subject" />
        </div>
      </div>
      <div class="message">
        <label for="message"> Message: </label>
        <textarea id="message" name="message"></textarea>
      </div>
      <div class="submit"><button type="submit">Send</button></div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactUsForm",
});
</script>
<style lang="scss" scoped>
@import "@/assets/base.scss";

.form {
  margin-top: 3rem;
  width: 100%;

  @media screen and (min-width: $small_screen) {
    width: 65%;
  }

  label {
    display: block;
    margin-bottom: 0.2em;
  }

  .form-grid {
    width: 100%;

    .input-fields {
      width: 100%;
    }

    input {
      width: 100%;
    }

    .message {
      margin-top: 1rem;

      textarea {
        width: 99%;
        width: -webkit-fill-available;
        width: -moz-available;
        height: 10rem;
      }
    }

    .submit {
      button {
        width: 100%;
      }
    }

    @media screen and (min-width: $small_screen) {
      .input-fields {
        display: flex;
      }

      .name,
      .email,
      .subject {
        width: 30%;

        input {
          width: -webkit-fill-available;
          width: -moz-available;
        }
      }

      .name,
      .email {
        margin-right: 5%;
      }
    }
  }
}
</style>
