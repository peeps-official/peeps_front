import '@/src/app/global.css'
import '@/src/app/styles.css'

import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
import DataContextProvider from './_components/DataContextProvider'

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

export default function DefaultLayout({ children }: layoutProps) {
  return (
    <html className="w-full">
      <head>
        <title>PEEPS</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        {/* google font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className="w-full">
        <div className={`w-full ${archivo.variable + ' ' + dm_sans.variable}`}>
          <DataContextProvider>{children}</DataContextProvider>
        </div>
      </body>
    </html>
  )
}
