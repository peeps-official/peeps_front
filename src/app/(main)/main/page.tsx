'use client'

import { useCallback, useState, ChangeEvent } from 'react'

import NextImg from '@/src/common/utils/NextImg'
import Link from 'next/link'
import SlickSlider from './_components/Slider'
import Category from './_components/Category'

export default function Main() {
  const [search, setSearch] = useState('')

  const handleSearchValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    },
    [search],
  )

  return (
    <div className="w-full min-w-[800px] bg-white">
      {/* Main Header */}
      <header className="fixed left-0 top-0 z-header flex h-16 w-full items-center justify-between bg-white px-[30px]">
        {/* 로고 */}
        <Link href={'/'} className="flex h-full w-24 items-center py-5">
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
            <NextImg alt="search icon" src="/images/header/search.svg" styles="object-cover cursor-pointer" />
          </Link>
          <input
            type="text"
            placeholder="커뮤니티 검색해보기"
            className="h-full w-full flex-1 text-[15px] font-[400] leading-[1.2]"
            onChange={handleSearchValue}
          />
        </div>

        {/* 로그인 */}
        <Link
          href="/login"
          className="flex items-center gap-[10px] rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          로그인
        </Link>
      </header>

      {/* Hero Slider Section */}
      <section className="pt-16">
        <SlickSlider />
      </section>

      {/* Category Section */}
      <section className="">
        <Category />
      </section>
    </div>
  )
}
