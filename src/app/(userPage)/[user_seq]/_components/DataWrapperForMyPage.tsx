'use client'

import { getOwnerBadgeList, getLoginUserData, getOwnerUserData } from '@/src/common/api/user'
import { LogedInUserReqDataAtom, OwnerProfileStateAtom } from '@/src/common/recoil/userAtom'
import { IsOwnerAtom } from '@/src/common/recoil/userHome'
import { LoginUserDataReq_T, UserProfile_T } from '@/src/common/types/user'

import { useQueries } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'

interface DataWrapperForMyPageProps {
  children: React.ReactNode
  pageOwnerSeq: string
}

export default function DataWrapperForMyPage({ children, pageOwnerSeq }: DataWrapperForMyPageProps) {
  const router = useRouter()
  const setUserLoginedData = useSetRecoilState<LoginUserDataReq_T>(LogedInUserReqDataAtom)
  const setOwnerUserData = useSetRecoilState<UserProfile_T>(OwnerProfileStateAtom)
  const setIsOwner = useSetRecoilState<boolean>(IsOwnerAtom)
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
      {
        queryKey: ['owner', 'user', 'badge'],
        queryFn: () => getOwnerBadgeList(pageOwnerSeq),
      },
    ],
  })

  useEffect(() => {
    const [loginUserRes, OwnerUSerRes, loginUserBadge] = res

    // 로딩 중
    if (!res || loginUserRes.isPending || OwnerUSerRes.isPending) return

    // 에러 중복처리 방지
    if (isError) {
      console.log('error!!')
      return
    }

    // 로그인 유저 정보
    if (loginUserRes.isSuccess) {
      setUserLoginedData(loginUserRes.data)
    } else if (loginUserRes.isError) {
      console.log('로그인 정보 없음')
      setIsError(true)
    }

    // 페이지 주인 유저 정보
    if (OwnerUSerRes.isSuccess) {
      setOwnerUserData(OwnerUSerRes.data)
    } else if (OwnerUSerRes.isError) {
      console.log('error: ', OwnerUSerRes.error)
      window.alert('존재하지 않는 회원입니다.')
      setIsError(true)
      router.push('/')
    }

    if (loginUserBadge.isSuccess) {
      console.log(loginUserBadge.data)
    }

    if (loginUserRes.isSuccess && OwnerUSerRes.isSuccess) {
      setIsOwner(loginUserRes.data.user_data.user_seq === OwnerUSerRes.data.user_seq)
    }

    ;() => {}
  }, [res])
  return <>{children}</>
}
