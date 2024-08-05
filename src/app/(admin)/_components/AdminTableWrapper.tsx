import { useQuery } from '@tanstack/react-query'
import { RecoilState, useRecoilState } from 'recoil'
import { useEffect } from 'react'
import { axiosWithoutAuth } from '@/common/api/instance'
import { UserData } from '@/common/types/user'

interface AdminTableWrapperProps {
  dataKey: string
  url: string
  recoilState: RecoilState<UserData[]>
  children: React.ReactNode
}

const fetchUrlDatas = async (url: string) => {
  const { data } = await axiosWithoutAuth.get(url)

  return data
}

export function AdminTableWrapper({
  dataKey,
  url,
  children,
  recoilState,
}: AdminTableWrapperProps) {
  const { isSuccess, error, data } = useQuery({
    queryKey: ['table', dataKey],
    queryFn: () => fetchUrlDatas(url),
  })
  const [recoilData, setRecoilData] = useRecoilState(recoilState)

  useEffect(() => {
    if (isSuccess) setRecoilData(data)
  }, [isSuccess])

  return <div className="bg-white rounded-lg shadow">{children}</div>
}
