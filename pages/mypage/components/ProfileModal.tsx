import NextImg from '../../../components/utils/NextImg'
import { popUpData } from '../../../data/dummy'

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
        className=" h-[90vh] overflow-scroll bg-white rounded-[10px] flex flex-col items-start justify-start py-[24px] px-[42px] gap-[10px]"
      >
        {/* 팝업 헤더 */}
        <div className="flex flex-row items-center justify-between w-full">
          <div className="kr-normal-24">프로필</div>
          <button
              onClick={() => setIsModalOpen(false)}
              className="text-micro font-bold text-white bg-secondary-blue rounded-8xs py-[5px] px-[9px] hover:bg-primary-blue"
            >
              프로필 수정
            </button>
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
            <div className="flex flex-col gap-[10px] w-full rounded-[8px] shadow-popupBox px-[16px] py-[14px]">
              <div className="text-left kr-bold-14">뱃지</div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[15px] box-border max-w-full">
                <div className="flex-1 box-border overflow-x-auto flex flex-row items-start justify-start pt-[3px] px-0.5 pb-1 gap-[10px] max-w-full border-b-[1px] border-solid border-gray-100">
                  <img
                    className="h-[18px] w-[18px] relative shrink-0 object-cover min-h-[18px]"
                    alt=""
                    src="/mask-group-3@2x.png"
                  />
                  <img
                    className="h-[18px] w-[18px] relative shrink-0 object-cover min-h-[18px]"
                    alt=""
                    src="/mask-group-4@2x.png"
                  />
                  <img
                    className="h-[18px] w-[18px] relative shrink-0 object-cover min-h-[18px]"
                    alt=""
                    src="/mask-group-5@2x.png"
                  />
                  <img
                    className="h-[18px] w-[18px] relative rounded-[50%] shrink-0 object-cover min-h-[18px]"
                    alt=""
                    src="/ellipse-88-1@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch h-[5px] relative hidden" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-9xl">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <img
                      className="h-[60px] w-[60px] relative object-cover min-h-[60px]"
                      loading="lazy"
                      alt=""
                      src="/rectangle-4187@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-[10px]">
                      <div className="flex flex-col items-start justify-start">
                        <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[100%] text-huge font-bold font-inherit inline-block min-w-[128px] mq450:text-3xl mq450:leading-[22px]">
                          고려대학교
                        </h1>
                      </div>
                      <div className="flex flex-row items-center justify-start overflow-hidden text-small text-dimgray-100 font-roboto">
                        <div className="relative tracking-[-0.01em] leading-[14px] font-medium inline-block min-w-[78px]">
                          인증 300만명
                        </div>
                        <div className="w-3 relative tracking-[-0.01em] leading-[14px] font-medium text-center flex items-center justify-center shrink-0">
                          ‧
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[14px] font-medium inline-block min-w-[91px]">
                          팔로잉 127만명
                        </div>
                      </div>
                    </div>
                  </div>
                  <button 
                      // onClick={() => }
                      className="text-detail text-dimgray-100 bg-gray-100/10 rounded-8xs py-[5px] px-[9px] hover:bg-darkslategray"
                    >
                      구경가기
                    </button>
                </div>
                <div className="self-stretch h-2.5 relative" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-mini">
                  <b className="w-32 relative tracking-[-0.01em] leading-[100%] flex items-center font-bold">
                    상세정보
                  </b>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-micro text-dimgray-100">
                    <div className="self-stretch overflow-hidden flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                      <div className="relative tracking-[-0.01em] leading-[100%] inline-block min-w-[47px]">
                        인증 날짜
                      </div>
                      <b className="relative tracking-[-0.01em] leading-[100%] inline-block text-black font-bold min-w-[50px]">
                        23.03.02
                      </b>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                      <div className="relative tracking-[-0.01em] leading-[100%] inline-block min-w-[47px]">
                        인증 방식
                      </div>
                      <b className="relative tracking-[-0.01em] leading-[100%] inline-block text-black font-bold min-w-[58px]">
                        이메일 인증
                      </b>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[-0.01em] leading-[100%] inline-block min-w-[47px]">
                        추가 정보
                      </div>
                      <b className="relative tracking-[-0.01em] leading-[100%] inline-block text-black font-bold min-w-[5px]">
                        -
                      </b>
                    </div>
                  </div>
                </div>
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
