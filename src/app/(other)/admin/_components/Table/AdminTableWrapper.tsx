import { useQuery } from '@tanstack/react-query'
import { RecoilState, useRecoilState } from 'recoil'
import { useEffect } from 'react'
import { axiosWithAuth } from '@/src/common/api/instance'
import { AdminUserData_T } from '@/src/common/types/admin'

interface AdminTableWrapperProps {
  dataKey: string
  url: string
  recoilState: RecoilState<AdminUserData_T[]>
  children: React.ReactNode
}

const fetchUrlDatas = async (url: string) => {
  const { data } = await axiosWithAuth.get(url)

  return data
}

export default function AdminTableDataWrapper({ dataKey, url, children, recoilState }: AdminTableWrapperProps) {
  const { isSuccess, error, data } = useQuery({
    queryKey: ['table', dataKey],
    queryFn: () => fetchUrlDatas(url),
  })
  const [recoilData, setRecoilData] = useRecoilState(recoilState)

  useEffect(() => {
    if (isSuccess) setRecoilData(data)
  }, [isSuccess])

  return <div className="rounded-lg bg-white shadow">{children}</div>
}
