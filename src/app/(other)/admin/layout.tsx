import '@/src/app/global.css'
import '@/src/app/styles.css'
import DataWrapperForAllAdminPage from './_components/DataWrapperForAllAdminPage'
import SideBar from './_components/Sidebar/Sidebar'

interface layoutProps {
  children: React.ReactNode
}

export default async function AdminLayout({ children }: layoutProps) {
  return (
    <DataWrapperForAllAdminPage>
      <div className="box-border h-full w-full pl-64">
        <SideBar />
        <div className="p-5">{children}</div>
      </div>
    </DataWrapperForAllAdminPage>
  )
}
