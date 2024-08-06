'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchUserProfileData } from '../common/api/mypage'
import { UserProfile_T } from '../common/types/user'
import DataWrapperForMainPage from './_components/DataWrapperForMainPage'
import Link from 'next/link'

export default function Main() {
  const { data, isSuccess, isError, error } = useQuery<UserProfile_T>({
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
