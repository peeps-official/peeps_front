import { Fragment } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import './global.css'
import GlobalHeader from '../components/GlobalHeader'
import GlobalSidebarLeft from '../components/GlobalSidebarLeft'

import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
import './styles.css'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})
const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_sans',
})

function MyApp({ Component, pageProps, router }: AppProps) {
  const hideHeader =
    router.pathname === '/login' || router.pathname === '/admin'
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      {!hideHeader ? (
        <>
          <GlobalHeader />
          <main
            className={`self-stretch flex flex-row pt-[68px] ${
              hideHeader ? 'justify-center items-center' : ''
            }`}
          >
            <div className={`${archivo.variable + ' ' + dm_sans.variable}`}>
              <GlobalSidebarLeft />
              <section className="flex-grow bg-white pl-[80px] overflow-auto">
                <Component {...pageProps} />
              </section>
            </div>
          </main>
        </>
      ) : (
        <div className={`${archivo.variable + ' ' + dm_sans.variable}`}>
          <Component {...pageProps} />
        </div>
      )}
    </>
  )
}

export default MyApp
