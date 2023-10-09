<template>
  <aside class="form-container">
    <h2>{{ $t("contactUs.header") }}</h2>
    <form
      name="contact-us"
      method="POST"
      ref="form"
      class="form-grid"
      @submit.prevent="submitForm"
    >
      <input type="hidden" name="form-name" value="contact-us" />
      <div class="input-fields">
        <div class="name">
          <label for="text">{{ $t("contactUs.inputFieldLabels.name") }}:</label>
          <input
            id="text"
            type="text"
            name="username"
            required
            @focus="formFocussed"
          />
        </div>
        <div class="email">
          <label for="email"
            >{{ $t("contactUs.inputFieldLabels.email") }}:</label
          >
          <input
            id="email"
            type="email"
            name="email"
            required
            @focus="formFocussed"
          />
        </div>
        <div class="subject">
          <label for="subject"
            >{{ $t("contactUs.inputFieldLabels.subject") }}:</label
          >
          <input
            id="subject"
            type="text"
            name="subject"
            required
            :value="subject ? $t(`contactUs.subject.${subject}`) : ''"
            @focus="formFocussed"
          />
        </div>
      </div>
      <div class="message">
        <label for="message"
          >{{ $t("contactUs.inputFieldLabels.message") }}:</label
        >
        <textarea
          id="message"
          name="message"
          required
          @focus="formFocussed"
        ></textarea>
      </div>
      <button class="primary submit" type="submit">
        {{ $t("contactUs.buttons.send") }}
      </button>
      <div
        :class="['notification', submitStatus]"
        v-if="submitStatus !== 'loading'"
      >
        <p v-if="submitStatus === 'success'">Form has been sent</p>
        <p v-if="submitStatus === 'error'">
          Something went wrong please try again or use the Facebook Messenger
          app to reach us
        </p>
      </div>
    </form>
  </aside>
</template>
<script lang="ts" setup>
import { ref } from "vue";

type statusType = "loading" | "success" | "error";

const submitStatus = ref<statusType>("loading");
const form = ref<HTMLFormElement>();
const formInteracted = ref(false);

const { subject } = useRoute().query;

const formFocussed = (event: any) => {
  if (!formInteracted.value && event.target.value > 1) {
    (window as any).beam("/custom-events/contact-us-form-started");
  }
};

const mail = useMail();

const submitForm = async () => {
  try {
    submitStatus.value = "loading";
    await mail.send({
      replyTo: form.value?.email.value,
      subject: form.value?.subject.value,
      text: form.value?.message.value,
      html: `<h1>Nafn: ${form.value?.username.value}</h1><br><p>Netfang: ${form.value?.email.value}</p><br><p>Viðfangsefni: ${form.value?.subject.value}</p><br><p>Netfang: ${form.value?.message.value}</p>`,
    });
    submitStatus.value = "success";
  } catch (error) {
    console.log({ error });
    submitStatus.value = "error";
  }
};
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

.notification {
  margin-top: 1rem;
  padding: 8px;
  font-size: 14px;
  color: $white;
  border-radius: 4px;

  &.success {
    border: 1px solid rgb(4, 87, 4);
    background-color: green;
  }

  &.error {
    border: 1px solid rgb(138, 1, 1);
    background-color: red;
  }
}
</style>
