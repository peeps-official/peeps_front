'use client'

import { getCircleFeed, getCircleFollowList, getCircleProfile, getMyCirclePost } from '@/src/common/api/circle'
import { getLoginUserData, getUserBadgeList, getUserFollowCircleList, getUserFollowList } from '@/src/common/api/user'
import { CircleDataAtom, CircleFeedDataAtom, CirCleFollowerListAtom } from '@/src/common/recoil/circleAtom'
import { LogedInUserReqDataAtom, Login_User_Follow_Atom, LoginUserBadgeListAtom } from '@/src/common/recoil/userAtom'
import { Badge_T } from '@/src/common/types/badge'
import { Circle_T, CirCleFollower_T } from '@/src/common/types/circle'
import { Post_T } from '@/src/common/types/post'
import { LoginUserData_T, LoginUserFollow_T, UserLogin_T } from '@/src/common/types/user'
import { useQueries } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'

type DataWrapperForClubPage = {
  badgeName: string
  children: React.ReactNode
}

export default function DataWrapperForClubPage({ badgeName, children }: DataWrapperForClubPage) {
  const [loginUserData, SetLoginUserData] = useState<UserLogin_T | null>(null)
  const [isFollow, setIsFollow] = useState<boolean>(false)

  const setUserLoginedData = useSetRecoilState<LoginUserData_T>(LogedInUserReqDataAtom)
  const setLoginFollowList = useSetRecoilState<LoginUserFollow_T[]>(Login_User_Follow_Atom)
  const setLoginBadgeList = useSetRecoilState<Badge_T[]>(LoginUserBadgeListAtom)

  // 클럽 뱃지 정보
  const setCircleProfile = useSetRecoilState<Circle_T | null>(CircleDataAtom)
  const setCircleFeed = useSetRecoilState<Post_T[] | null>(CircleFeedDataAtom)
  const setCircleFollowerList = useSetRecoilState<CirCleFollower_T[] | null>(CirCleFollowerListAtom)

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
        queryKey: ['circleProfile', badgeName],
        queryFn: () => getCircleProfile(badgeName),
      },
      {
        queryKey: ['circleFollower', badgeName],
        queryFn: () => getCircleFollowList(badgeName),
      },
      {
        queryKey: ['clubFeed', badgeName],
        queryFn: () => getCircleFeed(badgeName),
        enabled: isFollow,
      },
      {
        queryKey: ['myCirclePost', badgeName],
        queryFn: () => getMyCirclePost(badgeName),
        enabled: isFollow,
      },
    ],
  })

  useEffect(() => {
    if (res.some((query) => query.isLoading)) return

    const [loginUserRes, loginUserFollowList, loginUserBadgeList, circleProfile, circleFollowerList, clubFeedList] = res

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

    if (circleProfile.isSuccess) {
      setCircleProfile(circleProfile.data)
      setIsFollow(!!circleProfile?.data?.isFollow)
    }

    if (circleFollowerList.isSuccess) {
      setCircleFollowerList(circleFollowerList.data)
    }

    if (clubFeedList.isSuccess) {
      setCircleFeed(clubFeedList.data)
    }
  }, [res])

  return <>{children}</>
}
