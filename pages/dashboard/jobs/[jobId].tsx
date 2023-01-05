import { ReactElement } from 'react'
import { useRouter } from 'next/router'

import Seo from '@components/SEO'
import NotFound from '@components/NotFound'
import { Loading } from '@components/Loading'
import DashboardLayout from '@layouts/DashboardLayout'
import { DashboardJobInfo, useJob } from '@features/jobs'

export default function DashboardJobPage() {
  const router = useRouter()
  const jobId = router.query.jobId as string

  const job = useJob({ jobId })

  if (job.isLoading) {
    return <Loading />
  }

  if (!job.data) {
    return <NotFound />
  }

  return (
    <>
      <Seo
        title={`${job.data.position} | ${job.data.location}`}
        info={job.data.info}
      />
      <DashboardJobInfo job={job.data} />
    </>
  )
}

DashboardJobPage.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
)
