import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

import '@/src/app/global.css'
import '@/src/app/styles.css'
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
    <div className="box-border h-full w-full pl-64">
      <SideBar />
      <div className="p-5">{children}</div>
    </div>
  )
}
