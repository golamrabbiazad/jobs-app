import { Center, Heading, Text, VStack } from '@chakra-ui/react'
import { Link } from '@components/Link'
import Seo from '@components/SEO'

export default function Home() {
  return (
    <>
      <Seo title="Jobs App" info="Find and Apply your dream jobs." />
      <Center h="full" flexDirection="column">
        <VStack maxW="3xl" spacing="8">
          <Heading size="3xl">Jobs App</Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="2xl" color="muted">
            Manage your careers pages
          </Text>
          <Link href={`/dashboard/jobs`} variant="solid">
            Get Started
          </Link>
        </VStack>
      </Center>
    </>
  )
}
