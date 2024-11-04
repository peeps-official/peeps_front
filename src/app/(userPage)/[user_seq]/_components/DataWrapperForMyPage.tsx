'use client'

import { getPostList } from '@/src/common/api/post'
import {
  getLoginUserData,
  getOwnerImageList,
  getOwnerUserData,
  getUserBadgeList,
  getUserFollowList,
} from '@/src/common/api/user'
import { OwnerBadgeListAtom, OwnerImgListAtom, OwnerProfileStateAtom } from '@/src/common/recoil/ownerAtom'
import { LogedInUserReqDataAtom, Login_User_Follow_Atom, LoginUserBadgeListAtom } from '@/src/common/recoil/userAtom'
import { IsOwnerAtom, OwnerPostListAtom } from '@/src/common/recoil/userHome'
import { Badge_T } from '@/src/common/types/badge'
import { OwnerImgList_T, OwnerProfile_T } from '@/src/common/types/owner'
import { POST_ARR_T } from '@/src/common/types/post'
import { LoginUserData_T, LoginUserFollow_T, UserLogin_T } from '@/src/common/types/user'

import { useQueries } from '@tanstack/react-query'

import { redirect, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'

interface DataWrapperForMyPageProps {
  children: React.ReactNode
  pageOwnerSeq: string
}

export default function DataWrapperForMyPage({ children, pageOwnerSeq }: DataWrapperForMyPageProps) {
  const [loginUserData, SetLoginUserData] = useState<UserLogin_T | null>(null)

  // 로그인 유저 정보
  const setUserLoginedData = useSetRecoilState<LoginUserData_T>(LogedInUserReqDataAtom)
  const setLoginFollowList = useSetRecoilState<LoginUserFollow_T[]>(Login_User_Follow_Atom)
  const setLoginBadgeList = useSetRecoilState<Badge_T[]>(LoginUserBadgeListAtom)

  // 페이지 주인 유저 정보
  const setOwnerUserData = useSetRecoilState<OwnerProfile_T>(OwnerProfileStateAtom)
  const setOwnerBadgeList = useSetRecoilState<Badge_T[]>(OwnerBadgeListAtom)
  const setOwnerPostList = useSetRecoilState<POST_ARR_T>(OwnerPostListAtom)
  const setOwnerImgList = useSetRecoilState<OwnerImgList_T>(OwnerImgListAtom)

  // isOwner
  const setIsOwner = useSetRecoilState<boolean>(IsOwnerAtom)

  const router = useRouter()

  const res = useQueries({
    queries: [
      {
        queryKey: ['userData', { type: 'login' }],
        queryFn: getLoginUserData,
      },
      {
        queryKey: ['LoginUserFollowList'],
        queryFn: () => getUserFollowList(loginUserData?.user_seq ?? ''),
        enabled: !!loginUserData,
      },
      {
        queryKey: ['badgeList', { type: 'login' }],
        queryFn: () => getUserBadgeList(loginUserData?.user_seq ?? ''),
        enabled: !!loginUserData,
      },
      {
        queryKey: ['userData', { type: 'admin' }, pageOwnerSeq],
        queryFn: () => getOwnerUserData(pageOwnerSeq),
      },
      {
        queryKey: ['badgeList', { type: 'admin' }, pageOwnerSeq],
        queryFn: () => getUserBadgeList(pageOwnerSeq),
      },
      {
        queryKey: ['refreshWithPost', 'ownerPostList', pageOwnerSeq],
        queryFn: () => getPostList(pageOwnerSeq),
      },
      {
        queryKey: ['refreshWithPost', 'ownerImgList', pageOwnerSeq],
        queryFn: () => getOwnerImageList(pageOwnerSeq),
      },
    ],
  })

  // 로그인 추가 데이터가 필요한 경우
  if (res[0].data?.loginState === 300 && res[0].data.needData) {
    redirect('/needInfo')
  }

  useEffect(() => {
    // 로딩 중
    if (res.some((query) => query.isLoading)) return

    const [
      loginUserRes,
      loginUserFollowList,
      loginUserBadgeList,
      ownerUserData,
      ownerBadgeList,
      ownerPostList,
      ownerImgList,
    ] = res

    // 로그인 유저 정보
    if (loginUserRes.isSuccess && loginUserRes.data) {
      setUserLoginedData(loginUserRes.data)
      SetLoginUserData(loginUserRes.data.user_data)
    } else {
      console.log('비로그인 상태')
      console.log(loginUserRes.isSuccess)
      console.log(loginUserRes.data)
    }

    // 로그인 유저 팔로우 리스트
    if (loginUserFollowList.isSuccess) {
      setLoginFollowList(loginUserFollowList.data)
    }

    // 로그인 유저 뱃지 리스트
    if (loginUserBadgeList.isSuccess) {
      setLoginBadgeList(loginUserBadgeList.data)
    }

    // 페이지 주인 유저 정보
    if (ownerUserData.isSuccess) {
      setOwnerUserData(ownerUserData.data)
    } else if (ownerUserData.isError) {
      console.log('error: ', ownerUserData.error)
      window.alert('존재하지 않는 회원입니다.')

      router.push('/')
    }

    // 페이지 주인 유저 뱃지 정보
    if (ownerBadgeList.isSuccess) {
      setOwnerBadgeList(ownerBadgeList.data)
    }

    // 페이지 주인 유저 포스트 리스트
    if (ownerPostList.isSuccess) {
      setOwnerPostList(ownerPostList.data)
    }

    // 페이지 주인 유저 이미지 리스트
    if (ownerImgList.isSuccess) {
      setOwnerImgList(ownerImgList.data)
    }

    // 로그인 유저와 페이지 주인 유저가 같은지 확인
    if (loginUserRes.isSuccess && ownerUserData.isSuccess) {
      setIsOwner(loginUserRes.data?.user_data.user_seq === ownerUserData.data.user_seq)
    }

    ;() => {}
  }, [res])
  return <>{children}</>
}
