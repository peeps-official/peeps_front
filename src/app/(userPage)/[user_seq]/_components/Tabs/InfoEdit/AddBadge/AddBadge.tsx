'use client'

import { IsOwnerAtom } from '@/src/common/recoil/userHome'
import { popUpData } from '@/src/tmp_data/dummy'
import { useRecoilValue } from 'recoil'
import BadgeBox from './BadgeBox'
import GetBlockChainAuth from './BlockChain/GetBlockChainAuth'
import GetEmailAuth from './Email/GetEmailAuth'
import GetFileAuth from './File/GetFileAuth'
import GetLoginAuth from './Login/GetLoginAuth'
import { OwnerBadgeListAtom } from '@/src/common/recoil/ownerAtom'
import { Badge_T } from '@/src/common/types/badge'

export default function AddBadge() {
  const ownerBadgeList = useRecoilValue<Badge_T[]>(OwnerBadgeListAtom)

  return (
    <div className="kr-bold-14 grid grid-cols-2 gap-[2rem]">
      <div>
        <div className="mb-[1rem]">추가 인증하기</div>
        <div className="flex flex-col gap-[1rem]">
          <GetLoginAuth />
          <GetEmailAuth />
          <GetFileAuth />
          <GetBlockChainAuth />
        </div>
      </div>
      <div className="max-w-[30rem]">
        <BadgeBox badges={ownerBadgeList} />
      </div>
    </div>
  )
}
