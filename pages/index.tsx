import { useColorMode } from '@chakra-ui/react'
import { Button } from '@components/Button'
import Seo from '@components/SEO'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Seo title="Jobs App" info="Find and Apply your dream jobs." />

      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </header>
    </>
  )
}
