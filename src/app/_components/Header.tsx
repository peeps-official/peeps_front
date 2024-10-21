'use client';

import Link from 'next/link';
import { UserLoginDataStateAtom, LogedInUserDefaultData } from '../../common/recoil/userAtom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { axiosWithAuth } from '../../common/api/instance';
import NextImg from '@/src/common/utils/NextImg';
import { useEffect } from 'react';

export default function Header() {
  const [recoilData, setRecoilData] = useRecoilState(UserLoginDataStateAtom); // Recoil 상태 가져오기

  // 로그아웃 처리 함수
  const handleLogout = async () => {
    try {
      await axiosWithAuth.post(`/logout`); // 로그아웃 API 호출
      // 초기값으로 설정
      setRecoilData(LogedInUserDefaultData.user_data); // 초기값으로 재설정
      window.alert('로그아웃 했습니다');
    } catch (error) {
      console.error('로그아웃 실패:', error);
      window.alert('로그아웃 중 오류가 발생했습니다.');
    }
  };

  // 로그인 여부 확인
  const isLoggedIn = Boolean(recoilData.user_id); // user_id가 있으면 로그인 상태

  return (
    <header className="fixed left-0 top-0 z-10 flex h-16 w-full items-center justify-between bg-white px-8 text-white">
      {/* PEEPS 로고 */}
      <Link href={"/"} className="flex h-full w-24 items-center py-5">
        <NextImg alt="PEEPS logo" src="/images/logos/peeps.png" styles="object-contain cursor-pointer" />
      </Link>

      {/* 로그인/로그아웃 버튼 */}
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="block px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
          >
            로그아웃
          </button>
        ) : (
          <Link
            href="/login"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            로그인
          </Link>
        )}
      </div>
    </header>
  );
}
