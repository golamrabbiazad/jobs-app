import { Center, Spinner } from '@chakra-ui/react'

export function Loading() {
  return (
    <Center h="96">
      <Spinner data-testid="loading" size="xl" color="primary" />
    </Center>
  )
}
