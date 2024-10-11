'use client';

import Link from 'next/link';
import { UserLoginDataStateAtom } from '../../common/recoil/userAtom';
import { useRecoilState } from 'recoil';
import { axiosWithAuth } from '../../common/api/instance';
import NextImg from '@/src/common/utils/NextImg';

export default function Header() {
  const [recoilData] = useRecoilState(UserLoginDataStateAtom); // 로그인 상태 가져오기
  const isLoggedIn = Boolean(recoilData); // 로그인 여부 확인

  return (
    <header className="fixed left-0 top-0 z-10 flex h-16 w-full items-center justify-between bg-white px-8 text-white">
      {/* PEEPS 로고 */}
      <Link href={"/"} className="flex h-full w-24 items-center py-5">
        <NextImg alt="PEEPS logo" src="/images/logos/peeps.png" styles="object-contain cursor-pointer" />
      </Link>

      {/* 로그인/로그아웃 버튼 */}
      <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            로그인
          </Link>
      </div>
    </header>
  );
}
