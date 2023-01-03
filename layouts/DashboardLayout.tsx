import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Box, Container, Flex, HStack } from '@chakra-ui/react'
import { Button } from '@components/Button'
import { Link } from '@components/Link'
import { Loading } from '@components/Loading'
import { useUser } from '@testing/testData'
import { ReactNode } from 'react'

function Navbar() {
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
              onClick={() => console.log('Logging Out...')}
            >
              Log Out
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const user = useUser()

  return (
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
  )
}
