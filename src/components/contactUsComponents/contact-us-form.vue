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
          <label for="text">
            {{ $t("contactUs.inputFieldLabels.name") }}:
          </label>
          <input id="text" type="text" name="name" required />
        </div>
        <div class="email">
          <label for="email">
            {{ $t("contactUs.inputFieldLabels.email") }}:
          </label>
          <input id="email" type="email" name="email" required />
        </div>
        <div class="subject">
          <label for="subject">
            {{ $t("contactUs.inputFieldLabels.subject") }}:
          </label>
          <input id="subject" type="text" name="subject" />
        </div>
      </div>
      <div class="message">
        <label for="message">
          {{ $t("contactUs.inputFieldLabels.message") }}:
        </label>
        <textarea id="message" name="message"></textarea>
      </div>
      <div class="submit">
        <button type="submit">{{ $t("contactUs.buttons.send") }}</button>
      </div>
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
@import "@/assets/mixins.scss";

.form {
  margin-top: 3rem;
  width: 100%;

  @include for-tablet-portrait-up {
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

    @include for-tablet-portrait-up {
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
