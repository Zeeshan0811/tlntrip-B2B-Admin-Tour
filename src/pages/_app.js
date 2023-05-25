import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tlntrip Admin Tour</title>
        <meta name="description" content="Tlntrip Admin Tour" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
