import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  test: {
    globals: true,          // use global functions like describe, it
    environment: "jsdom",   // simulate browser environment
    setupFiles: "./src/setupTests.js", // optional setup file
  },
});
