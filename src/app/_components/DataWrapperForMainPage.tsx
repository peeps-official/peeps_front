'use client'

import { getLoginUserData } from '@/src/common/api/user'
import { UserLoginDataStateAtom } from '@/src/common/recoil/userAtom'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

interface DataWrapperForMainPageProps {
  children: React.ReactNode
}

export default function DataWrapperForMainPage({ children }: DataWrapperForMainPageProps) {
  const router = useRouter()
  const setUserData = useSetRecoilState(UserLoginDataStateAtom)

  const { isSuccess, error, data } = useQuery({
    queryKey: ['login', 'mainPage'],
    queryFn: () => getLoginUserData(),
  })

  useEffect(() => {
    if (isSuccess) {
      setUserData(data.user_data) // 로그인 성공 시 Recoil 상태 업데이트
    }

    if (error) {
      // 로그인 필요 시 알림
      window.alert('로그인이 필요합니다.')
      router.push('/login') // 로그인 페이지로 리디렉션
    }
  }, [isSuccess, error, setUserData, router])

  return <>{children}</>
}
