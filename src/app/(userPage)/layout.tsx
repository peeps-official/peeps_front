'use client'

import { useState } from 'react'
import GlobalHeader from '../_global/GlobalHeader'
import GlobalSidebarNarrow from '../_global/GlobalSidebarNarrow'
import GlobalSidebarWide from '../_global/GlobalSidebarWide'

import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

import '@/src/app/global.css'
import '@/src/app/styles.css'

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
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prevState => !prevState)
  }

  return (
    <>
      <GlobalHeader onToggleSidebar={toggleSidebar} />
      <main className={`pt-header w-full`}>
        <div className={`${archivo.variable + ' ' + dm_sans.variable}`}>
          {isSidebarCollapsed ? <GlobalSidebarNarrow /> : <GlobalSidebarWide />}
          <section className={`flex-grow overflow-auto bg-white ${isSidebarCollapsed ? 'pl-24' : 'pl-64'}`}>
            {children}
          </section>
        </div>
      </main>
    </>
  )
}
