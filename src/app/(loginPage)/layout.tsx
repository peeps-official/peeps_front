import Head from 'next/head'

import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

import '@/src/app/global.css'
import '@/src/app/styles.css'
import DataContextProvider from '../_components/DataContextProvider'

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
    <>
      <div className={`${archivo.variable + ' ' + dm_sans.variable}`}>
        {children}
      </div>
    </>
  )
}
