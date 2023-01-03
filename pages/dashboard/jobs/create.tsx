import { Heading } from '@chakra-ui/react'
import Seo from '@components/SEO'
import { CreateJobForm } from '@features/jobs/components/CreateJobForm'
import DashboardLayout from '@layouts/DashboardLayout'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

export default function DashboardCreateJobPage() {
  const router = useRouter()

  const onSuccess = () => {
    router.push('/dashboard/jobs')
  }

  return (
    <>
      <Seo title="Create Job" info="Find and Apply your dream jobs." />
      <Heading mb="8">Create Job</Heading>
      <CreateJobForm onSuccess={onSuccess} />
    </>
  )
}

DashboardCreateJobPage.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
)
