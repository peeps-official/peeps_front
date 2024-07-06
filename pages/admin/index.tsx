import AdminHeader from '../../components/admin/AdminHeader'
import { AdminTableTitle, AdminTable } from '../../components/admin/AdminTable'
import { AdminTableWrapper } from '../../components/admin/AdminTableWrapper'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { uerData, adminDatakey, userDataUrl } from '../../state/tableState'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export default function AdminPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="w-full">
        {/* <AdminSidebar /> */}
        <div className="flex flex-col">
          <AdminHeader />
          <main className="flex-1 p-6">
            <div className="grid gap-6">
              <AdminTableWrapper
                dataKey={adminDatakey}
                url={userDataUrl}
                recoilState={uerData}
              >
                <AdminTableTitle
                  title="유저 테이블"
                  description="가입한 유저 목록"
                />
                <AdminTable recoilState={uerData} />
              </AdminTableWrapper>
            </div>
          </main>
        </div>
      </div>
    </QueryClientProvider>
  )
}
