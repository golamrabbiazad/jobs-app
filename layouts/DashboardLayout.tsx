import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Box, Container, Flex, HStack } from '@chakra-ui/react'

import { Link } from '@components/Link'
import { Button } from '@components/Button'
import { useLogout, useUser } from '@features/auth/api'
import { Protected } from '@features/auth/components'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const user = useUser()

  return (
    <Protected>
      <Box as="section" h="100vh" overflowY="auto">
        <Navbar />
        <Container as="main" maxW="container.lg" py="12">
          {children}
        </Container>
        <Box py="8" textAlign="center">
          <Link href={`/organizations/${user.data?.organizationId}`}>
            View Public Organization Page
          </Link>
        </Box>
      </Box>
    </Protected>
  )
}

function Navbar() {
  const router = useRouter()
  const logout = useLogout({
    onSuccess: () => router.push('/auth/login'),
  })

  return (
    <Box as="nav" bg="primary" color="primaryAccent">
      <Container maxW="container.lg" size="3xl" py="3">
        <Flex justify="space-between">
          <HStack>
            <Link href="/" variant="solid">
              Jobs App
            </Link>
            <HStack spacing="1">
              <Link
                href="/dashboard/jobs"
                variant="solid"
                icon={<InfoOutlineIcon />}
              >
                Jobs
              </Link>
            </HStack>
          </HStack>
          <HStack>
            <Button
              variant="outline"
              isDisabled={logout.isLoading}
              isLoading={logout.isLoading}
              onClick={() => logout.submit()}
            >
              Log Out
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
