'use client'

import { useRecoilValue } from 'recoil'
import BadgeItemContainer from './BadgeItemContainer'
import { Badge_T } from '@/src/common/types/badge'
import { OwnerBadgeListAtom } from '@/src/common/recoil/ownerAtom'
import { IsOwnerAtom } from '@/src/common/recoil/userHome'

export default function Badge() {
  const ownerBadgeList = useRecoilValue<Badge_T[]>(OwnerBadgeListAtom)
  const isOwner = useRecoilValue<boolean>(IsOwnerAtom)

  return (
    <div className="kr-bold-14 flex flex-col gap-[2rem]">
      <div>
        <div className="mb-[1rem]">뱃지 관리</div>
        <div className="flex flex-col gap-[1rem]">
          {ownerBadgeList.map((badge) => (
            <BadgeItemContainer item={badge} key={badge.bdg_id} isOwner={isOwner} />
          ))}
        </div>
      </div>
    </div>
  )
}
