'use client'

import { getFeedPostList } from '@/src/common/api/post'
import { getLoginUserData, getUserFollowCircleList, getUserFollowList } from '@/src/common/api/user'
import {
  LogedInUserReqDataAtom,
  Login_User_Follow_Atom,
  LoginUserBadgeListAtom,
  LoginUserFeedPostListAtom,
} from '@/src/common/recoil/userAtom'
import { Badge_T } from '@/src/common/types/badge'
import { FEED_POST_T } from '@/src/common/types/post'
import { LoginUserData_T, LoginUserFollow_T, UserLogin_T } from '@/src/common/types/user'
import { useQueries } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'

export default function DataWrapperForFeed({ children }: { children: React.ReactNode }) {
  const [loginUserData, SetLoginUserData] = useState<UserLogin_T | null>(null)

  // 로그인 유저 정보 (사이드 바)
  const setUserLoginedData = useSetRecoilState<LoginUserData_T>(LogedInUserReqDataAtom)
  const setLoginFollowList = useSetRecoilState<LoginUserFollow_T[]>(Login_User_Follow_Atom)
  const setLoginBadgeList = useSetRecoilState<Badge_T[]>(LoginUserBadgeListAtom)

  // 피드 정보
  const setFeedPostList = useSetRecoilState<FEED_POST_T[]>(LoginUserFeedPostListAtom)

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
        queryFn: () => getUserFollowCircleList(),
        enabled: !!loginUserData,
      },
      {
        queryKey: ['feed'],
        queryFn: () => getFeedPostList(),
        enabled: !!loginUserData,
      },
    ],
  })

  useEffect(() => {
    // 로딩 중
    if (res.some((query) => query.isLoading)) return

    const [loginUserRes, loginUserFollowList, loginUserBadgeList, FeedPostList] = res

    // 로그인 유저 정보
    if (loginUserRes.isSuccess && loginUserRes.data) {
      setUserLoginedData(loginUserRes.data)
      SetLoginUserData(loginUserRes.data.user_data)
    } else {
      console.log('비로그인 상태')
    }

    // 로그인 유저 팔로우 리스트
    if (loginUserFollowList.isSuccess) {
      setLoginFollowList(loginUserFollowList.data)
    }

    // 로그인 유저 뱃지 리스트
    if (loginUserBadgeList.isSuccess) {
      setLoginBadgeList(loginUserBadgeList.data)
    }

    // 페이지 주인 유저 포스트 리스트
    if (FeedPostList.isSuccess) {
      setFeedPostList(FeedPostList.data)
    }
  }, [res])

  return <>{children}</>
}
