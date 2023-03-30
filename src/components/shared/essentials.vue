<template>
  <dialog id="essentials-dialog" :open="Store.isDialogOpen">
    <div class="dialog--container" ref="dialogTop">
      <div class="icon">
        <h2>{{ $t("essentials.header") }}</h2>
        <v-icon
          name="io-close"
          scale="2"
          color="white"
          @click="closeDialog()"
          :aria-label="$t('essentials.closeIconAriaLabel')"
        />
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
      <button class="primary dialog-button" @click="closeDialog">
        {{ $t("essentials.closeButton") }}
      </button>
    </div>
  </dialog>
</template>

<script lang="ts">
import useDetectOutsideClick from "@/composables/detectClickOutside";
import { IStore } from "@/interfaces/store";
import { defineComponent, inject, Ref, ref, watchEffect } from "vue";

export default defineComponent({
  name: "essentials",
  setup() {
    const isOpen = ref(false);
    const dialogTop = ref<HTMLDialogElement>(null);

    const Store: IStore = inject("Store");
    const closeDialog = () => {
      console.log("openDialog");

      Store.isDialogOpen = false;
    };

    watchEffect(() => {
      if (Store.isDialogOpen) {
        setTimeout(() => {
          dialogTop.value.scrollIntoView();
        }, 5);
      }
    });

    // TODO: Listen to clicks outside and ESC key
    // const listener = useDetectOutsideClick(dialogTop.value, closeDialog);
    return { closeDialog, Store, dialogTop };
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/base.scss";
//TODO: add grayed out surrounding dialog
dialog {
  z-index: 999;
  margin-top: $header_height + 8rem;
  background-color: $sapphire_blue;
}

.dialog--container {
  display: grid;
  box-sizing: border-box;
  padding: 0.5rem;
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

.icon {
  display: grid;
  grid-template-columns: 6fr 1fr;

  svg {
    justify-self: end;
  }
}

@include for-tablet-portrait-up {
  dialog {
    width: 70vh;
  }
}

@include for-desktop-up {
  dialog {
    width: 60vh;
  }
}
</style>
