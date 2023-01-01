import Head from 'next/head'
import type { AppProps } from 'next/app'

import AppProvider from '@providers/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jobs App</title>
        <meta name="description" content="Find and Apply your dream jobs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}
