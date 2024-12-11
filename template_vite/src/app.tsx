import { useEffect } from "react"

import Layout from "./components/layout"

const App = () => {
  useEffect(() => {
    const handlePreloadError = () => {
      globalThis.location.reload()
    }

    globalThis.addEventListener("vite:preloadError", handlePreloadError)

    return () => {
      globalThis.removeEventListener("vite:preloadError", handlePreloadError)
    }
  }, [])

  return <Layout />
}

export default App
