'use client'

import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { fetchUserProfileData } from '../common/api/mypage'
import DataWrapperForMainPage from './_components/DataWrapperForMainPage'
import { userProfileState } from '../common/recoil/userAtom'
import Link from 'next/link'
import { UserProfile } from '../common/types/user'

export default function Main() {
  const [recoilData, setRecoilData] =
    useRecoilState<UserProfile>(userProfileState)

  const { data, isSuccess, isError, error } = useQuery<UserProfile>({
    queryKey: ['login'],
    queryFn: () => fetchUserProfileData(),
  })

  return (
    <DataWrapperForMainPage>
      <div className="flex items-center justify-center w-full h-full bg-gray-10">
        <div className="">
          <div className="p-[1rem] text-center text-black text-bold text-large">
            🛠️ 공사중 🛠️
          </div>

          <div className="flex gap-[10px]">
            <Link
              href={`/${data?.nickname}`}
              className="block px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              {data?.nickname}님의 페이지
            </Link>
            <Link
              href="/login"
              className="block px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              로그인 페이지
            </Link>

            <Link
              href="/admin"
              className="block px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              관리자 페이지
            </Link>
          </div>
        </div>
      </div>
    </DataWrapperForMainPage>
  )
}
