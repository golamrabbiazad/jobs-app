import { ReactElement } from 'react'
import { Heading, HStack } from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'

import { Seo } from '@components/SEO'
import { Link } from '@components/Link'
import { Loading } from '@components/Loading'
import DashboardLayout from '@layouts/DashboardLayout'
import { useUser } from '@features/auth'
import { JobList, useJobs } from '@features/jobs'

export default function DashboardJobsPage() {
  const user = useUser()

  if (user.isLoading) {
    return <Loading />
  }

  if (!user.data) return null
  
  const jobs = useJobs({
    params: { organizationId: user.data?.organizationId },
  })

  return (
    <>
      <Seo title="Jobs" info="Awesome place for finding your dream jobs." />
      <HStack mb="8" align="center" justifyContent="space-between">
        <Heading>Jobs</Heading>
        <Link
          icon={<PlusSquareIcon />}
          variant="solid"
          href="/dashboard/jobs/create"
        >
          Create Job
        </Link>
      </HStack>
      <JobList
        jobs={jobs.data}
        isLoading={jobs.isLoading}
        organizationId={user.data?.organizationId}
        type="dashboard"
      />
    </>
  )
}

DashboardJobsPage.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
)
