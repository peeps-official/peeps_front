'use client'
import { axiosWithAuth } from '@/src/common/api/instance'
import AdminTable from './_components/Table/AdminTable'
import { AdminUserData_T } from '@/src/common/types/admin'
import { useQuery } from '@tanstack/react-query'

export default function AdminPage() {
  const { data } = useQuery({
    queryKey: ['admin', 'userList'],
    queryFn: async () => {
      const { data } = await axiosWithAuth.get<AdminUserData_T[]>('/admin/user')
      return data
    },
  })

  if (!data) return <div>로딩중...</div>

  return (
    <div className="flex w-full">
      <div className="flex flex-col">
        <main className="flex-1">
          <AdminTable title="유저 목록" des="가입한 유저 목록입니다" data={data} />
        </main>
      </div>
    </div>
  )
}
