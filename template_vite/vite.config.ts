/* eslint-disable unicorn/prefer-module */
import react from "@vitejs/plugin-react"
import path from "node:path"
import { defineConfig } from "vite"
// https://vite.dev/config/
import { adapter, analyzer } from "vite-bundle-analyzer"
export default defineConfig(() => {
  return {
    plugins: [react(), adapter(analyzer())],
    server: {
      port: 3110,
    },
    optimizeDeps: {
      include: ["@mantine/core", "@mantine/hooks"],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
      },
    },
  }
})
