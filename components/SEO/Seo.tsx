import Head from 'next/head'

export type SeoProps = {
  title: string
  info: string
}

export function Seo({ title, info }: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={info} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
