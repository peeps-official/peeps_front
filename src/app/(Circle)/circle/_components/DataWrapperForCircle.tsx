'use client'

import { getLoginUserData, getUserFollowCircleList, getUserFollowList } from '@/src/common/api/user'
import { LogedInUserReqDataAtom, Login_User_Follow_Atom, LoginUserBadgeListAtom } from '@/src/common/recoil/userAtom'
import { Badge_T } from '@/src/common/types/badge'
import { LoginUserData_T, LoginUserFollow_T, UserLogin_T } from '@/src/common/types/user'
import { useQueries } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'

export default function DataWrapperForCircle({ children }: { children: React.ReactNode }) {
  const [loginUserData, SetLoginUserData] = useState<UserLogin_T | null>(null)

  const setUserLoginedData = useSetRecoilState<LoginUserData_T>(LogedInUserReqDataAtom)
  const setLoginFollowList = useSetRecoilState<LoginUserFollow_T[]>(Login_User_Follow_Atom)
  const setLoginBadgeList = useSetRecoilState<Badge_T[]>(LoginUserBadgeListAtom)

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
    ],
  })

  useEffect(() => {
    if (res.some((query) => query.isLoading)) return

    const [loginUserRes, loginUserFollowList, loginUserBadgeList] = res

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
  }, [res])

  return <>{children}</>
}
