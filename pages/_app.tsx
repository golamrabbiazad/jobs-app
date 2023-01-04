import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'

import AppProvider from '@providers/app'
import { API_MOCKING } from '@config/constants'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MSWWrapper = dynamic<{ children: ReactNode }>(() =>
  import('@lib/msw').then(({ MSWWrapper }) => MSWWrapper)
)

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const pageContent = getLayout(<Component {...pageProps} />)

  return (
    <AppProvider>
      {API_MOCKING ? <MSWWrapper>{pageContent}</MSWWrapper> : pageContent}
    </AppProvider>
  )
}
