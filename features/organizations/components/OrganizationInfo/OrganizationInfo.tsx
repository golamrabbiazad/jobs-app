import { Heading, Stack } from '@chakra-ui/react'

import { Organization } from '@features/organizations/types'

export function OrganizationInfo({
  organization,
}: {
  organization: Organization
}) {
  return (
    <>
      <Stack
        w="full"
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
      >
        <Heading>{organization.name}</Heading>
        <Stack
          w={{ base: 'full', md: 'auto' }}
          direction={{ base: 'column', md: 'row' }}
        >
          <InfoCard label="Email" value={organization.email} />
          <InfoCard label="Phone Number" value={organization.phone} />
        </Stack>
      </Stack>

      <Content>{organization.info}</Content>
    </>
  )
}
