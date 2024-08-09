'use client'

import { fetchUserProfileData } from '@/src/common/api/mypage'
import { UserLoginDataStateAtom, UserProfileStateAtom } from '@/src/common/recoil/userAtom'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

interface DataWrapperForMainPageProps {
  children: React.ReactNode
}

export default function DataWrapperForMainPage({ children }: DataWrapperForMainPageProps) {
  const router = useRouter()
  const [recoilData, setRecoilData] = useRecoilState(UserLoginDataStateAtom)

  const { isSuccess, error, data } = useQuery({
    queryKey: ['login', 'mainPage'],
    queryFn: () => fetchUserProfileData(),
  })

  useEffect(() => {
    if (isSuccess) {
      setRecoilData(data.user_data)
    }

    if (error) {
      window.alert('로그인이 필요합니다.')
      console.log(error)
      router.push('/login')
    }
  }, [isSuccess, error])

  return <>{children}</>
}
