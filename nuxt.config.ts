import { resolve } from "path";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  content: {
    // Array w/ String doesn't work
    // sources: ["snippets"],

    // ...doesn't work either
    sources: [
      {
        name: "snippets",
        driver: "fs",
        prefix: "/snippets",
        base: resolve(__dirname, "snippets"), // Path for source directory
      },
    ],
  },
});
