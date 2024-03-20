import { Fragment } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import './global.css'
import GlobalHeader from '../components/GlobalHeader'

function MyApp({ Component, pageProps, router }: AppProps) {
  const hideHeader = router.pathname === '/login'
  const headerPadding = hideHeader ? '' : 'pt-header bg-background'
  return (
    <>
      <Head>
        <title>PEEPS</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {!hideHeader && <GlobalHeader />}
      <div className={headerPadding}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
