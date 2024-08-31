import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "happy-dom",
    alias: { "@/": new URL("./src/", import.meta.url).pathname },
  },
});
