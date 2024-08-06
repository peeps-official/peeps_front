'use client'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { uerDataStateAtom } from '../recoil/userAtom'
import { fetchUserProfileData } from '../api/mypage'

interface FetchUserProfileComProps {
  children: React.ReactNode
}

export default function FetchUserProfileCom({
  children,
}: FetchUserProfileComProps) {
  const router = useRouter()
  const [recoilData, setRecoilData] = useRecoilState(uerDataStateAtom)

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
