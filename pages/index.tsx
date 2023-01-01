import { Inter } from '@next/font/google'

import { InputField } from '@components/Form'
import { Button } from '@components/Button'
import { Link } from '@components/Link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Button type="submit" variant="outline">
        Click Me
      </Button>
      <br />
      <InputField label="Name" />
      <br />
      <Link href="/" variant="solid">
        Home
      </Link>
    </>
  )
}
