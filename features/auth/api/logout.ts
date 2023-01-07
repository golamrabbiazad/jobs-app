import { apiClient } from '@lib/apiClient'
import { queryClient } from '@lib/reactQuery'
import { useMutation } from '@tanstack/react-query'

export const logout = () => {
  return apiClient.post('/auth/logout')
}

type UseLogoutOptions = {
  onSuccess?: () => void
}

export const useLogout = ({ onSuccess }: UseLogoutOptions = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.clear()
      onSuccess?.()
    },
  })

  return { submit, isLoading }
}
