import { ref } from "vue";

const isDialogOpen = ref(false);
export const manageDialog = () => {
  const showDialog = () => {
    isDialogOpen.value = true;
  };

  const hideDialog = () => {
    isDialogOpen.value = false;
  };

  return { showDialog, hideDialog, isDialogOpen };
};
