import { useQuery } from '@tanstack/react-query'

import { apiClient } from '@lib/apiClient'
import { AuthUser } from '../types'

export const getAuthUser = (): Promise<AuthUser> => {
  return apiClient.get('/auth/me')
}

export const useUser = () => {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ['auth-user'],
    queryFn: () => getAuthUser(),
  })

  return { data, isLoading }
}
