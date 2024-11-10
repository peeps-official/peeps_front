'use client'

import { useState } from 'react'

import Badge from './Badge/Badge'
import CareerTab from './Career/CareerTab'

import AddBadge from './AddBadge/AddBadge'
import EducationTab from './Education/EducationTab'
import InfoEditMenu, { InfoEditTab_T } from './InfoEditMenu'

export default function InfoEdit() {
  const [activeTab, setActiveTab] = useState<InfoEditTab_T>('badge')

  const isActive = (tab: InfoEditTab_T) => activeTab === tab

  return (
    <div className="flex">
      <InfoEditMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex min-w-[368px] flex-1 flex-col py-0 pl-[42px] pr-0">
        {isActive('badge') && <Badge />}
        {isActive('add_badge') && <AddBadge />}
        {isActive('edu') && <EducationTab />}
        {isActive('career') && <CareerTab />}
      </div>
    </div>
  )
}
