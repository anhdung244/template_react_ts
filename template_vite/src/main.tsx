import "@mantine/core/styles.css"
import "@mantine/core/styles/global.css"
import "./configs/i18n.ts"
import "./index.css"

import { MantineProvider } from "@mantine/core"
import { QueryClientProvider } from "@tanstack/react-query"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./app.tsx"
import { queryClient } from "./configs/query-client.ts"
import theme from "./modules/todo/configs/theme.ts"

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider defaultColorScheme="auto" theme={theme} withCssVariables>
        <App />
      </MantineProvider>
    </QueryClientProvider>
  </StrictMode>,
)
