import { onBeforeUnmount, onMounted } from "vue";

export default function useDetectOutsideClick(
  component: any,
  callback: () => void
) {
  if (!component) return;
  const listener = (event: {
    target: any;
    composedPath: () => string | any[];
  }) => {
    if (
      event.target !== component.value &&
      event.composedPath().includes(component.value)
    ) {
      return;
    }
    if (typeof callback === "function") {
      callback();
    }
  };
  onMounted(() => {
    window.addEventListener("click", listener);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", listener);
  });

  return { listener };
}

// //@ts-ignore
// export default function useDetectOutsideClick(component, callback) {
//   if (!component) return;
//   //@ts-ignore
//   const listener = (event) => {
//     if (
//       event.target !== component.value &&
//       event.composedPath().includes(component.value)
//     ) {
//       return;
//     }
//     if (typeof callback === "function") {
//       callback();
//     }
//   };
//   onMounted(() => {
//     window.addEventListener("click", listener);
//   });
//   onBeforeUnmount(() => {
//     window.removeEventListener("click", listener);
//   });

//   return { listener };
// }
