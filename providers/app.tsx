import { ReactNode } from 'react'
import { ChakraProvider, GlobalStyle } from '@chakra-ui/react'

import { theme } from '@config/theme'

type AppProviderProps = {
  children: ReactNode
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ChakraProvider>
  )
}
