import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  esbuild: {
    jsxFactory: "Ownact.createElement",
    jsxFragment: "Ownact.Fragment",
  },
  server: {
    port: 3050,
  },
});
