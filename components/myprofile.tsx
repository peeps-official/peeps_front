import { useEffect, useState } from 'react'
import ProfileModal from '../pages/mypage/components/ProfileModal'

export default function MyProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    return () => setIsModalOpen(false)
  }, [])

  console.log(isModalOpen)

  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-4 box-border max-w-full shrink-0">
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
        {/* 프로필 배경화면 설정 */}
        <header className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
          <img
            className="h-[204px] flex-1 relative rounded-[15px] max-w-full overflow-hidden object-cover"
            alt="프로필 배경사진"
            src="/images/profilebg.png"
          />
        </header>
        {/* 프로필 설정 */}
        <div className="flex flex-row items-start justify-start gap-[10px]">
          {/* 프로필 사진 */}
          <button className="cursor-pointer [border:none] p-1 bg-[transparent] overflow-hidden flex flex-row items-center justify-center">
            <img
              className="h-24 w-24 relative rounded-[50%] object-cover"
              alt="프로필 사진"
              src="images/mimi.jpg"
            />
          </button>
          {/* 프로필 내용 */}
          <div className="flex flex-col items-start justify-start gap-[11px]">
            {/* 이름 */}
            <h1 className="m-0 relative text-[28px] tracking-[-0.01em] leading-[34px] font-bold font-inherit inline-block min-w-[103px]">
              미미미누
            </h1>
            {/* 닉네임 및 팔로워 수 */}
            <div className="flex flex-row items-start justify-start text-dimgray-100 font-roboto">
              <div className="flex flex-row items-start justify-start">
                <div className="relative tracking-[-0.01em] leading-[14px] font-medium inline-block min-w-[52px]">
                  @mi3nu
                </div>
                <div className="w-3 relative tracking-[-0.01em] leading-[14px] font-medium text-center flex items-center justify-center shrink-0">
                  ‧
                </div>
              </div>
              <div className="relative tracking-[-0.01em] leading-[14px] font-medium inline-block min-w-[91px]">
                팔로워 127만명
              </div>
            </div>
            {/* 소개글 */}
            <div className="relative tracking-[-0.01em] leading-[14px] font-medium font-roboto text-dimgray-100">
              안녕하세요, 미미미누입니다!
            </div>
            {/* 대표 뱃지 */}
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px]"
                loading="lazy"
                alt=""
                src="/images/badge1.png"
              />
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px]"
                loading="lazy"
                alt=""
                src="/images/badge2.png"
              />
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px]"
                loading="lazy"
                alt=""
                src="/images/badge3.png"
              />
              <img
                className="h-[18px] w-[18px] relative rounded-[50%] object-cover min-h-[18px]"
                loading="lazy"
                alt=""
                src="/images/badge4.png"
              />
              <div className="h-[18px] w-[18px] relative rounded-[50%] bg-gainsboro" />
            </div>
            {/* 팔로우하기 및 프로필 상세보기 */}
            <div className="flex flex-row items-center justify-start gap-[10px] text-center">
              <div className="flex flex-row items-start justify-start">
                <div className="rounded-[15px] bg-gray-100/10 overflow-hidden flex flex-row items-center justify-center py-0 px-3 whitespace-nowrap">
                  <div className="w-[55px] relative tracking-[-0.01em] leading-[34px] font-medium text-small flex items-center justify-center min-w-[55px]">
                    팔로우 중
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="rounded-[15px] bg-primary-blue overflow-hidden flex flex-row items-center justify-center py-0 px-[11px] whitespace-nowrap text-white"
              >
                <b className="w-[68px] relative tracking-[-0.01em] leading-[34px] text-small flex items-center justify-center min-w-[68px]">
                  프로필 보기
                </b>
              </button>
              {isModalOpen && <ProfileModal setIsModalOpen={setIsModalOpen} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
