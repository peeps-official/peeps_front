import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

import '@/src/app/global.css'
import '@/src/app/styles.css'
import DataContextProvider from '@/src/app/_components/DataContextProvider'
import SideBar from './_components/Sidebar/Sidebar'

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

export default function AdminLayout({ children }: layoutProps) {
  return (
    <div className="w-full h-full ml-64">
      <SideBar />
      {children}
    </div>
  )
}
