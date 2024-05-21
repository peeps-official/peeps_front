import { useEffect, useState } from 'react'
import ProfileModal from './ProfileModal'
import { mypageData } from '../../../data/dummy'

const data = mypageData

export default function MyProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(prevState => !prevState);
  };

  // useEffect(() => {
  //   return () => setIsModalOpen(false)
  // }, [])

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  console.log(isModalOpen)

  return (
    <div className="box-border flex flex-row items-start self-stretch justify-start max-w-full py-0 pl-4 pr-5 shrink-0">
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
        {/* 프로필 배경화면 설정 */}
        <header className="box-border flex flex-row items-start self-stretch justify-start max-w-full py-0 pl-px pr-0">
          <img
            className="h-[204px] flex-1 relative rounded-[15px] max-w-full overflow-hidden object-cover"
            alt="profile bgimg"
            src={data.profile.bgimg}
          />
        </header>
        {/* 프로필 설정 */}
        <div className="flex flex-row items-start justify-start gap-[10px]">
          {/* 프로필 사진 */}
          <button className="cursor-pointer [border:none] p-1 bg-[transparent] overflow-hidden flex flex-row items-center justify-center">
            <img
              className="h-24 w-24 relative rounded-[50%] object-cover"
              alt="profile image"
              src={data.profile.img}
            />
          </button>
          {/* 프로필 내용 */}
          <div className="flex flex-col items-start justify-start gap-[11px]">
            {/* 이름 */}
            <h1 className="m-0 relative text-[28px] tracking-[-0.01em] leading-[34px] font-bold font-inherit inline-block min-w-[103px]">
              {data.profile.name}
            </h1>
            {/* 닉네임 및 팔로워 수 */}
            <div className="flex flex-row items-start justify-start text-dimgray-100 font-roboto">
              <div className="flex flex-row items-start justify-start">
                <div className="relative tracking-[-0.01em] leading-[14px] font-medium inline-block min-w-[52px]">
                  {data.profile.nickname}
                </div>
                <div className="w-3 relative tracking-[-0.01em] leading-[14px] font-medium text-center flex items-center justify-center shrink-0">
                  ‧
                </div>
              </div>
              <div className="relative tracking-[-0.01em] leading-[14px] font-medium inline-block min-w-[91px]">
                팔로워 {data.profile.follow}명
              </div>
            </div>
            {/* 소개글 */}
            <div className="relative tracking-[-0.01em] leading-[14px] font-medium font-roboto text-dimgray-100">
              {data.profile.info}
            </div>
            {/* 대표 뱃지 */}
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px]"
                loading="lazy"
                alt="badge of Korea.Univ"
                src={data.profile.badge[1]}
              />
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px]"
                loading="lazy"
                alt="badge of Youtube"
                src={data.profile.badge[2]}
              />
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px]"
                loading="lazy"
                alt="badge of Instagram"
                src={data.profile.badge[3]}
              />
              <img
                className="h-[18px] w-[18px] relative rounded-[50%] object-cover min-h-[18px]"
                loading="lazy"
                alt="badge of Facebook"
                src={data.profile.badge[4]}
              />
              <div className="h-[18px] w-[18px] relative rounded-[50%] bg-gainsboro" />
            </div>
            {/* 팔로우하기 및 프로필 상세보기 */}
            <div className="flex flex-row items-center justify-start gap-[10px] text-center">
              <div className="flex flex-row items-start justify-start">
                <button 
                  onClick={handleFollowClick}
                  className={`rounded-[15px] overflow-hidden flex flex-row items-center justify-center py-0 px-3 whitespace-nowrap
                              ${isFollowing ? 'bg-gray-100/10 text-black' : 'bg-black text-white'}`}
                >
                  <b className="w-[55px] relative tracking-[-0.01em] leading-[34px] font-medium text-small flex items-center justify-center min-w-[55px]">
                    {isFollowing ? '팔로우 중' : '팔로우'}
                  </b>
                </button>
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
