'use client'

import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { fetchUserProfileData } from '../common/api/mypage'
import DataWrapperForMainPage from './_components/DataWrapperForMainPage'
import { uerDataState } from '../common/recoil/userAtom'
import Link from 'next/link'

export default function Main() {
  const [recoilData, setRecoilData] = useRecoilState(uerDataState)
  const router = useRouter()

  const { isSuccess, isError, error, data } = useQuery({
    queryKey: ['login'],
    queryFn: () => fetchUserProfileData(),
  })

  useEffect(() => {
    if (isSuccess) {
      console.log('로그인: ', data)
      setRecoilData(data)
      router.push(`mypage/${data.nickname}`)
    }

    if (isError) {
      console.log(error.message)
      router.push('/login')
    }
  }, [isSuccess, error])

  return (
    <DataWrapperForMainPage>
      <div className="flex items-center justify-center w-full h-full bg-gray-10">
        <div>
          <div className="m-auto text-center text-black text-bold text-large">
            🛠️ 공사중 🛠️
          </div>
          <Link href="/login" className="text-blue-10 text-bold text-large">
            로그인 페이지
          </Link>
          <Link href="/admin" className="text-blue-10 text-bold text-large">
            관리자 페이지
          </Link>
        </div>
      </div>
    </DataWrapperForMainPage>
  )
}
