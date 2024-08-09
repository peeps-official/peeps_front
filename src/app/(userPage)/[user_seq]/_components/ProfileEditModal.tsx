'use client'
import { mypageData, popUpData } from '@/src/tmp_data/dummy'
import {
  ClickContainer,
  UnclickContainer,
  IconContainer,
  Icon,
  TextStyle,
  InfoContainer,
  InfoIcon,
  InfoNumberStyle,
  InfoAddressStyle,
  EditComponent,
} from './ProfileChangeModalStyle'
import NextImg from '@/src/common/utils/NextImg'

const data = popUpData
const popdata = mypageData

export default function ProfileChangeModal({ setIsProfileEditModalOpen }: any) {
  return (
    <div
      className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-modal"
      onClick={() => {
        setIsProfileEditModalOpen(false)
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-[90vh] scrollbarstyle overflow-y-auto bg-white rounded-[10px] flex flex-col py-[24px] px-[42px] gap-[10px]"
      >
        {/* 팝업 헤더 */}
        <div className="flex items-center justify-between w-full">
          <div className="kr-normal-24">프로필 편집</div>
          <button
            onClick={() => setIsProfileEditModalOpen(true)}
            className="text-micro font-bold text-white bg-secondary-blue rounded-8xs py-[5px] px-[9px] hover:bg-blue-primary"
          >
            저장
          </button>
          {}
        </div>

        {/* 팝업 컨텐츠 */}
        <div className="flex flex-1 max-w-full">
          {/* 왼쪽 */}
          <div className="self-stretch flex max-w-full [row-gap:20px]">
            {/* 선택바 */}
            <div className="w-[228px] h-[858px] shrink-0 flex flex-col shadow-popupBox      rounded-8xs font-semibold text-tiny">
              <ClickContainer>
                <IconContainer>
                  <Icon />
                </IconContainer>
                <TextStyle>프로필</TextStyle>
              </ClickContainer>

              <UnclickContainer>
                <IconContainer>
                  <Icon />
                </IconContainer>
                <TextStyle>뱃지</TextStyle>
              </UnclickContainer>

              <UnclickContainer>
                <IconContainer>
                  <Icon />
                </IconContainer>
                <TextStyle>학력</TextStyle>
              </UnclickContainer>

              <UnclickContainer>
                <IconContainer>
                  <Icon />
                </IconContainer>
                <TextStyle>이력</TextStyle>
              </UnclickContainer>
            </div>
          </div>

          {/* 오른쪽 */}
          <div className="h-[858px] min-w-[368px] flex-1 flex flex-col py-0 pr-0 pl-[42px]">
            {/* 프로필 미리보기 */}
            <div className="min-w-[156px] flex shadow-popupBox rounded-8xs py-[17px] px-2.5 gap-[14px]">
              {/* 프로필 미리보기 사진 */}
              <NextImg
                src={data.profile.img}
                alt="profile"
                styles="h-[114px] w-[114px] relative rounded-8xs object-cover"
              />
              {/* 프로필 미리보기 내용 */}
              <div className="flex-1 flex flex-col min-w-[156px]">
                {/* 이름 & top 뱃지 */}
                <div className="self-stretch flex items-center justify-between gap-[173px]">
                  <b className="relative tracking-[-0.02em] leading-[28px] inline-block min-w-[49px] font-bold text-medium">
                    김민우
                  </b>
                  <NextImg
                    src={popdata.profile.badge[2]}
                    alt="badge of Youtube"
                    styles="h-[18px] w-[18px] relative object-cover"
                  />
                </div>
                {/* 소개글 & 기타 정보 */}
                <div className="flex flex-col gap-[12px] font-normal text-micro">
                  {/* 소개글 */}
                  <div className="self-stretch relative leading-[16px]">
                    <p className="m-0">{`입시 & 교육 컨텐츠 크리에이터`}</p>
                  </div>
                  {/* 기타 정보 */}
                  <div className="flex flex-col text-detail">
                    {/* phone number */}
                    <InfoContainer>
                      <InfoIcon alt="phone number" src="images\icons\phone.svg" />
                      <InfoNumberStyle>+82-10-1234-5679</InfoNumberStyle>
                    </InfoContainer>
                    {/* email address */}
                    <InfoContainer>
                      <InfoIcon alt="email address" src="images\icons\mail.svg" />
                      <InfoAddressStyle href="mailto:ks8553v@gmail.com" target="_blank">
                        ks8553v@gmail.com
                      </InfoAddressStyle>
                    </InfoContainer>
                    {/* website address */}
                    <InfoContainer>
                      <InfoIcon alt="website address" src="images\icons\globe.svg" />
                      <InfoAddressStyle href="mailto:ks8553v@gmail.com" target="_blank">
                        ks8553v@gmail.com
                      </InfoAddressStyle>
                    </InfoContainer>
                    {/* company phone number */}
                    <InfoContainer>
                      <InfoIcon alt="phone number" src="images\icons\map.svg" />
                      <InfoNumberStyle>{`+82-10-1234-5679`}</InfoNumberStyle>
                    </InfoContainer>
                  </div>
                </div>
              </div>
            </div>
            {/* 프로필 편집 내용 */}
            <EditComponent prop="이름" placeholder={`김민우`} type="text" />
            <EditComponent
              prop="소개글"
              placeholder={`입시 & 교육 컨텐츠 크리에이터`}
              type="text"
              propMinWidth="44px"
            />
            <EditComponent
              prop="전화번호"
              placeholder={`+82-10-1234-5679`}
              type="text"
              propMinWidth="59px"
            />
            <EditComponent
              prop="이메일"
              placeholder={`ks8553v@gmail.com`}
              type="text"
              propMinWidth="44px"
            />
            <EditComponent
              prop="url"
              placeholder={`instagram.com`}
              type="text"
              propMinWidth="22px"
            />
            <EditComponent
              prop="뱃지"
              placeholder={`인스타그램`}
              type="text"
              propMinWidth="30px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
