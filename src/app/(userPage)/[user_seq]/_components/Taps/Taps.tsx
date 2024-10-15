'use client'

import { selectedUserHomeTabAtom } from '@/src/common/recoil/userHome'
import { UserHomeTab_T } from '@/src/common/types/home'
import { useRecoilState } from 'recoil'
import TapItem from './TapItem'

export default function Taps() {
  const [activeTab, setActiveTab] = useRecoilState<UserHomeTab_T>(selectedUserHomeTabAtom)

  const isActive = (tab: UserHomeTab_T) => activeTab === tab

  return (
    <div className="flex border-solid border-gray-medium text-center font-bold">
      <TapItem title="피드" onClick={() => setActiveTab('feed')} isClicked={isActive('feed')} />
      <TapItem title="정보" onClick={() => setActiveTab('info')} isClicked={isActive('info')} />
      <TapItem title="이미지" onClick={() => setActiveTab('image')} isClicked={isActive('image')} />
      <TapItem title="뱃지" onClick={() => setActiveTab('badge')} isClicked={isActive('badge')} />
      <TapItem title="정보 수정" onClick={() => setActiveTab('infoEdit')} isClicked={isActive('infoEdit')} />
    </div>
  )
}
