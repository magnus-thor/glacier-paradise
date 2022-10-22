import { fileURLToPath, URL } from "url";
import { join } from "path";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import mdPlugin, { Mode } from "vite-plugin-markdown";

const root = join(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, root);
  return {
    plugins: [vue(), mdPlugin({ mode: [Mode.VUE] })],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    optimizeDeps: {
      exclude: ["oh-vue-icons/icons"],
    },
    server: {
      port: 8000,
    },
    css: { preprocessorOptions: { css: { charset: false } } },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            home: ["./src/views/Home.vue"],
            about: ["./src/views/About.vue"],
            "contact-us": ["./src/views/ContactUs.vue"],
            terms: ["./src/views/Terms.vue"],
          },
        },
      },
    },
  };
});
