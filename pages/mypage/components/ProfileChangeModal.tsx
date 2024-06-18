import { useState } from 'react'
import NextImg from '../../../components/utils/NextImg'
import { popUpData } from '../../../data/dummy'
import tw from "tailwind-styled-components"

const data = popUpData

// style conponents : tw
const ClickContainer = tw.div`flex flex-row items-start self-stretch justify-start px-4 py-3 bg-whitesmoke-300 rounded-8xs gap-[10px]`
const UnclickContainer = tw.div`flex flex-row items-start self-stretch justify-start px-4 py-3 bg-white rounded-8xs gap-[10px]`
const IconContainer = tw.div`flex flex-col items-start justify-start pt-[5px] px-0 pb-0`
const Icon = tw.div`relative w-6 h-6 bg-gray-400`
const TextStyle = tw.div`flex relative tracking-[-0.01em] leading-[34px]`

export default function ProfileChangeModal({ setIsModal2Open }: any) {

  return (
    <div
      className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-modal"
      onClick={() => {
        setIsModal2Open(false)
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-[90vh] scrollbarstyle overflow-y-auto bg-white rounded-[10px] flex flex-col items-start justify-start py-[24px] px-[42px] gap-[10px]"
      >
        {/* 팝업 헤더 */}
        <div className="flex flex-row items-center justify-between w-full">
          <div className="kr-normal-24">프로필 편집</div>
          <button
              onClick={() => setIsModal2Open(true)}
              className="text-micro font-bold text-white bg-secondary-blue rounded-8xs py-[5px] px-[9px] hover:bg-primary-blue"
            >
              저장
            </button>
            {}
        </div>

        {/* 팝업 컨텐츠 */}
        <div className="flex-1 flex flex-row items-start justify-start gap-[10px] max-w-full">
          {/* 왼쪽 */}
          <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px]">
            {/* 선택바 */}
            <div className="w-[228px] h-[858px] shrink-0 flex flex-col shadow-popupBox items-start justify-start rounded-8xs font-semibold text-tiny">
                <ClickContainer>
                  <IconContainer><Icon /></IconContainer>
                  <TextStyle>프로필</TextStyle>
                </ClickContainer>

                <UnclickContainer>
                  <IconContainer><Icon /></IconContainer>
                  <TextStyle>뱃지</TextStyle>
                </UnclickContainer>

                <UnclickContainer>
                  <IconContainer><Icon /></IconContainer>
                  <TextStyle>학력</TextStyle>
                </UnclickContainer>

                <UnclickContainer>
                  <IconContainer><Icon /></IconContainer>
                  <TextStyle>이력</TextStyle>
                </UnclickContainer>
            </div>
          </div>

          {/* 오른쪽 */}
          <div className="flex flex-col items-start justify-start gap-[23px] w-[368px]">
            {/* 미리보기 */}
            
            {/* 수정 */}
            

          </div>
        </div>
      </div>
    </div>
  )
}
