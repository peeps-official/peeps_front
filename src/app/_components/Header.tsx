'use client'

import { useLoginUser } from '@/src/common/hooks/useLogout'
import NextImg from '@/src/common/utils/NextImg'
import Link from 'next/link'

export default function Header() {
  const { logout, isLoggedIn, userData } = useLoginUser()

  return (
    <header className="fixed left-0 top-0 z-10 flex h-16 w-full items-center justify-between bg-white px-8 text-white">
      <Link href={'/'} className="flex h-full w-24 items-center py-5">
        <NextImg alt="PEEPS logo" src="/images/logos/peeps.png" styles="object-contain cursor-pointer" />
      </Link>

      <div className="flex h-8 items-center gap-4 text-sm font-bold">
        {isLoggedIn ? (
          <>
            <Link className="blueBtn h-full" href={`/${userData.user_seq}`}>
              마이페이지
            </Link>
            <button onClick={logout} className="redBtn h-full font-bold">
              로그아웃
            </button>
          </>
        ) : (
          <Link href="/login" className="blueBtn h-full">
            로그인
          </Link>
        )}
      </div>
    </header>
  )
}
