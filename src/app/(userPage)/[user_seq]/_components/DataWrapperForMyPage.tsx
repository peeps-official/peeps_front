'use client'

import { getLoginUserData, getOwnerUserData } from '@/src/common/api/mypage'
import {
  LoginedUserReqDataAtom,
  UserLoginDataStateAtom,
  UserProfileStateAtom,
} from '@/src/common/recoil/userAtom'
import { LoginUserDataReq_T, UserProfile_T } from '@/src/common/types/user'

import { useQueries } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
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
  const [isError, setIsError] = useState(false)

  const res = useQueries({
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
    const [loginUserRes, OwnerUSerRes] = res

    // 로딩 중
    if (!res || loginUserRes.isPending || OwnerUSerRes.isPending) return

    // 에러 중복처리 방지
    if (isError) {
      console.log('error!!')
      return
    }

    // 에러
    if (loginUserRes.isError || OwnerUSerRes.isError) {
      console.log('error: ', loginUserRes.error, OwnerUSerRes.error)
      window.alert('존재하지 않는 회원입니다.')
      setIsError(true)
      router.push('/')
    }
    // 로그인 유저 정보
    if (loginUserRes.isSuccess) {
      setUserLoginedData(loginUserRes.data)
    }
    // 페이지 주인 유저 정보
    if (OwnerUSerRes.isSuccess) {
      setOwnerUserData(OwnerUSerRes.data)
    }

    ;() => {}
  }, [res])
  return <>{children}</>
}
