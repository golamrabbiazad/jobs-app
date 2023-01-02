import { ViewIcon } from '@chakra-ui/icons'
import { Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { Content } from '@components/Content'
import { Link } from '@components/Link'
import { Job } from '../../types'

export function PublicJobInfo({ job }: { job: Job }) {
  return (
    <>
      <VStack pt="16" pb="4" spacing="8">
        <Heading size="2xl">{job?.position}</Heading>
        <HStack spacing="12">
          <Text>{job?.department}</Text>
          <Text>{job?.location}</Text>
        </HStack>
        <Link
          href={`/organizations/${job?.organizationId}`}
          variant="outline"
          icon={<ViewIcon />}
        >
          View More Jobs
        </Link>
      </VStack>
      <Content>{job?.info}</Content>
    </>
  )
}
