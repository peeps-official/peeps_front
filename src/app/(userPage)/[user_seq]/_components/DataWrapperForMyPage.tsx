'use client'

import { getPostList } from '@/src/common/api/post'
import { getLoginUserData, getOwnerBadgeList, getOwnerFollowList, getOwnerUserData } from '@/src/common/api/user'
import { LogedInUserReqDataAtom, Login_User_Follow_Atom, OwnerProfileStateAtom } from '@/src/common/recoil/userAtom'
import { IsOwnerAtom, OwnerPostListAtom } from '@/src/common/recoil/userHome'
import { POST_ARR_T } from '@/src/common/types/post'
import { Login_User_Follow_T, LoginUserDataReq_T, UserLogin_T, UserProfile_T } from '@/src/common/types/user'

import { useQueries, useQuery } from '@tanstack/react-query'

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
  const setOwnerPostList = useSetRecoilState<POST_ARR_T>(OwnerPostListAtom)
  const setLoginFollowList = useSetRecoilState<Login_User_Follow_T[]>(Login_User_Follow_Atom)
  const [loginUserData, SetLoginUserData] = useState<UserLogin_T | null>(null)

  const res = useQueries({
    queries: [
      {
        queryKey: ['login', 'userPage'],
        queryFn: getLoginUserData,
      },
      {
        queryKey: ['ownerUserData', pageOwnerSeq],
        queryFn: () => getOwnerUserData(pageOwnerSeq),
      },
      {
        queryKey: ['ownerBadgeList', pageOwnerSeq],
        queryFn: () => getOwnerBadgeList(pageOwnerSeq),
      },
      {
        queryKey: ['ownerPostList', pageOwnerSeq],
        queryFn: () => getPostList(pageOwnerSeq),
      },
      {
        queryKey: ['LoginUserFollowList'],
        queryFn: () => getOwnerFollowList(pageOwnerSeq),
      },
    ],
  })

  const { status, data: LoginUserFollowListData } = useQuery({
    queryKey: ['LoginUserFollowList'],
    queryFn: () => getOwnerFollowList(loginUserData?.user_seq ?? ''),
    enabled: !!loginUserData,
  })

  useEffect(() => {
    if (LoginUserFollowListData) setLoginFollowList(LoginUserFollowListData)
  }, [LoginUserFollowListData])

  useEffect(() => {
    const [loginUserRes, ownerUserRes, loginUserBadge, postListRes] = res

    if (loginUserRes.isSuccess)
      if (res.some((query) => query.isLoading))
        // 로딩 중
        return

    // 로그인 유저 정보
    if (loginUserRes.isSuccess && loginUserRes.data) {
      setUserLoginedData(loginUserRes.data)
      SetLoginUserData(loginUserRes.data.user_data)
    } else {
      console.log('비로그인 상태')

      console.log(loginUserRes.isSuccess)
      console.log(loginUserRes.data)
    }

    // 페이지 주인 유저 정보
    if (ownerUserRes.isSuccess) {
      setOwnerUserData(ownerUserRes.data)
    } else if (ownerUserRes.isError) {
      console.log('error: ', ownerUserRes.error)
      window.alert('존재하지 않는 회원입니다.')

      router.push('/')
    }

    // 페이지 주인 유저 뱃지 정보
    if (loginUserBadge.isSuccess) {
      console.log(loginUserBadge.data)
    }

    // 페이지 주인 유저 포스트 리스트
    if (postListRes.isSuccess) {
      setOwnerPostList(postListRes.data)
    }

    // 로그인 유저와 페이지 주인 유저가 같은지 확인
    if (loginUserRes.isSuccess && ownerUserRes.isSuccess) {
      setIsOwner(loginUserRes.data?.user_data.user_seq === ownerUserRes.data.user_seq)
    }

    ;() => {}
  }, [res])
  return <>{children}</>
}
