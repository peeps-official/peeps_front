'use client'

import { IsOwnerAtom } from '@/src/common/recoil/userHome'
import { popUpData } from '@/src/tmp_data/dummy'
import { useRecoilValue } from 'recoil'
import BadgeBox from './BadgeBox'
import GetBlockChainAuth from './BlockChain/GetBlockChainAuth'
import GetEmailAuth from './Email/GetEmailAuth'
import GetFileAuth from './File/GetFileAuth'
import GetLoginAuth from './Login/GetLoginAuth'

export default function BadgeAuth() {
  const isOwner = useRecoilValue<boolean>(IsOwnerAtom)
  const { profile, badges, educate, career } = popUpData

  return (
    <div className="kr-bold-14 flex max-w-[30rem] flex-col gap-[2rem]">
      <BadgeBox badges={badges} />
      {isOwner && (
        <div>
          <div className="mb-[1rem]">추가 인증하기</div>
          <div className="flex flex-col gap-[1rem]">
            <GetLoginAuth />
            <GetEmailAuth />
            <GetFileAuth />
            <GetBlockChainAuth />
          </div>
        </div>
      )}
    </div>
  )
}
