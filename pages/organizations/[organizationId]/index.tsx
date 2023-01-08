import { ReactElement } from 'react'
import { Heading, Stack } from '@chakra-ui/react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { Seo } from '@components/SEO'
import { NotFound } from '@components/NotFound'
import PublicLayout from '@layouts/PublicLayout'
import { JobList, Job, getJobs } from '@features/jobs'
import { OrganizationInfo, getOrganization } from '@features/organizations'

type PublicOrganizationPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>

export default function PublicOrganizationPage({
  organization,
  jobs,
}: PublicOrganizationPageProps) {
  if (!organization) return <NotFound />

  return (
    <>
      <Seo title={organization.name} info={organization.info} />
      <Stack spacing="4" w="full" maxW="container.lg" mx="auto" mt="12" p="4">
        <OrganizationInfo organization={organization} />
        <Heading size="md" my="6">
          Open Jobs
        </Heading>
        <JobList jobs={jobs} organizationId={organization.id} type="public" />
      </Stack>
    </>
  )
}

PublicOrganizationPage.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const organizationId = params?.organizationId as string

  const [organization, jobs] = await Promise.all([
    getOrganization({ organizationId }).catch(() => null),
    getJobs({ params: { organizationId: organizationId } }).catch(
      () => [] as Job[]
    ),
  ])

  return {
    props: {
      organization,
      jobs,
    },
  }
}
