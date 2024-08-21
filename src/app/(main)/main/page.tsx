'use client'

import { useCallback, useState, ChangeEvent } from 'react'

import NextImg from '@/src/common/utils/NextImg'
import Link from 'next/link'
import SlickSlider from './_components/Slider'

export default function Main() {
  const [search, setSearch] = useState('')

  const handleSearchValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    },
    [search]
  )
  
  return (
    <div className='w-full min-w-[800px] bg-white'>
        {/* Main Header */}
        <header className='fixed top-0 left-0 w-full h-16 bg-white z-header flex items-center justify-between px-[30px]'>
            {/* 로고 */}
            <Link href={'/'} className="w-24 h-full flex items-center py-5">
            <NextImg
                //
                alt="PEEPS logo"
                src="/images/logos/peeps.png"
                styles="object-cover cursor-pointer"
            />
            </Link>

            {/* 검색 */}
            <div className="w-[321px] h-[36px] pl-[8px] pr-[20px]  flex items-center justify-center gap-[6px] rounded-3xs bg-whitesmoke-300">
            <Link href={'/'} className="w-[20px] h-[20px] pt-[1px]">
                <NextImg
                alt="search icon"
                src="/images/search.svg"
                styles="object-cover cursor-pointer"
                />
            </Link>
            <input
                type="text"
                placeholder="커뮤니티 검색해보기"
                className="w-full h-full flex-1 font-[400] text-[15px] leading-[1.2]"
                onChange={handleSearchValue}
            />
            </div>

            {/* 로그인 */}
            <Link
              href="/main"
              className="flex items-center gap-[10px] px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
            로그인
            </Link>
        </header>

        {/* Hero Slider Section */}
        <section className='pt-16'>
            <SlickSlider />
        </section>
        
        {/* Category Section */}
        <section className=''>

        </section>
    </div>
  )
}
