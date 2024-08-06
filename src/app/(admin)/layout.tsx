import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

import '@/src/app/global.css'
import '@/src/app/styles.css'
import SideBar from './admin/_components/Sidebar/Sidebar'

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
    <div className="box-border w-full h-full pl-64">
      <SideBar />
      {children}
    </div>
  )
}
