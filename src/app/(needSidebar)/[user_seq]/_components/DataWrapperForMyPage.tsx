'use client'

import { getPostList } from '@/src/common/api/post'
import {
  getOwnerImageList,
  getOwnerUserData,
  getUserBadgeList,
  getUserFollowCircleList,
  getUserFollowList,
} from '@/src/common/api/user'
import { OwnerBadgeListAtom, OwnerImgListAtom, OwnerProfileStateAtom } from '@/src/common/recoil/ownerAtom'
import { LogedInUserReqDataAtom, Login_User_Follow_Atom, LoginUserBadgeListAtom } from '@/src/common/recoil/userAtom'
import { OwnerPostListAtom } from '@/src/common/recoil/userHome'
import { Badge_T } from '@/src/common/types/badge'
import { OwnerImgList_T, OwnerProfile_T } from '@/src/common/types/owner'
import { POST_ARR_T } from '@/src/common/types/post'
import { LoginUserData_T, LoginUserFollow_T } from '@/src/common/types/user'

import { useQueries } from '@tanstack/react-query'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

interface DataWrapperForMyPageProps {
  children: React.ReactNode
  pageOwnerSeq: string
}

export default function DataWrapperForMyPage({ children, pageOwnerSeq }: DataWrapperForMyPageProps) {
  const loginUserData = useRecoilValue<LoginUserData_T>(LogedInUserReqDataAtom)

  // 로그인 유저 정보
  const setLoginFollowList = useSetRecoilState<LoginUserFollow_T[]>(Login_User_Follow_Atom)
  const setLoginBadgeList = useSetRecoilState<Badge_T[]>(LoginUserBadgeListAtom)

  // 페이지 주인 유저 정보
  const setOwnerUserData = useSetRecoilState<OwnerProfile_T>(OwnerProfileStateAtom)
  const setOwnerBadgeList = useSetRecoilState<Badge_T[]>(OwnerBadgeListAtom)
  const setOwnerPostList = useSetRecoilState<POST_ARR_T>(OwnerPostListAtom)
  const setOwnerImgList = useSetRecoilState<OwnerImgList_T>(OwnerImgListAtom)

  const router = useRouter()

  const res = useQueries({
    queries: [
      {
        queryKey: ['LoginUserFollowList'],
        queryFn: () => getUserFollowList(loginUserData?.user_data?.user_seq ?? ''),
        enabled: loginUserData?.loginState === 200,
      },
      {
        queryKey: ['badgeList', { type: 'login' }],
        queryFn: () => getUserFollowCircleList(),
        enabled: loginUserData?.loginState === 200,
      },
      {
        queryKey: ['userData', { type: 'owner' }, pageOwnerSeq],
        queryFn: () => getOwnerUserData(pageOwnerSeq),
      },
      {
        queryKey: ['badgeList', { type: 'owner' }, pageOwnerSeq],
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

  useEffect(() => {
    // 로딩 중
    if (res.some((query) => query.isLoading)) return

    const [loginUserFollowList, loginUserBadgeList, ownerUserData, ownerBadgeList, ownerPostList, ownerImgList] = res

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
      window.alert('존재하지 않는 회원입니다.')

      router.replace('/')
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

    ;() => {}
  }, [res])
  return <>{children}</>
}
