'use client'
import { useRecoilState } from 'recoil'
import Link from 'next/link'

import { useEffect, useState } from 'react'
import { uerDataStateAtom } from '@/src/common/recoil/userAtom'
import NextImg from '@/src/common/utils/NextImg'

export default function GlobalSidebarLeft() {
  const [recoilData, setRecoilData] = useRecoilState(uerDataStateAtom)

  return (
    <div className={"fixed flex flex-col items-start h-screen w-24 text-left bg-white text-mini text-dimgray-100 font-kr"}>
      {/* 본인 프로필 및 닉네임 */}
      <Link
        href={`/${recoilData?.nickname}`}
        className="flex items-center pt-1 px-[15px] pb-2.5"
      >
        <div className="flex flex-col items-center gap-[4px]">
          <div className="w-12 h-12 overflow-hidden rounded-full ">
            <NextImg
              alt="profile"
              src={recoilData?.profileImage ?? '/images/profile.svg'}
            />
          </div>
          <div className="flex items-center px-1 py-0">
            <b className="relative leading-[16px] font-bold inline-block min-w-[28px]">
              {recoilData?.nickname ?? '어서오세요'}
            </b>
          </div>
        </div>
      </Link>

      {/* 구분선 */}
      <div className="flex items-center py-0 px-[15px]">
        <div className="h-[1px] w-12 relative bg-gray-10" />
      </div>

      {/* ALL BOX */}
      <Link 
        href="/"
        className="flex items-center pl-[22px] py-2.5"
      >
        <div className="flex flex-col items-center gap-[4px]">
          <div className="w-8 h-8 overflow-hidden shrink-0">
            <NextImg
              alt="All"
              src="/images/box.svg"
            />
          </div>
          <div className="flex px-1 py-0 item-center">
            <b className="relative leading-[16px] font-bold inline-block min-w-[28px]">
              ALL
            </b>
          </div>
        </div>
      </Link>

      {/* 구분선 */}
      <div className="flex items-center py-0 px-[15px]">
        <div className="h-[1px] w-12 relative bg-gray-10" />
      </div>
      
      {/* badge */}
      <div className="flex items-center py-0 px-[15px]">
        <div className="overflow-hidden flex flex-col items-center pt-[11px] px-0 pb-4 gap-[8px]">
          <div className="flex items-center">
            <div className="relative leading-[16px] font-black inline-block min-w-[28px]">
              뱃지
            </div>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <div className="w-12 h-12 rounded-31xl overflow-hidden shrink-0 flex items-center p-0.5 box-border">
              <img
                className="relative object-cover h-11 w-11 rounded-31xl"
                alt="profile"
                src="/images/profile.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="flex items-center py-0 px-[15px]">
        <div className="h-[1px] w-12 relative bg-gray-10" />
      </div>

      {/* friend */}
      <div className="flex items-center py-0 px-[15px]">
        <div className="overflow-hidden flex flex-col items-center pt-[11px] px-0 pb-4 gap-[8px]">
          <div className="flex items-center">
            <div className="relative leading-[16px] font-black inline-block min-w-[28px]">
              친구
            </div>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <div className="w-12 h-12 rounded-31xl overflow-hidden shrink-0 flex items-center p-0.5 box-border">
              <img
                className="relative object-cover h-11 w-11 rounded-31xl"
                alt="profile"
                src="/images/profile.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
