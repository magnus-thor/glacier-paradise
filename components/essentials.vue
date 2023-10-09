<template>
  <dialog id="essentials-dialog"  ref="dialogTop">
    <div class="dialog--container" v-click-outside="closeDialog">
      <div class="dialog-header">
        <h2>{{ $t("essentials.header") }}</h2>
        <v-icon name="io-close" scale="2" color="white" @click="closeDialog()"
          :aria-label="$t('essentials.closeIconAriaLabel')" class="close-icon" tabindex="0" />
      </div>
      <p>
        {{ $t("essentials.description") }}
      </p>
      <h3>{{ $t("essentials.clothing_section.header") }}</h3>
      <ul>
        <li>
          {{ $t("essentials.clothing_section.listItems.one") }}
        </li>
        <li>{{ $t("essentials.clothing_section.listItems.two") }}</li>
        <li>{{ $t("essentials.clothing_section.listItems.three") }}</li>
        <li>{{ $t("essentials.clothing_section.listItems.four") }}</li>
      </ul>
      <h3>{{ $t("essentials.other_essentials_section.header") }}</h3>
      <ul>
        <li>
          {{ $t("essentials.other_essentials_section.listItems.one") }}
        </li>
        <li>{{ $t("essentials.other_essentials_section.listItems.two") }}</li>
        <li>{{ $t("essentials.other_essentials_section.listItems.three") }}</li>
      </ul>
      <p>
        {{ $t("essentials.disclaimer") }}
      </p>
      <button class="primary dialog-button" @click="closeDialog" autofocus>
        {{ $t("essentials.closeButton") }}
      </button>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
import { manageDialog } from "@/composables/dialog";
import { ref, watchEffect } from "vue";

const dialogTop = ref<HTMLDialogElement>();

const { hideDialog, isDialogOpen } = manageDialog();
const closeDialog = () => {
  (dialogTop.value as HTMLDialogElement).close();
  hideDialog();
};


watchEffect(() => {
  if (isDialogOpen.value) {
    setTimeout(() => {
      (dialogTop.value as HTMLDialogElement).showModal()
    }, 5);
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

//TODO: add grayed out surrounding dialog
dialog {
  background-color: $sapphire_blue;
  overflow-y: auto;

  &::backdrop {
    background-color: rgba(0,0,0,0.5);
  }
}

.dialog--container {
  display: grid;
  box-sizing: border-box;
  padding: 0.5rem;
  max-width: 95vw;
  max-height: 95vh;
}

h2,
h3 {
  color: $yellow;
}

p,
li {
  color: $white;
}

h2 {
  margin: 0.5rem 0 1rem 0;
}

h3 {
  margin: 1rem 0 0 0;
}

button.dialog-button {
  margin-top: 1rem;
}

.dialog-header {
  display: grid;
  grid-template-columns: 6fr 1fr;

  svg {
    justify-self: end;
  }
}

.close-icon:hover {
  cursor: pointer;
}

@include for-tablet-portrait-up {
  dialog {
    width: 90vh;
  }
}

@include for-desktop-up {
  dialog {
    width: 80vh;
  }
}
</style>
