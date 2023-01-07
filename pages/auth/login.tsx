import { ReactElement } from 'react'
import { useRouter } from 'next/router'

import { Seo } from '@components/SEO'
import AuthLayout from '@layouts/AuthLayout'
import { LoginForm } from '@features/auth/components'

export default function LoginPage() {
  const router = useRouter()

  const onSuccess = () => {
    const redirect = router.query.redirect as string
    router.replace(redirect || '/dashboard/jobs')
  }

  return (
    <>
      <Seo title="Sign In | Job App" info="sign in to job app" />
      <LoginForm onSuccess={onSuccess} />
    </>
  )
}

LoginPage.getLayout = (page: ReactElement) => (
  <AuthLayout title="Sign In">{page}</AuthLayout>
)
