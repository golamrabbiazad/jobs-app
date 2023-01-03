import { Box, Stack } from '@chakra-ui/react'
import { Button } from '@components/Button'
import { InputField } from '@components/Form'

export function CreateJobForm({ onSuccess }: { onSuccess: () => void }) {
  const onSubmit = async () => {
    onSuccess()
  }

  return (
    <Box w="full">
      <Stack w="full" spacing="8" as="form" onSubmit={() => onSubmit()}>
        <InputField label="Position" />
        <InputField label="Deparment" />
        <InputField label="Location" />
        <InputField label="Info" type="textarea" />

        <Button isDisabled={false} isLoading={false} type="submit">
          Create
        </Button>
      </Stack>
    </Box>
  )
}
