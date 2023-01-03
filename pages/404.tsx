import { Center } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

import { Link } from '@components/Link'
import NotFound from '@components/NotFound'

export default function NotFoundPage() {
  return (
    <>
      <NotFound />
      <Center>
        <Link href="/" icon={<ArrowForwardIcon />}>
          Home
        </Link>
      </Center>
    </>
  )
}
