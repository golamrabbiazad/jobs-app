import { useMutation } from '@tanstack/react-query'

import { apiClient } from '@lib/apiClient'
import { queryClient } from '@lib/reactQuery'
import { AuthUser, LoginData } from '../types'

export const login = (data: LoginData): Promise<{ user: AuthUser }> => {
  return apiClient.post('/auth/login', data)
}

type UseLoginOptions = {
  onSuccess?: (user: AuthUser) => void
}

export const useLogin = ({ onSuccess }: UseLoginOptions = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(['auth-user'], user)
      onSuccess?.(user)
    },
  })

  return { submit, isLoading }
}
