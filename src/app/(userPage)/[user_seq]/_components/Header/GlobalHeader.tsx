'use client'

import Button from '@/src/common/components/Btn/Button'
import { LogedInUserReqDataAtom } from '@/src/common/recoil/userAtom'
import { LoginUserData_T } from '@/src/common/types/user'
import NextImg from '@/src/common/utils/NextImg'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { useRecoilValue } from 'recoil'

type GlobalHeaderProps = {
  onToggleSidebar: () => void
}

export default function GlobalHeader({ onToggleSidebar }: GlobalHeaderProps) {
  const [검색, set검색] = useState<string>('')
  const { user_data: logedInUserData } = useRecoilValue<LoginUserData_T>(LogedInUserReqDataAtom)

  const searchParams = useSearchParams()
  const search = searchParams.get('name')

  const router = useRouter()

  const isUserLogedIn = logedInUserData.user_seq === '' ? false : true

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value)
    if (e.target.value) {
      set검색(e.target.value)
    } else {
      set검색('')
    }
  }

  useEffect(() => {
    if (search) set검색(search)
  }, [])

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
          defaultValue={search ?? ''}
          placeholder="써클 검색해보기"
          className="h-full w-full flex-1 text-[15px] font-[400] leading-[1.2]"
          onChange={handleInput}
        />
        {검색 && 검색.length > 0 && <button onClick={() => router.push(`/circle?name=${검색}`)}>검색</button>}
      </div>

      {/* 프로필 & 버튼 */}
      <div className="flex items-center gap-[10px]">
        {/* <div className="h-[50px] w-[50px]">
          <NextImg alt="club icon" src="/images/header/club.svg" />
        </div>
        <div className="h-[50px] w-[50px]">
          <NextImg alt="message icon" src="/images/header/message.svg" />
        </div>
        <div className="h-[50px] w-[50px]">
          <NextImg alt="" src="/images/header/alarm.svg" />
        </div> */}
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
