import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Flex } from '@chakra-ui/react'

import { useUser } from '@features/auth/api'
import { Loading } from '@components/Loading'

export function Protected({ children }: { children: ReactNode }) {
  const { replace, asPath } = useRouter()
  const user = useUser()

  console.log(user)

  useEffect(() => {
    if (!user.data && !user.isLoading) {
      replace(`/auth/login?redirect=${asPath}`, undefined, { shallow: true })
    }
  }, [user, asPath, replace])

  if (user.isLoading) {
    return (
      <Flex direction="column" justify="center" h="full">
        <Loading />
      </Flex>
    )
  }

  if (!user.data && !user.isLoading) return null

  return <>{children}</>
}
