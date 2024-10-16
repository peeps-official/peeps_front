'use client'

import { getPostList } from '@/src/common/api/post'
import {
  getLoginUserData,
  getOwnerBadgeList,
  getOwnerFollowList,
  getOwnerImageList,
  getOwnerUserData,
} from '@/src/common/api/user'
import { OwnerBadgeListAtom, OwnerImgListAtom, OwnerProfileStateAtom } from '@/src/common/recoil/ownerAtom'
import { LogedInUserReqDataAtom, Login_User_Follow_Atom } from '@/src/common/recoil/userAtom'
import { IsOwnerAtom, OwnerPostListAtom } from '@/src/common/recoil/userHome'
import { OwnerBadge_T, OwnerImgList_T, OwnerProfile_T } from '@/src/common/types/owner'
import { POST_ARR_T } from '@/src/common/types/post'
import { LoginUserFollow_T, LoginUserData_T, UserLogin_T } from '@/src/common/types/user'

import { useQueries, useQuery } from '@tanstack/react-query'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'

interface DataWrapperForMyPageProps {
  children: React.ReactNode
  pageOwnerSeq: string
}

export default function DataWrapperForMyPage({ children, pageOwnerSeq }: DataWrapperForMyPageProps) {
  const [loginUserData, SetLoginUserData] = useState<UserLogin_T | null>(null)

  const setUserLoginedData = useSetRecoilState<LoginUserData_T>(LogedInUserReqDataAtom)
  const setOwnerUserData = useSetRecoilState<OwnerProfile_T>(OwnerProfileStateAtom)
  const setOwnerBadgeList = useSetRecoilState<OwnerBadge_T[]>(OwnerBadgeListAtom)
  const setOwnerPostList = useSetRecoilState<POST_ARR_T>(OwnerPostListAtom)
  const setLoginFollowList = useSetRecoilState<LoginUserFollow_T[]>(Login_User_Follow_Atom)
  const setOwnerImgList = useSetRecoilState<OwnerImgList_T>(OwnerImgListAtom)

  // isOwner
  const setIsOwner = useSetRecoilState<boolean>(IsOwnerAtom)

  const router = useRouter()

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
        queryKey: ['ownerImgList', pageOwnerSeq],
        queryFn: () => getOwnerImageList(pageOwnerSeq),
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
    const [loginUserRes, ownerUserData, ownerBadgeList, ownerPostList, ownerImgList] = res

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
