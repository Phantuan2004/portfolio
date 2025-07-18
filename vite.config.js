import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],

  build: {
    sourcemap: false,
  },

  server: {
    port: 3000,
    open: true,
    hmr: true,
    sourcemapIgnoreList: () => true,
  },

  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": resolve(__dirname, "./src"),
      "@routes": resolve(__dirname, "./src/routes"),
      "@components": resolve(__dirname, "./src/components"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@layouts": resolve(__dirname, "./src/layouts"),
    },
  },
});
