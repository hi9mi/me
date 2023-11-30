import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: "@unocss/reset/tailwind-compat.css"
  }), vue()]
});