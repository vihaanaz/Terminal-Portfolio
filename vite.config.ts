/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
<<<<<<< HEAD
import { defineConfig } from "vitest/config";
=======
import { defineConfig } from "vite";
>>>>>>> a22a5d5eecf2e572f313f84ed8878ea56704c8cb
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
<<<<<<< HEAD
    coverage: {
      provider: 'v8'
    }
=======
>>>>>>> a22a5d5eecf2e572f313f84ed8878ea56704c8cb
  },
});
