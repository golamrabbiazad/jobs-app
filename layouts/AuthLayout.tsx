import { ReactNode } from 'react'
import { Box, Center, Container, Heading, Stack } from '@chakra-ui/react'

import { Link } from '@components/Link'

export default function AuthLayout({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <Center h="full">
      <Container maxW="lg">
        <Box p="8" bg="white" boxShadow="md" borderRadius="xl">
          <Stack spacing="8">
            <Heading textAlign="center">{title}</Heading>
            {children}
          </Stack>
          <Box mt="8" textAlign="center">
            <Link href="/">Job App</Link>
          </Box>
        </Box>
      </Container>
    </Center>
  )
}
