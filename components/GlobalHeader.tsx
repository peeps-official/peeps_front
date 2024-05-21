import { useCallback, useState, ChangeEvent } from 'react'
import { useRouter } from 'next/router'

export default function GlobalHeader() {
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
    <div className="fixed w-full self-stretch flex flex-row flex-wrap bg-white items-start justify-start box-border z-[1]">
      {/* 헤더 영역 I */}
      <div className="flex flex-col items-start justify-start py-2.5 pl-5 pr-[18px]">
        <div className="flex flex-col items-center justify-center box-border gap-[6px]">
          <img 
            className="object-cover h-full cursor-pointer" 
            // onClick={onmenuClick}
            alt="collapsed menu icon" 
            src="/images/menu.svg" />
        </div>
      </div>
      {/* 헤더 영역 II */}
      <div className="flex-1 flex flex-row items-start justify-between py-2.5 px-5 box-border relative min-w-[847px] max-w-full gap-5 lg:flex-wrap">
        {/* 로고 */}
        <div className="w-[240px] h-[30px] flex flex-col items-start justify-start pt-2.5 pb-0 box-border">
          <img
            className="object-cover h-full cursor-pointer"
            onClick={onLogoClick}
            alt="PEEPS logo"
            src="/images/NEW_LOGO.png"
          />
        </div>
        {/* 검색 */}
        <div className="w-[548px] flex flex-row items-center justify-start py-0.5 px-1 box-border relative max-w-full">
          <div className="self-stretch flex flex-row items-center justify-center py-2 px-1.5 box-border relative max-w-full z-[1]">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-whitesmoke-300" />
            <div className="h-[21.3px] w-[518px] flex flex-row items-center justify-center py-2 px-0 box-border gap-[6px] max-w-full z-[1]">
              <img
                className="h-[22px] w-[22px] relative object-cover cursor-pointer"
                onClick={clickSearch}
                alt="search icon"
                src="/images/search.svg"
              />
              <input
                type="text"
                placeholder="커뮤니티 검색해보기"
                className="w-[calc(100%_-_22px)] [border:none] [outline:none] font-medium font-kr text-tiny bg-[transparent] h-5 flex-1 relative tracking-[-0.01em] leading-[20px] text-silver text-left inline-block min-w-[250px] max-w-[calc(100%_-_28px)] p-0"
                onChange={handleSearchValue}
              />
            </div>
          </div>
        </div>
        {/* 프로필 & 버튼 */}
        <div className="flex flex-row items-start justify-start gap-[10px] z-[1]">
          <img
            className="h-12 w-12 relative min-h-[40px]"
            alt=""
            src="/images/club.svg"
          />
          <img
            className="h-12 w-12 relative min-h-[40px]"
            alt=""
            src="/images/Message.svg"
          />
          <img
            className="h-12 w-12 relative min-h-[40px]"
            alt=""
            src="/images/alarm.svg"
          />
          <div className="flex flex-col items-start justify-start px-0 pt-1 pb-0">
            <img
              className="h-10 w-10 relative rounded-[50%] object-cover cursor-pointer"
              alt=""
              src="images/myprofile.png"
              onClick={onProfileClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
