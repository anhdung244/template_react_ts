import { DefaultOptions, QueryClient } from "@tanstack/react-query"

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * 2, // 2 minutes by default
  },
}

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
})
