import { Box, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { Button } from '@components/Button'
import { InputField } from '@components/Form'
import { CreateJobData } from '../../types'
import { useCreateJob } from '@features/jobs/api/createJob'

export function CreateJobForm({ onSuccess }: { onSuccess: () => void }) {
  const createJob = useCreateJob({ onSuccess })

  const { register, handleSubmit, formState } = useForm<CreateJobData>()

  const onSubmit = (data: CreateJobData) => {
    createJob.submit({ data })
  }

  return (
    <Box w="full">
      <Stack w="full" spacing="8" as="form" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Position"
          {...register('position', { required: 'Required' })}
          error={formState.errors['position']}
        />
        <InputField
          label="Deparment"
          {...register('department', { required: 'Required' })}
          error={formState.errors['department']}
        />
        <InputField
          label="Location"
          {...register('location', { required: 'Required' })}
          error={formState.errors['location']}
        />
        <InputField
          label="Info"
          type="textarea"
          {...register('info', { required: 'Required' })}
          error={formState.errors['info']}
        />

        <Button
          isDisabled={createJob.isLoading}
          isLoading={createJob.isLoading}
          type="submit"
        >
          Create
        </Button>
      </Stack>
    </Box>
  )
}
