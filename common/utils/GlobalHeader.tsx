import { useCallback, useState, ChangeEvent } from 'react'
import { useRouter } from 'next/router'

import NextImg from './NextImg'
import { useRecoilState } from 'recoil'
import { uerDataState } from '../recoil/userAtom'

export default function GlobalHeader() {
  const [recoilData, setRecoilData] = useRecoilState(uerDataState)
  console.log('reocil: ', recoilData)
  const router = useRouter()

  const onProfileClick = useCallback(() => {
    router.push('/')
  }, [router])

  const onLogoClick = useCallback(() => {
    router.push('/')
  }, [router])

  // 검색창 기능 //
  const [search, setSearch] = useState('')

  async function clickSearch() {
    try {
      if (search) {
        console.log(search)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleSearchValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    },
    [search]
  )
  ////

  return (
    <div className="fixed flex items-center justify-center w-full bg-white h-header z-header min-w-[800px]">
      {/* 헤더 영역 I */}
      <div className="w-[64px] h-full py-[10px] pl-[19px] pr-[4px]">
        <button
          // onClick={onmenuClick}
          className="w-full h-full"
        >
          <NextImg
            alt="collapsed menu icon"
            src="/images/menu.svg"
            styles="object-cover h-full cursor-pointer"
          />
        </button>
      </div>

      {/* 헤더 영역 II */}
      <div className="flex-1 flex items-center justify-between pl-[20px] pr-[20px] min-w-[847px] h-full">
        {/* 로고 */}
        <button onClick={onLogoClick} className="w-[85px] h-full py-[20px]">
          <NextImg
            //
            alt="PEEPS logo"
            src="/images/NEW_LOGO.png"
            styles="object-cover cursor-pointer"
          />
        </button>

        {/* 검색 */}
        <div className="w-[321px] h-[36px] pl-[8px] pr-[20px]  flex items-center justify-center gap-[6px] rounded-3xs bg-whitesmoke-300">
          <button onClick={clickSearch} className="w-[20px] h-[20px] pt-[1px]">
            <NextImg
              alt="search icon"
              src="/images/search.svg"
              styles="object-cover cursor-pointer"
            />
          </button>
          <input
            type="text"
            placeholder="커뮤니티 검색해보기"
            className="w-full h-full flex-1 font-[400] text-[15px] leading-[1.2]"
            onChange={handleSearchValue}
          />
        </div>

        {/* 프로필 & 버튼 */}
        <div className="flex items-center gap-[10px]">
          <div className="w-[50px] h-[50px]">
            <NextImg alt="club icon" src="/images/club.svg" />
          </div>
          <div className="w-[50px] h-[50px]">
            <NextImg alt="message icon" src="/images/Message.svg" />
          </div>
          <div className="w-[50px] h-[50px]">
            <NextImg alt="" src="/images/alarm.svg" />
          </div>
          <button
            onClick={onProfileClick}
            className="w-[38px] h-[38px] rounded-[50%] object-cover cursor-pointer overflow-hidden"
          >
            <NextImg
              alt="profile icon"
              src={recoilData?.profileImage ?? '/images/profile.svg'}
            />
          </button>
        </div>
      </div>
    </div>
  )
}