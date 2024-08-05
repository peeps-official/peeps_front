import AdminHeader from '../_components/AdminHeader'
import { AdminTable, AdminTableTitle } from '../_components/AdminTable'
import { AdminTableWrapper } from '../_components/AdminTableWrapper'

export default function AdminPage() {
  return (
    <div className="w-full">
      {/* <AdminSidebar /> */}
      <div className="flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6">
          <div className="grid gap-6">
            {/* <AdminTableWrapper
              dataKey={adminDatakey}
              url={`/user/admin`}
              recoilState={uerData}
            >
              <AdminTableTitle
                title="유저 테이블"
                description="가입한 유저 목록"
              />
              <AdminTable recoilState={uerData} />
            </AdminTableWrapper> */}
            {/* <AdminTableWrapper
              dataKey={badgeAtom}
              url={'/badge/list'}
              recoilState={uerData}
            >
              <AdminTableTitle
                title="뱃지 관리"
                description="등록된 뱃지 관리"
              />
              <AdminTable recoilState={uerData} />
            </AdminTableWrapper> */}
          </div>
        </main>
      </div>
    </div>
  )
}
