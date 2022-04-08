<template>
  <div>Contact us area</div>
  <div class="form">
    <form name="contact" method="POST" netlify>
      <p>
        <label>
          Your Name:
          <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email:
          <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
</template>
<script>
export default {
  name: "ContactUs",
};
</script>
<style lang="scss">
.form {
  border: 1px solid;
  width: 25rem;
  margin: 2rem;

  p {
    margin: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.2em;
  }
}
</style>
