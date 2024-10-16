'use client'

import { useRecoilValue } from 'recoil'
import BadgeItemContainer from './BadgeItemContainer'
import { OwnerBadge_T } from '@/src/common/types/owner'
import { OwnerBadgeListAtom } from '@/src/common/recoil/ownerAtom'

export default function Badge() {
  const ownerBadgeList = useRecoilValue<OwnerBadge_T[]>(OwnerBadgeListAtom)

  return (
    <div className="kr-bold-14 flex flex-col gap-[2rem]">
      <div>
        <div className="mb-[1rem]">뱃지 관리</div>
        <div className="flex flex-col gap-[1rem]">
          {ownerBadgeList.map((badge) => (
            <BadgeItemContainer item={badge} key={badge.bdg_id} />
          ))}
        </div>
      </div>
    </div>
  )
}
