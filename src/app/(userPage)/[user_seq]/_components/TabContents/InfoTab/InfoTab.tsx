'use client'

import { useState } from 'react'

import InfoTabMenu, { InfoTabTab_T } from './InfoTabMenu'
import BadgeAuth from './AddBadge/BadgeAuth'

export default function InfoTab() {
  const [activeTab, setActiveTab] = useState<InfoTabTab_T>('badge')

  const isActive = (tab: InfoTabTab_T) => activeTab === tab

  return (
    <div className="flex">
      <InfoTabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex min-w-[368px] flex-1 flex-col py-0 pl-[42px] pr-0">
        {isActive('badge') && <></>}
        {isActive('add_badge') && <BadgeAuth />}
      </div>
    </div>
  )
}
