'use client'

import { getLoginUserData } from '@/src/common/api/user'
import { UserLoginDataStateAtom } from '@/src/common/recoil/userAtom'
import { UserLogin_T } from '@/src/common/types/user'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

interface DataWrapperForProPageProps {
  children: React.ReactNode
}

export default function DataWrapperForProPage({ children }: DataWrapperForProPageProps) {
  const router = useRouter()
  const setUserData = useSetRecoilState<UserLogin_T>(UserLoginDataStateAtom)

  const { isSuccess, error, data } = useQuery({
    queryKey: ['login', 'ProPage'],
    queryFn: () => getLoginUserData(),
  })

  useEffect(() => {
    if (isSuccess) {
      setUserData(data.user_data)
    }

    if (error) {
      window.alert('로그인이 필요합니다.')

      router.push('/login')
    }
  }, [isSuccess, error])

  return <>{children}</>
}
