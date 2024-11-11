'use client'
import { useEffect } from 'react'

import { checkAdmin } from '@/src/common/api/admin'
import { isAdminAtom } from '@/src/common/recoil/adminAtom'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'

export default function DataWrapperForAllAdminPage({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useQuery({
    queryKey: ['isAdminAuth'],
    queryFn: () => checkAdmin(),
    staleTime: 0,
  })

  const setBadgeData = useSetRecoilState<boolean>(isAdminAtom)

  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (data) setBadgeData(data)
      else {
        console.log('권한이 없습니다.')
        router.push('/')
      }
    }
  }, [data])

  if (isLoading) return <div>권한 확인 중...</div>

  return <>{children}</>
}
