'use client'

import { selectedUserHomeTabAtom } from '@/src/common/recoil/userHome'
import { UserHomeTab_T } from '@/src/common/types/home'
import { useRecoilValue } from 'recoil'

import Feed from './Feed/Feed'
import Info from './Info/Info'
import InfoEdit from './InfoEdit/InfoEdit'
import Badge from './Badge/Badge'

export default function TabContents() {
  const selectedTab = useRecoilValue<UserHomeTab_T>(selectedUserHomeTabAtom)

  return (
    <div className="mb-[10rem] mt-[0.5rem]">
      {selectedTab === 'feed' && <Feed />}
      {selectedTab === 'info' && <Info />}
      {selectedTab === 'infoEdit' && <InfoEdit />}
      {selectedTab === 'badge' && <Badge />}
    </div>
  )
}
