'use client'

import DataWrapperForProPage from './_components/DataWrapperForProPage'
import Link from 'next/link'
import { UserLoginDataStateAtom } from '../../../common/recoil/userAtom'
import { useRecoilState } from 'recoil'
import { axiosWithAuth } from '../../../common/api/instance'

export default function Pro() {
  const [recoilData, setRecoilData] = useRecoilState(UserLoginDataStateAtom)

  return (
    <DataWrapperForProPage>
      {/* 공사중 */}
      <div className="flex items-center justify-center w-full h-screen bg-gray-lighter">
        <div className="text-center">
          <div className="p-[1rem] text-center text-black text-bold text-large">
            🛠️ 공사중 🛠️
          </div>

          <div className="flex gap-[10px]">
            <Link
              href={`/${recoilData?.user_seq}`}
              className="block px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              {recoilData?.user_nickname}님의 페이지
            </Link>
            <Link
              href="/login"
              className="block px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              로그인 페이지
            </Link>

            <button
              onClick={() => {
                axiosWithAuth.post(`/logout`)
                window.alert('로그아웃 했습니다')
              }}
              className="block px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              로그아웃
            </button>

            <Link
              href="/admin"
              className="block px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              관리자 페이지
            </Link>

            <Link
              href="/"
              className="block px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              메인 페이지
            </Link>
          </div>
        </div>
      </div>
    </DataWrapperForProPage>
  )
}
