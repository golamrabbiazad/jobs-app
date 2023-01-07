import { useQuery } from '@tanstack/react-query'

import { apiClient } from '@lib/apiClient'
import { Job } from '../types'

export const getJob = ({ jobId }: { jobId: string }): Promise<Job> => {
  return apiClient.get(`/jobs/${jobId}`)
}

export const useJob = ({ jobId }: { jobId: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['jobs', jobId],
    queryFn: () => getJob({ jobId }),
  })

  return {
    data,
    isLoading,
  }
}
