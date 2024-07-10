import { QueryClient, QueryClientConfig } from '@tanstack/react-query'

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
    },
  },
}

const queryClient = new QueryClient(queryClientConfig)

export default queryClient
