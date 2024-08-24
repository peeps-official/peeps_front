'use client'

type Props = {
  activeTab: InfoTabTab_T
  setActiveTab: (tab: InfoTabTab_T) => void
}

export type InfoTabTab_T = 'badge' | 'add_badge' | 'edu' | 'career'

export default function InfoTabMenu({ activeTab, setActiveTab }: Props) {
  // 활성화 상태 확인
  const isActive = (tab: InfoTabTab_T) => activeTab === tab

  return (
    <div className="flex h-fit w-[228px] flex-col gap-[0.5rem] rounded-8xs px-[0.5rem] py-[1rem] text-tiny font-semibold shadow-popupBox">
      <Menuitem title="뱃지 관리" onClick={() => setActiveTab('badge')} isSelected={isActive('badge')} />
      <Menuitem title="뱃지 추가" onClick={() => setActiveTab('add_badge')} isSelected={isActive('add_badge')} />
      <Menuitem title="교육" onClick={() => setActiveTab('edu')} isSelected={isActive('edu')} />
      <Menuitem title="이력" onClick={() => setActiveTab('career')} isSelected={isActive('career')} />
    </div>
  )
}

type MenuitemProps = {
  title: string
  isSelected?: boolean
  onClick: () => void
}

export function Menuitem({ title, isSelected = false, onClick }: MenuitemProps) {
  return (
    <button
      className={`flex gap-[10px] self-stretch rounded-8xs px-4 py-2 ${isSelected ? 'bg-whitesmoke-300 font-bold' : 'bg-white hover:bg-whitesmoke-100'} `}
      onClick={onClick}
    >
      <div className="flex flex-col px-0 pb-0 pt-[5px]">
        <div className="relative h-6 w-6 bg-gray-lightest" />
      </div>
      <div className="relative flex leading-[34px] tracking-[-0.01em]">{title}</div>
    </button>
  )
}

interface ClickContainerType {
  $isSelected?: boolean
}
