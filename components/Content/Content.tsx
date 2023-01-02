import { Box } from '@chakra-ui/react'

export function Content({ children }: { children: string }) {
  return (
    <Box lineHeight="7" letterSpacing="wide" my="4">
      {children}
    </Box>
  )
}
