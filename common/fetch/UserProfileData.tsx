'use client'

import { fetchUserProfileData } from '@/common/api/mypage'
import { uerDataState } from '@/common/recoil/userAtom'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

interface FetchUserProfileComProps {
  children: React.ReactNode
}

export default function FetchUserProfileCom({
  children,
}: FetchUserProfileComProps) {
  const router = useRouter()
  const [recoilData, setRecoilData] = useRecoilState(uerDataState)

  const { isSuccess, error, data } = useQuery({
    queryKey: ['login'],
    queryFn: () => fetchUserProfileData(),
  })

  useEffect(() => {
    if (isSuccess) {
      console.log('user: ', data)
      setRecoilData(data)
    }

    if (error) {
      router.push('/login')
    }
  }, [isSuccess, error])

  return <>{children}</>
}
