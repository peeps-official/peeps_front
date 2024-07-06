import Head from 'next/head'
import type { AppProps } from 'next/app'
import GlobalHeader from '../common/GlobalHeader'
import GlobalSidebarLeft from '../common/GlobalSidebarLeft'

import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
import axios from 'axios'

import './global.css'
import './styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'

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

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const hideHeader =
    router.pathname === '/login' || router.pathname === '/admin'

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
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
                className={`pt-header w-full ${
                  hideHeader ? 'flex justify-center items-center' : ''
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
        </RecoilRoot>
      </QueryClientProvider>
    </>
  )
}
