import { uerDataState } from '@/state/userState'
import { useRecoilState } from 'recoil'
import NextImg from './utils/NextImg'
import Link from 'next/link'

export default function GlobalSidebarLeft() {
  const [recoilData, setRecoilData] = useRecoilState(uerDataState)

  return (
    <div className="fixed flex flex-col items-center h-screen text-left bg-white text-mini text-dimgray-100 font-kr">
      {/* 본인 프로필 및 닉네임 */}
      <Link href="/mypage" className="flex items-center pt-1 px-[15px] pb-2.5">
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
        <div className="h-[2px] w-12 relative bg-gray-10" />
      </div>
      {/* ALL BOX */}
      <div className="flex items-center py-0 px-[25px]">
        <div className="flex flex-col items-center py-2.5 px-0 gap-[5px]">
          <img
            className="relative overflow-hidden w-7 h-7 shrink-0"
            alt=""
            src="/images/box.svg"
          />
          <b className="h-5 relative leading-[16px] inline-block">All</b>
        </div>
      </div>
      {/* 구분선 */}
      <div className="flex items-center py-0 px-[15px]">
        <div className="h-[2px] w-12 relative bg-gray-10" />
      </div>
      {/* 팔로우한 사람 */}
      <div className="flex items-center py-0 px-[15px]">
        <div className="overflow-hidden flex flex-col items-center pt-[11px] px-0 pb-4 gap-[8px]">
          <div className="flex items-center px-1 py-0">
            <div className="flex items-center">
              <div className="relative leading-[16px] font-black inline-block min-w-[28px]">
                팔로우
              </div>
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
            <div className="w-12 h-12 rounded-31xl overflow-hidden shrink-0 flex items-center p-0.5 box-border">
              <img
                className="relative object-cover h-11 w-11 rounded-31xl"
                alt="profile"
                src="/images/profile.svg"
              />
            </div>
            <div className="w-12 h-12 rounded-31xl overflow-hidden shrink-0 flex items-center p-0.5 box-border">
              <img
                className="relative object-cover h-11 w-11 rounded-31xl"
                alt="profile"
                src="/images/profile.svg"
              />
            </div>
            <div className="w-12 h-12 rounded-31xl overflow-hidden shrink-0 flex items-center p-0.5 box-border">
              <img
                className="relative object-cover h-11 w-11 rounded-31xl"
                alt="profile"
                src="/images/profile.svg"
              />
            </div>
            <div className="w-12 h-12 rounded-31xl overflow-hidden shrink-0 flex items-center p-0.5 box-border">
              <img
                className="relative object-cover h-11 w-11 rounded-31xl"
                alt="profile"
                src="/images/profile.svg"
              />
            </div>
            <div className="w-12 h-12 rounded-31xl overflow-hidden shrink-0 flex items-center p-0.5 box-border">
              <img
                className="relative object-cover h-11 w-11 rounded-31xl"
                alt="profile"
                src="/images/profile.svg"
              />
            </div>
            <div className="w-12 h-12 rounded-31xl overflow-hidden shrink-0 flex items-center p-0.5 box-border">
              <img
                className="relative object-cover h-11 w-11 rounded-31xl"
                alt="profile"
                src="/images/profile.svg"
              />
            </div>
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
