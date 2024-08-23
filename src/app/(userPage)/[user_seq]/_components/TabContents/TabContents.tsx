'use client'

import { selectedUserHomeTabAtom } from '@/src/common/recoil/userHome'
import { UserHomeTab_T } from '@/src/common/types/home'
import { useRecoilValue } from 'recoil'

export default function TabContents() {
  const selectedTab = useRecoilValue<UserHomeTab_T>(selectedUserHomeTabAtom)

  return (
    <>
      {selectedTab === 'home' && <div className="relative">하이하이</div>}
      {selectedTab === 'feed' && <div className="relative">바이바이</div>}
    </>
  )
}
