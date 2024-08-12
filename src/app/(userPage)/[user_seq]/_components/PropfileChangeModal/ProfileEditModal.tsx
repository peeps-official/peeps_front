'use client'
import { popUpData } from '@/src/tmp_data/dummy'
import Menuitem from './MenuItem'
import ContentBadge from './ContentBadge'

const data = popUpData

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
          <button onClick={() => setIsProfileEditModalOpen(true)} className="blueBtn">
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
              <Menuitem title="프로필" />
              <Menuitem title="뱃지" isSelected={true} />
              <Menuitem title="학력" />
              <Menuitem title="경력" />
            </div>
          </div>

          {/* 오른쪽 */}
          <div className="h-[858px] min-w-[368px] flex-1 flex flex-col py-0 pr-0 pl-[42px]">
            <ContentBadge />
          </div>
        </div>
      </div>
    </div>
  )
}
