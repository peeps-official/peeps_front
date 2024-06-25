import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { RecoilState, atom, useRecoilState } from 'recoil'
import { UserData } from '../../state/tableState'
import { useEffect } from 'react'

interface AdminTableWrapperProps {
  dataKey: string
  url: string
  recoilState: RecoilState<UserData[]>
  children: React.ReactNode
}

const fetchUsers = async (url: string) => {
  const { data } = await axios.get(url)

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
    queryFn: () => fetchUsers(url),
  })
  const [recoilData, setRecoilData] = useRecoilState(recoilState)

  useEffect(() => {
    if (isSuccess) setRecoilData(data)
  }, [isSuccess])

  return <div className="bg-white rounded-lg shadow">{children}</div>
}
