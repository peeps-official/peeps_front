'use client'

import { fetchUserProfileData } from '@/src/common/api/mypage'
import { UserProfileStateAtom } from '@/src/common/recoil/userAtom'
import { UserProfile_T } from '@/src/common/types/user'
import { mypageData } from '@/src/tmp_data/dummy'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

interface DataWrapperForMyPageProps {
  children: React.ReactNode
}

export default function DataWrapperForMyPage({ children }: DataWrapperForMyPageProps) {
  const router = useRouter()
  const [recoilData, setRecoilData] = useRecoilState<UserProfile_T>(UserProfileStateAtom)

  const { isSuccess, error, data } = useQuery({
    queryKey: ['login', 'userPage'],
    queryFn: () => fetchUserProfileData(),
  })

  useEffect(() => {
    if (isSuccess) {
      // setRecoilData(data)
      setRecoilData(mypageData)
    }

    if (error) router.push('/login')
  }, [isSuccess, error])
  return <>{children}</>
}
