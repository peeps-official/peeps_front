'use client'

import {
  BadgeTypes,
  IsBadgeAuth,
} from '@/src/app/(userPage)/[user_seq]/_components/Tabs/InfoEdit/Badge/BadgeItemContainer'
import { CommonBadge_T } from '@/src/common/types/commonBadge'
import NextImg from '@/src/common/utils/NextImg'
import { useState } from 'react'
import EditBadgeModal from '../../badge/_components/EditBadgeModal'

/**
 * 뱃지 카드 컴포넌트
 */

interface Props {
  badge: CommonBadge_T
}

export default function BadgeCard({ badge }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const { name, image, bdg_id: id } = badge

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex flex-col gap-[10px] rounded-[8px] px-[14px] py-[16px] shadow-popupBox duration-200 ease-in hover:translate-y-[-0.2rem]"
      >
        <div className="flex items-center justify-between gap-[2em]">
          <div className="flex items-center gap-[0.3em]">
            <div className="relative top-[0.1rem] flex h-[30px] w-[30px] items-center justify-center">
              <NextImg src={image} alt="badge" />
            </div>
            <p className="kr-bold-14">{name}</p>
          </div>
        </div>
        <div className="mt-3 flex gap-1">
          {BadgeTypes.map((type) => {
            const isAuth: boolean = badge.auth[type.id].isEnabled
            return <IsBadgeAuth key={type.id} isAuth={isAuth} icon={type.icon} />
          })}
        </div>
      </button>
      {isOpen && <EditBadgeModal badge={badge} setIsOpen={setIsOpen} />}
    </>
  )
}
