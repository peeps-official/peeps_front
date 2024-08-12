'use client'

import { getLoginUserData, getOwnerUserData } from '@/src/common/api/mypage'
import {
  LoginedUserReqDataAtom,
  UserLoginDataStateAtom,
  UserProfileStateAtom,
} from '@/src/common/recoil/userAtom'
import { LoginUserDataReq_T, UserProfile_T } from '@/src/common/types/user'
import { mypageData } from '@/src/tmp_data/dummy'
import { useQueries } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

interface DataWrapperForMyPageProps {
  children: React.ReactNode
  pageOwnerSeq: string
}

export default function DataWrapperForMyPage({
  children,
  pageOwnerSeq,
}: DataWrapperForMyPageProps) {
  const router = useRouter()
  const [, setUserLoginedData] = useRecoilState<LoginUserDataReq_T>(LoginedUserReqDataAtom)
  const [, setOwnerUserData] = useRecoilState<UserProfile_T>(UserProfileStateAtom)

  const [loginUserRes, OwnerUSerRes] = useQueries({
    queries: [
      {
        queryKey: ['login', 'userPage'],
        queryFn: () => getLoginUserData(),
      },
      {
        queryKey: ['owner', 'userPage'],
        queryFn: () => getOwnerUserData(pageOwnerSeq),
      },
    ],
  })

  useEffect(() => {
    if (loginUserRes.error || OwnerUSerRes.error) {
      console.log('error: ', loginUserRes.error, OwnerUSerRes.error)
      // router.push('/login')
    }
    // 로그인 유저 정보
    if (loginUserRes.isSuccess) {
      setUserLoginedData(loginUserRes.data)
    }
    // 페이지 주인 유저 정보
    if (OwnerUSerRes.isSuccess) {
      // setOwnerUserData(mypageData)
      setOwnerUserData(OwnerUSerRes.data)
    }
  }, [loginUserRes, OwnerUSerRes])
  return <>{children}</>
}
