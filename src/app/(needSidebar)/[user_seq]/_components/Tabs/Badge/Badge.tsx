'use client'

import { OwnerBadgeListAtom } from '@/src/common/recoil/ownerAtom'
import { Badge_T } from '@/src/common/types/badge'
import { useRecoilValue } from 'recoil'
import BadgeItemContainer from '../InfoEdit/Badge/BadgeItemContainer'
import { IsOwnerAtom } from '@/src/common/recoil/userHome'
import { Console } from 'console'
import { Fragment } from 'react'

export default function Badge() {
  const ownerBadgeList = useRecoilValue<Badge_T[]>(OwnerBadgeListAtom)
  const isOwner = useRecoilValue<boolean>(IsOwnerAtom)

  function groupBadgesByType(badges: Badge_T[]): Record<string, Badge_T[]> {
    return badges.reduce<Record<string, Badge_T[]>>((acc, badge) => {
      const { type } = badge
      if (!acc[type]) {
        acc[type] = []
      }
      acc[type].push(badge)
      return acc
    }, {})
  }

  const tagGruop = groupBadgesByType(ownerBadgeList)

  return (
    <div className="flex flex-col gap-12">
      {ownerBadgeList ? (
        Object.entries(tagGruop).map(([key, value]) => (
          <div key={key}>
            <h2 className="kr-bold-18 mb-3">{key} 인증</h2>
            <div className="flex flex-wrap gap-[1rem]">
              {value.map((badge) => (
                <BadgeItemContainer key={badge.bdg_id} item={badge} isOwner={isOwner} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div>등록된 뱃지가 없습니다.</div>
      )}
    </div>
  )
}
