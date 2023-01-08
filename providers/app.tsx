import { ReactNode } from 'react'
import { ChakraProvider, GlobalStyle } from '@chakra-ui/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ErrorBoundary } from 'react-error-boundary'

import { theme } from '@config/theme'
import { queryClient } from '@lib/reactQuery'
import { Notifications } from '@components/Notifications'

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary
        fallback={<div>Something went wrong!</div>}
        onError={console.error}
      >
        <GlobalStyle />
        <Notifications />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          {children}
        </QueryClientProvider>
      </ErrorBoundary>
    </ChakraProvider>
  )
}
