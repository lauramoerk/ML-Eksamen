// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        program: resolve(__dirname, "src/program.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),
        om: resolve(__dirname, "src/om.html"),
        nyheder: resolve(__dirname, "src/nyheder.html"),
        lineup: resolve(__dirname, "src/lineup.html"),
        frivillig: resolve(__dirname, "src/frivillig.html"),
        faq: resolve(__dirname, "src/faq.html"),
        billetter: resolve(__dirname, "src/billetter.html"),
        artist: resolve(__dirname, "src/artist.html"),
        ansog: resolve(__dirname, "src/ansog.html"),
        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
