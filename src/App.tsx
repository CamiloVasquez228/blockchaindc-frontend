import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import queryClient from 'config/queryClient/queryClient.config'
import Routes from 'site/routes'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
