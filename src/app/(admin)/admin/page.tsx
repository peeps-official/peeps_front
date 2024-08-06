import { axiosWithAuth } from '@/src/common/api/instance'
import AdminTable from './_components/Table/AdminTable'
import { UserData_T } from '@/src/common/types/user'

export default async function AdminPage() {
  // -> '/admin/user'로 변경예정
  const { data } = await axiosWithAuth.get<UserData_T[]>('/user/admin')

  return (
    <div className="flex w-full">
      <div className="flex flex-col">
        <main className="flex-1 p-6">
          <AdminTable
            title="유저 목록"
            des="가입한 유저 목록입니다"
            data={data}
          />
        </main>
      </div>
    </div>
  )
}
