import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const colors = {
  primary: '#1a365d',
  primaryAccent: '#ffffff',
}

const styles = {
  global: {
    'html, body': {
      height: '100%',
      bg: 'gray.50',
    },

    '#__next': {
      height: '100%',
      bg: 'gray.50',
    },
  },
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

export const theme = extendTheme({
  colors,
  styles,
  config,
})
