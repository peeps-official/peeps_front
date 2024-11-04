'use client'

import { getLoginUserData } from '@/src/common/api/user'
import { OnlyLogedInUserData } from '@/src/common/recoil/userAtom'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

interface DataWrapperForMainPageProps {
  children: React.ReactNode
}

export default function DataWrapperForMainPage({ children }: DataWrapperForMainPageProps) {
  const router = useRouter()
  const setUserData = useSetRecoilState(OnlyLogedInUserData)

  const { isSuccess, error, data } = useQuery({
    queryKey: ['userData', { type: 'login' }],
    queryFn: getLoginUserData,
  })

  useEffect(() => {
    if (isSuccess) {
      setUserData(data.user_data) // 로그인 성공 시 Recoil 상태 업데이트
    }

    return () => {}
  }, [isSuccess, error, setUserData, router])

  return <>{children}</>
}
