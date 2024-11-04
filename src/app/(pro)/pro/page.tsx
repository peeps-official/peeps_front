'use client'

import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { axiosWithAuth } from '../../../common/api/instance'
import { OnlyLogedInUserData } from '../../../common/recoil/userAtom'
import DataWrapperForProPage from './_components/DataWrapperForProPage'

export default function Pro() {
  const [recoilData, setRecoilData] = useRecoilState(OnlyLogedInUserData)

  return (
    <DataWrapperForProPage>
      {/* 공사중 */}
      <div className="flex h-screen w-full items-center justify-center bg-gray-lighter">
        <div className="text-center">
          <div className="text-bold p-[1rem] text-center text-large text-black">🛠️ 공사중 🛠️</div>

          <div className="flex gap-[10px]">
            <Link
              href={`/${recoilData?.user_seq}`}
              className="block rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              {recoilData?.user_nickname}님의 페이지
            </Link>
            <Link href="/login" className="block rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
              로그인 페이지
            </Link>

            <button
              onClick={() => {
                axiosWithAuth.post(`/logout`)
                window.alert('로그아웃 했습니다')
              }}
              className="block rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              로그아웃
            </button>

            <Link href="/admin" className="block rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
              관리자 페이지
            </Link>

            <Link href="/" className="block rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
              메인 페이지
            </Link>
          </div>
        </div>
      </div>
    </DataWrapperForProPage>
  )
}
