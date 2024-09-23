'use client'

import { useState } from 'react'

import BadgeAuth from './AddBadge/BadgeAuth'
import Badge from './Badge/Badge'
import CareerTab from './Career/CareerTab'
import Education from './Education/EducationTab'
import InfoTabMenu, { InfoTabTab_T } from './InfoTabMenu'
import EducationTab from './Education/EducationTab'

export default function InfoTab() {
  const [activeTab, setActiveTab] = useState<InfoTabTab_T>('badge')

  const isActive = (tab: InfoTabTab_T) => activeTab === tab

  return (
    <div className="flex">
      <InfoTabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex min-w-[368px] flex-1 flex-col py-0 pl-[42px] pr-0">
        {isActive('badge') && <Badge />}
        {isActive('add_badge') && <BadgeAuth />}
        {isActive('edu') && <EducationTab />}
        {isActive('career') && <CareerTab />}
      </div>
    </div>
  )
}
