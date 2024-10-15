'use client'
import { useCallback, useState, ChangeEvent } from 'react'

import { useRecoilValue } from 'recoil'
import { LogedInUserReqDataAtom } from '@/src/common/recoil/userAtom'
import NextImg from '@/src/common/utils/NextImg'
import Link from 'next/link'
import { LoginUserData_T } from '@/src/common/types/user'
import Button from '@/src/common/components/Btn/Button'
import { useRouter } from 'next/navigation'

type GlobalHeaderProps = {
  onToggleSidebar: () => void
}

export default function GlobalHeader({ onToggleSidebar }: GlobalHeaderProps) {
  const { user_data: logedInUserData } = useRecoilValue<LoginUserData_T>(LogedInUserReqDataAtom)
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleSearchValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    },
    [search],
  )

  const isUserLogedIn = logedInUserData.user_seq === '' ? false : true

  return (
    <div className="fixed top-0 z-header flex h-header w-full min-w-[847px] flex-1 items-center justify-end bg-white pl-[20px] pr-[20px]">
      {/* 검색 */}
      <div className="absolute left-1/2 flex h-[36px] w-[321px] translate-x-[-50%] items-center justify-center gap-[6px] rounded-3xs bg-whitesmoke-300 pl-[8px] pr-[20px]">
        <Link href={'/'} className="h-[20px] w-[20px] pt-[1px]">
          <NextImg alt="search icon" src="/images/header/search.svg" styles="object-cover cursor-pointer" />
        </Link>
        <input
          id="search"
          type="text"
          placeholder="커뮤니티 검색해보기"
          className="h-full w-full flex-1 text-[15px] font-[400] leading-[1.2]"
          onChange={handleSearchValue}
        />
      </div>

      {/* 프로필 & 버튼 */}
      <div className="flex items-center gap-[10px]">
        <div className="h-[50px] w-[50px]">
          <NextImg alt="club icon" src="/images/header/club.svg" />
        </div>
        <div className="h-[50px] w-[50px]">
          <NextImg alt="message icon" src="/images/header/message.svg" />
        </div>
        <div className="h-[50px] w-[50px]">
          <NextImg alt="" src="/images/header/alarm.svg" />
        </div>
        {isUserLogedIn ? (
          <Link
            href={`/${logedInUserData.user_seq}`}
            className="h-[38px] w-[38px] cursor-pointer overflow-hidden rounded-[50%] object-cover"
          >
            <NextImg alt="profile icon" src={logedInUserData.user_profile_img ?? '/images/profile/profile.svg'} />
          </Link>
        ) : (
          <Button
            title="로그인"
            onClickFn={() => {
              router.push('/login')
            }}
            styles="loginBtn"
          />
        )}
      </div>
    </div>
  )
}
