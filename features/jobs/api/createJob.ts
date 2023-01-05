import { useMutation } from '@tanstack/react-query'

import { apiClient } from '@lib/apiClient'
import { queryClient } from '@lib/reactQuery'
import { CreateJobData, Job } from '../types'

export const createJob = ({ data }: { data: CreateJobData }): Promise<Job> => {
  return apiClient.post('/jobs', data)
}

type UseCreateJobOptions = {
  onSuccess?: (job: Job) => void
}

export const useCreateJob = ({ onSuccess }: UseCreateJobOptions = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: createJob,
    onSuccess: (job) => {
      queryClient.invalidateQueries(['jobs'])
      onSuccess?.(job)
    },
  })

  return {
    submit,
    isLoading,
  }
}
