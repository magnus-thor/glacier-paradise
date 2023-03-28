<template>
  <aside class="form-container">
    <!-- TODO: Add translation -->
    <h2>Contact Us</h2>
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
          <label for="text">{{ $t("contactUs.inputFieldLabels.name") }}:</label>
          <input id="text" type="text" name="name" required />
        </div>
        <div class="email">
          <label for="email"
            >{{ $t("contactUs.inputFieldLabels.email") }}:</label
          >
          <input id="email" type="email" name="email" required />
        </div>
        <div class="subject">
          <label for="subject"
            >{{ $t("contactUs.inputFieldLabels.subject") }}:</label
          >
          <input
            id="subject"
            type="text"
            name="subject"
            :value="
              $route.params.subject
                ? $t(`contactUs.subject.${$route.params.subject}`)
                : ''
            "
          />
        </div>
      </div>
      <div class="message">
        <label for="message"
          >{{ $t("contactUs.inputFieldLabels.message") }}:</label
        >
        <textarea id="message" name="message"></textarea>
      </div>
      <button class="primary submit" type="submit">
        {{ $t("contactUs.buttons.send") }}
      </button>
    </form>
  </aside>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "ContactUsForm",
});
</script>
<style lang="scss" scoped>
@import "@/assets/base.scss";

.form-container {
  background-color: hsl(232, 7%, 28%);
  padding: 1rem;
  color: $yellow;
  box-sizing: border-box;
  min-height: calc(100vh - $header_height - $footer_height - 4rem);
  margin-top: 2rem;

  h2 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    padding: 0 25%;

    .input-fields {
      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      label {
        margin-top: 1rem;
      }

      input {
        color: $dark_grey;
        background-color: $white;
        border: none;
        padding: 0.5rem;
        font-size: 1rem;
        border-radius: 4px;
        box-shadow: 4px 4px black;
        margin-top: 0.3rem;
        transition: box-shadow 0.3s ease-out;

        &:focus {
          box-shadow: 2px 2px black;
          outline: none;
        }
      }

      label {
        font-size: 0.8rem;
        margin-bottom: 0.3rem;
      }
    }

    .message {
      margin: 1.5rem 0;
      display: flex;
      flex-direction: column;

      textarea {
        height: 10rem;
        resize: none;
        background-color: $white;
        border-radius: 4px;
        box-shadow: 4px 4px black;
        transition: box-shadow 0.3s ease-out;
        font-size: 1rem;

        &:focus {
          box-shadow: 2px 2px black;
          outline: none;
        }
      }
    }
  }

  @include for-tablet-landscape-up {
    background-color: hsl(232, 7%, 28%, 0.5);

    form {
      display: flex;
      flex-direction: column;
      margin: 1rem 0;
      padding: 0 1rem;
    }
  }
}
</style>
