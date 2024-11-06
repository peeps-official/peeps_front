'use client'

import { OwnerBadgeListAtom } from '@/src/common/recoil/ownerAtom'
import { Badge_T } from '@/src/common/types/badge'
import { useRecoilValue } from 'recoil'
import BadgeItemContainer from '../InfoEdit/Badge/BadgeItemContainer'
import { IsOwnerAtom } from '@/src/common/recoil/userHome'

export default function Badge() {
  const ownerBadgeList = useRecoilValue<Badge_T[]>(OwnerBadgeListAtom)
  const isOwner = useRecoilValue<boolean>(IsOwnerAtom)

  return (
    <div className="flex flex-wrap gap-[1rem]">
      {ownerBadgeList ? (
        ownerBadgeList.map((badge) => (
          <div key={badge.bdg_id}>
            <BadgeItemContainer item={badge} key={badge.bdg_id} isOwner={isOwner} />
          </div>
        ))
      ) : (
        <div>등록된 뱃지가 없습니다.</div>
      )}
    </div>
  )
}
