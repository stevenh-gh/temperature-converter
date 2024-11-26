///<reference types="vitest"/>
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
   plugins: [react()],
   test: {
      globals: true,
      setupFiles: "./src/setupTest.ts",
      environment: "jsdom",
   },
   base: "temperature-converter"
});
