'use client'

import { getPostList } from '@/src/common/api/post'
import { getLoginUserData, getOwnerBadgeList, getOwnerUserData } from '@/src/common/api/user'
import { LogedInUserDefaultData, LogedInUserReqDataAtom, OwnerProfileStateAtom } from '@/src/common/recoil/userAtom'
import { IsOwnerAtom, OwnerPostListAtom } from '@/src/common/recoil/userHome'
import { POST_ARR_T } from '@/src/common/types/post'
import { LoginUserDataReq_T, UserProfile_T } from '@/src/common/types/user'

import { useQueries } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

interface DataWrapperForMyPageProps {
  children: React.ReactNode
  pageOwnerSeq: string
  isLoginCookie: boolean
}

export default function DataWrapperForMyPage({ children, pageOwnerSeq, isLoginCookie }: DataWrapperForMyPageProps) {
  const router = useRouter()
  const setUserLoginedData = useSetRecoilState<LoginUserDataReq_T>(LogedInUserReqDataAtom)
  const setOwnerUserData = useSetRecoilState<UserProfile_T>(OwnerProfileStateAtom)
  const setIsOwner = useSetRecoilState<boolean>(IsOwnerAtom)
  const setOwnerPostList = useSetRecoilState<POST_ARR_T>(OwnerPostListAtom)

  const res = useQueries({
    queries: [
      {
        queryKey: ['login', 'userPage'],
        queryFn: () => {
          if (isLoginCookie) {
            return getLoginUserData()
          }
          return Promise.resolve(LogedInUserDefaultData)
        },
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
    ],
  })

  useEffect(() => {
    const [loginUserRes, ownerUserRes, loginUserBadge, postListRes] = res

    // 로딩 중
    if (res.some((query) => query.isLoading)) return

    // 로그인 유저 정보
    if (isLoginCookie && loginUserRes.isSuccess && loginUserRes.data) {
      setUserLoginedData(loginUserRes.data)
    } else {
      console.log('비로그인 상태')
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
