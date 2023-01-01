import { Heading, Stack } from '@chakra-ui/react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import Seo from '@components/SEO'
import { ReactElement } from 'react'
import PublicLayout from '@layouts/PublicLayout'
import NotFound from '@components/NotFound'
import { OrganizationInfo } from '@features/organizations'

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
      <Seo title={organization.name} description={organization.info} />
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

async function getOrganization(organizationId: string) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve('bye')
    }, 1000)
  )
}

async function getJobs(organizationId: string) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve('helloe')
    }, 1000)
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const organizationId = params?.organizationId as string

  const [organization, jobs] = await Promise.all([
    getOrganization(organizationId).catch(() => null),
    getJobs(organizationId).catch(() => [] as Job[]),
  ])

  return {
    props: {
      organization,
      jobs,
    },
  }
}
