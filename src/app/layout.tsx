import '@/src/app/global.css'
import '@/src/app/styles.css'

import { Metadata } from 'next'
import { Archivo, DM_Sans } from 'next/font/google'
import DataContextProvider from './(other)/(mainPage)/_components/DataContextProvider'
import { Analytics } from '@vercel/analytics/react'

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

interface layoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'PEEPS',
  description: 'PEEPS',
}

export default async function DefaultLayout({ children }: layoutProps) {
  return (
    <html className="w-full">
      <head>
        <title>PEEPS</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        {/* google font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className={`w-full ${archivo.variable + ' ' + dm_sans.variable}`}>
        <DataContextProvider>{children}</DataContextProvider>
      </body>
      <Analytics />
    </html>
  )
}
