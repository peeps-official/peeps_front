import { Archivo, DM_Sans } from 'next/font/google'

import '@/src/app/global.css'
import '@/src/app/styles.css'
import { checkAdmin } from '@/src/common/api/admin'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import DataWrapperForAllAdminPage from './_components/DataWrapperForAllAdminPage'
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

export default async function AdminLayout({ children }: layoutProps) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({ queryKey: ['isAdminAuth'], queryFn: () => checkAdmin() })

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <DataWrapperForAllAdminPage>
        <div className="box-border h-full w-full pl-64">
          <SideBar />
          <div className="p-5">{children}</div>
        </div>
      </DataWrapperForAllAdminPage>
    </HydrationBoundary>
  )
}
