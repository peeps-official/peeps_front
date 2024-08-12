'use client'

import { fetchUserProfileData } from '@/src/common/api/mypage'
import {
  LoginedUserReqDataAtom,
  UserLoginDataStateAtom,
  UserProfileStateAtom,
} from '@/src/common/recoil/userAtom'
import { LoginUserDataReq_T, UserProfile_T } from '@/src/common/types/user'
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
  const [, setUserLoginedData] = useRecoilState<LoginUserDataReq_T>(LoginedUserReqDataAtom)
  const [, setRecoilData] = useRecoilState<UserProfile_T>(UserProfileStateAtom)

  const { isSuccess, error, data } = useQuery<LoginUserDataReq_T>({
    queryKey: ['login', 'userPage'],
    queryFn: () => fetchUserProfileData(),
  })

  useEffect(() => {
    if (error) router.push('/login')
    if (isSuccess) {
      // 페이지 주인 유저 정보
      setRecoilData(mypageData)
      // 로그인 유저 정보
      setUserLoginedData(data)
    }
  }, [isSuccess, error])
  return <>{children}</>
}
