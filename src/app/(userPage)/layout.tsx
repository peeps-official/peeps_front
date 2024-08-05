'use client'
import Head from 'next/head'
import GlobalHeader from '../_global/GlobalHeader'
import GlobalSidebarLeft from '../_global/GlobalSidebarLeft'

import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

import '@/src/app/global.css'
import '@/src/app/styles.css'
import DataContextProvider from '../_components/DataContextProvider'
import { Metadata } from 'next'

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
  router: any
}

export default function DefaultLayout({ children }: layoutProps) {
  return (
    <>
      <GlobalHeader />
      <main className={`pt-header w-full`}>
        <div className={`${archivo.variable + ' ' + dm_sans.variable}`}>
          <GlobalSidebarLeft />
          <section className="flex-grow bg-white pl-[80px] overflow-auto">
            {children}
          </section>
        </div>
      </main>
    </>
  )
}
