'use client'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'

import { axiosWithAuth } from '@/src/common/api/instance'
import { LogedInUserReqDataAtom, Login_User_Follow_Atom } from '@/src/common/recoil/userAtom'
import { Login_User_Follow_T, LoginUserDataReq_T } from '@/src/common/types/user'
import NextImg from '@/src/common/utils/NextImg'
import { useEffect, useState } from 'react'

export default function GlobalSidebarNarrow() {
  const { user_data: logedInUserData } = useRecoilValue<LoginUserDataReq_T>(LogedInUserReqDataAtom)
  const followList = useRecoilValue<Login_User_Follow_T[]>(Login_User_Follow_Atom)

  const isUserLogedIn = logedInUserData.user_seq === '' ? false : true

  return (
    <div className={'flex h-screen flex-col items-start bg-white text-left font-kr text-mini text-dimgray-100'}>
      {isUserLogedIn && (
        <>
          {/* 본인 프로필 및 닉네임 */}
          <Link href={`/${logedInUserData?.user_seq}`} className="flex items-center px-[15px] pb-2.5 pt-1">
            <div className="flex flex-col items-center gap-[4px]">
              <div className="h-12 w-12 overflow-hidden rounded-full">
                <NextImg alt="profile" src={logedInUserData?.user_profile_img ?? '/images/profile/profile.svg'} />
              </div>
            </div>
          </Link>

          {/* ALL BOX */}
          <Link href="/" className="flex items-center py-2.5 pl-[22px]">
            <div className="flex flex-col items-center gap-[4px]">
              <div className="h-8 w-8 shrink-0 overflow-hidden">
                <NextImg alt="All" src="/images/sidebar/box.svg" />
              </div>
              <div className="item-center flex px-1 py-0">
                <b className="relative inline-block min-w-[28px] font-bold leading-[16px]">ALL</b>
              </div>
            </div>
          </Link>

          {/* 구분선 */}
          <div className="flex items-center px-[15px] py-0">
            <div className="bg-gray-10 relative h-[1px] w-12" />
          </div>

          {/* badge */}
          <div className="flex items-center px-[15px] py-0">
            <div className="flex flex-col items-center gap-[8px] overflow-hidden px-0 pb-4 pt-[11px]">
              <div className="flex items-center">
                <div className="relative inline-block min-w-[28px] font-black leading-[16px]">뱃지</div>
              </div>
              <div className="flex flex-col items-center gap-[10px]">
                <div className="rounded-31xl box-border flex h-12 w-12 shrink-0 items-center overflow-hidden p-0.5">
                  <img
                    className="rounded-31xl relative h-11 w-11 object-cover"
                    alt="profile"
                    src="/images/profile/profile.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div className="flex items-center px-[15px] py-0">
            <div className="bg-gray-10 relative h-[1px] w-12" />
          </div>

          {/* friend */}

          <div className="flex items-center px-[15px] py-0">
            <div className="flex flex-col items-center gap-[8px] overflow-hidden px-0 pb-4 pt-[11px]">
              <div className="flex items-center">
                <div className="relative inline-block min-w-[28px] font-black leading-[16px]">팔로우</div>
              </div>
              {followList &&
                followList.map((follow: Login_User_Follow_T) => (
                  <Link
                    key={follow.user_sep}
                    href={follow.user_sep}
                    className="flex flex-col items-center gap-[10px]"
                    id={follow.user_id}
                  >
                    <div className="box-border flex h-12 w-12 shrink-0 items-center overflow-hidden p-0.5">
                      <img
                        className="relative h-11 w-11 overflow-hidden rounded-full object-cover"
                        alt="profile"
                        src={follow.image}
                      />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
