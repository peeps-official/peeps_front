import NextImg from '../../../components/utils/NextImg'
import { popUpData } from '../data/dummy'

const data = popUpData

export default function ProfileModal({ setIsModalOpen }: any) {
  return (
    <div
      className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-modal"
      onClick={() => {
        setIsModalOpen(false)
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[10px] flex flex-col items-start justify-start py-[24px] px-[42px] gap-[10px]"
      >
        {/* 팝업 헤더 */}
        <div className="flex flex-row items-center justify-between w-full">
          <div className="kr-normal-24">프로필</div>
          {/* <button
              onClick={() => setIsModalOpen(false)}
              className="text-lg font-bold text-black"
            >
              프로필 수정
            </button> */}
        </div>

        {/* 팝업 컨텐츠 */}
        <div className="flex gap-[14px]">
          {/* 왼쪽 */}
          <div className="flex flex-col items-center justify-start gap-[15px] w-[368px]">
            {/* 프로필 */}
            <div className="flex gap-[14px] shadow-popupBox w-full px-[10px] py-[17px]">
              <NextImg
                src={data.profile.img}
                alt="profile"
                styles="block w-[114px] h-[114px] rounded-[5px] overflow-hidden object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between w-full">
                  <p className="kr-normal-18">{data.profile.name}</p>
                  <NextImg
                    src={data.profile.badge}
                    alt="badge"
                    styles="w-[18px] h-[18px] rounded-[50%] overflow-hidden object-cover min-h-[18px]"
                  />
                </div>
                <div className="flex flex-col gap-[12px] w-full text-left kr-normal-12">
                  <div>{data.profile.subEx}</div>
                  <div>
                    <div>{data.profile.phone}</div>
                    <div>{data.profile.email}</div>
                    <div>{data.profile.url}</div>
                    <div>{data.profile.addr}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* 뱃지 */}
            <div className="w-full shadow-popupBox px-[16px] py-[14px]">
              <div>뱃지</div>
              <div>뱃지 리스트</div>
              <div>
                <div>뱃지 정보</div>
                <div>인증 상세 정보</div>
              </div>
            </div>
          </div>

          {/* 오른쪽 */}
          <div className="flex flex-col items-start justify-start gap-[23px] w-[368px]">
            {/* 학력 */}
            <div className="flex flex-col gap-[10px] w-full shadow-popupBox px-[16px] py-[14px]">
              <div className="text-left kr-bold-14">학력 </div>

              {data.educate.map((data) => {
                return (
                  <div className="flex items-start flex-start gap-[32px] pb-[24px]">
                    <div className="h-[14px] w-[93px] flex items-center flex-start kr-normal-13 text-[#666]">
                      <NextImg
                        src="/images/profile/profileDot.svg"
                        alt="dot"
                        styles="w-[8px] h-[8px] mr-[8px]"
                      />
                      <div className="w-[83px] text-left">
                        {data.dateStart} -
                        {data.dateEnd ? data.dateEnd : '진행 중'}
                      </div>
                    </div>
                    <div className="text-left kr-normal-14">
                      <div className="mb-[15px]">{data.title}</div>
                      {data.subEx.map((data) => {
                        return <div className="text-[#666]">{data}</div>
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
            {/* 이력 */}
            <div className="flex flex-col gap-[10px] w-full shadow-popupBox px-[16px] py-[14px]">
              <div className="text-left kr-bold-14">이력</div>

              {data.career.map((data) => {
                return (
                  <div className="flex items-start flex-start gap-[32px] pb-[24px]">
                    <div className="h-[14px] w-[93px] flex items-center flex-start kr-normal-13 text-[#666]">
                      <NextImg
                        src="/images/profile/profileDot.svg"
                        alt="dot"
                        styles="w-[8px] h-[8px] mr-[8px]"
                      />
                      <div className="w-[83px] text-left">
                        {data.dateStart} -
                        {data.dateEnd ? data.dateEnd : '진행 중'}
                      </div>
                    </div>
                    <div className="text-left kr-normal-14">
                      <div className="mb-[15px]">{data.title}</div>
                      {data.subEx.map((data) => {
                        return <div className="text-[#666]">{data}</div>
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
