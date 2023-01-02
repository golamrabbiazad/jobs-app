import { ReactElement } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import Seo from '@components/SEO'
import { getJob, getOrganization } from '@testing/testData'
import { Button, Stack } from '@chakra-ui/react'
import { PublicJobInfo } from '@features/jobs/components/PublicJobInfo'
import PublicLayout from '@layouts/PublicLayout'
import NotFound from '@components/NotFound'

type PublicJobPageProps = InferGetServerSidePropsType<typeof getServerSideProps>

export default function PublicJobPage({
  job,
  organization,
}: PublicJobPageProps) {
  const isInvalid =
    !job || !organization || organization.id !== job.organizationId

  if (isInvalid) {
    return <NotFound />
  }

  return (
    <>
      <Seo title={`${job?.position} | ${job?.location}`} info={job?.info} />
      <Stack w="full">
        <PublicJobInfo job={job} />
        <Button
          bg="primary"
          color="primaryAccent"
          _hover={{ opacity: 0.9 }}
          as="a"
          href={`mailto:${organization?.email}?subject=Application for ${job?.position} position`}
          target="_blank"
        >
          Apply
        </Button>
      </Stack>
    </>
  )
}

PublicJobPage.getLayout = (page: ReactElement) => (
  <PublicLayout>{page}</PublicLayout>
)

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const organizationId = params?.organizationId as string
  const jobId = params?.jobId as string

  const [organization, job] = await Promise.all([
    getOrganization(organizationId).catch(() => null),
    getJob(jobId).catch(() => null),
  ])
  return {
    props: {
      organization,
      job,
    },
  }
}
