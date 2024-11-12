'use client'

import { CommonBadge_T } from '@/src/common/types/commonBadge'

import GetEmailAuth from './Email/GetEmailAuth'
import GetFileAuth from './File/GetFileAuth'
import GetLoginAuth from '@/src/app/(needSidebar)/circle/[badgeName]/_components/addAuth/Login/GetLoginAuth'
import { GlobalBadgeInfo } from './BadgeBox'

export default function AuthBadgeViewBox({ badge }: { badge: CommonBadge_T }) {
  if (!badge) return null

  return (
    <div className="flex w-full flex-col gap-[10px] rounded-[8px] px-[14px] py-[16px] shadow-popupBox">
      <div className="kr-bold-20 mb-[1rem]">인증하기</div>
      <GlobalBadgeInfo selectedBadge={badge} />
      <div className="mt-5 flex flex-col gap-[1rem]">
        {badge?.auth.login.isEnabled && <GetLoginAuth name={badge.name} />}
        {badge?.auth.email.isEnabled && <GetEmailAuth />}
        {badge?.auth.file.isEnabled && <GetFileAuth />}
        {/* <GetBlockChainAuth /> */}
      </div>
    </div>
  )
}
