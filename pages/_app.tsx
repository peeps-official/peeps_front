import { Fragment } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import './global.css'
import GlobalHeader from '../components/GlobalHeader'
import GlobalSidebarLeft from '../components/GlobalSidebarLeft'

function MyApp({ Component, pageProps, router }: AppProps) {
  const hideHeader = router.pathname === '/login'
  return (
    <>
      <Head>
        <title>PEEPS</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        {/* google font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        
      </Head>
      {!hideHeader && <GlobalHeader />}
      <main className={`self-stretch flex flex-row pt-[68px] ${hideHeader ? 'justify-center items-center' : ''}`}>
          {!hideHeader && <GlobalSidebarLeft />}
          <section className="flex-grow bg-white pl-[80px] overflow-auto">
            <Component {...pageProps} />
          </section>
      </main>
    </>
  )
}

export default MyApp
