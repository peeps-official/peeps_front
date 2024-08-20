'use client'
import { useCallback, useState, ChangeEvent } from 'react'

import { useRecoilValue } from 'recoil'
import { LogedInUserReqDataAtom } from '@/src/common/recoil/userAtom'
import NextImg from '@/src/common/utils/NextImg'
import Link from 'next/link'
import { LoginUserDataReq_T } from '@/src/common/types/user'
import Button from '@/src/common/components/Btn/Button'
import { useRouter } from 'next/navigation'

type GlobalHeaderProps = {
  onToggleSidebar: () => void
}

export default function GlobalHeader({ onToggleSidebar }: GlobalHeaderProps) {
  const { user_data: logedInUserData } = useRecoilValue<LoginUserDataReq_T>(LogedInUserReqDataAtom)
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
    <div className="fixed z-header flex h-header w-full min-w-[800px] items-center justify-center bg-white">
      {/* 헤더 영역 I */}
      <div className="h-full w-[64px] py-[10px] pl-[19px] pr-[4px]" onClick={onToggleSidebar}>
        <NextImg alt="collapsed menu icon" src="/images/menu.svg" styles="object-cover h-full cursor-pointer" />
      </div>

      {/* 헤더 영역 II */}
      <div className="flex h-full min-w-[847px] flex-1 items-center justify-between pl-[20px] pr-[20px]">
        {/* 로고 */}
        <Link href={'/'} className="h-full w-[85px] py-[20px]">
          <NextImg
            //
            alt="PEEPS logo"
            src="/images/logos/peeps.png"
            styles="object-cover cursor-pointer"
          />
        </Link>

        {/* 검색 */}
        <div className="flex h-[36px] w-[321px] items-center justify-center gap-[6px] rounded-3xs bg-whitesmoke-300 pl-[8px] pr-[20px]">
          <Link href={'/'} className="h-[20px] w-[20px] pt-[1px]">
            <NextImg alt="search icon" src="/images/search.svg" styles="object-cover cursor-pointer" />
          </Link>
          <input
            type="text"
            placeholder="커뮤니티 검색해보기"
            className="h-full w-full flex-1 text-[15px] font-[400] leading-[1.2]"
            onChange={handleSearchValue}
          />
        </div>

        {/* 프로필 & 버튼 */}
        <div className="flex items-center gap-[10px]">
          <div className="h-[50px] w-[50px]">
            <NextImg alt="club icon" src="/images/club.svg" />
          </div>
          <div className="h-[50px] w-[50px]">
            <NextImg alt="message icon" src="/images/Message.svg" />
          </div>
          <div className="h-[50px] w-[50px]">
            <NextImg alt="" src="/images/alarm.svg" />
          </div>
          {isUserLogedIn ? (
            <Link
              href={`/${logedInUserData.user_seq}`}
              className="h-[38px] w-[38px] cursor-pointer overflow-hidden rounded-[50%] object-cover"
            >
              <NextImg alt="profile icon" src={logedInUserData.user_profile_img ?? '/images/profile.svg'} />
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
    </div>
  )
}
