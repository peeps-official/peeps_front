'use client'
import { useRecoilState, useRecoilValue } from 'recoil'
import Link from 'next/link'

import { useEffect, useState } from 'react'
import { LogedInUserReqDataAtom } from '@/src/common/recoil/userAtom'
import NextImg from '@/src/common/utils/NextImg'
import { LoginUserDataReq_T } from '@/src/common/types/user'

export default function GlobalSidebarLeft() {
  const { user_data: logedInUserData } = useRecoilValue<LoginUserDataReq_T>(LogedInUserReqDataAtom)

  const isUserLogedIn = logedInUserData.user_seq === '' ? false : true

  return (
    <div
      className={'fixed flex h-screen w-24 flex-col items-start bg-white text-left font-kr text-mini text-dimgray-100'}
    >
      {isUserLogedIn && (
        <>
          {/* 본인 프로필 및 닉네임 */}
          <Link href={`/${logedInUserData?.user_nickname}`} className="flex items-center px-[15px] pb-2.5 pt-1">
            <div className="flex flex-col items-center gap-[4px]">
              <div className="h-12 w-12 overflow-hidden rounded-full">
                <NextImg alt="profile" src={logedInUserData?.user_profile_img ?? '/images/profile/profile.svg'} />
              </div>
              <div className="flex items-center px-1 py-0">
                <b className="relative inline-block min-w-[28px] font-bold leading-[16px]">
                  {logedInUserData?.user_nickname ?? '어서오세요'}
                </b>
              </div>
            </div>
          </Link>

          {/* 구분선 */}
          <div className="flex items-center px-[15px] py-0">
            <div className="bg-gray-10 relative h-[1px] w-12" />
          </div>
        </>
      )}

      {/* ALL BOX */}
      <Link href="/" className="flex items-center py-2.5 pl-[22px]">
        <div className="flex flex-col items-center gap-[4px]">
          <div className="h-8 w-8 shrink-0 overflow-hidden">
            <NextImg alt="All" src="/images/box.svg" />
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
            <div className="relative inline-block min-w-[28px] font-black leading-[16px]">친구</div>
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
    </div>
  )
}
