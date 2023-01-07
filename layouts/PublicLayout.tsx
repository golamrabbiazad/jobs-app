import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

import { Link } from '@components/Link'

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <Box maxW="container.lg" mx="auto" h="full">
      <Box minH="80%" mx="4">
        {children}
      </Box>

      <Box py="8" textAlign="center">
        Powered by <Link href="/">CSE TIMES</Link>
      </Box>
    </Box>
  )
}
