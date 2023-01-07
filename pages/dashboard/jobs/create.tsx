import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import { Heading } from '@chakra-ui/react'

import { Seo } from '@components/SEO'
import DashboardLayout from '@layouts/DashboardLayout'
import { CreateJobForm } from '@features/jobs'

export default function DashboardCreateJobPage() {
  const router = useRouter()

  const onSuccess = () => {
    router.push('/dashboard/jobs')
  }

  return (
    <>
      <Seo
        title="Create Job | Job App"
        info="Find and Apply your dream jobs."
      />
      <Heading mb="8">Create Job</Heading>
      <CreateJobForm onSuccess={onSuccess} />
    </>
  )
}

DashboardCreateJobPage.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
)
