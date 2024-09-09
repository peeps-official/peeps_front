'use client'

import { selectedUserHomeTabAtom } from '@/src/common/recoil/userHome'
import { UserHomeTab_T } from '@/src/common/types/home'
import { useRecoilValue } from 'recoil'
import InfoTab from './InfoTab/InfoTab'
import Feed from './Feed/Feed'

export default function TabContents() {
  const selectedTab = useRecoilValue<UserHomeTab_T>(selectedUserHomeTabAtom)

  return (
    <div className="mb-[10rem] mt-[0.5rem]">
      {selectedTab === 'feed' && <Feed />}
      {selectedTab === 'InfoTab' && <InfoTab />}
    </div>
  )
}
