'use client'
/**
 * 뱃지 페이지 - 뱃지 자체 관리 페이지 (뱃지 생성, 수정, 삭제) / 참고: https://ccob.cccv.to/badge/list
 *
 * (이메일 / 로그인 / 블록체인 / 서류) 각각의 인증에 대하여 뱃지를 생성, 수정, 삭제할 수 있는 페이지
 * -> 뱃지는 인증 방법에 상관없이 하나만 제작.
 * -> 뱃지 내부에 다양한 인증방법에 따른 내용 추가하는 방식으로 구현.
 */

import { AdminBadgeListAtom } from '@/src/common/recoil/badgeAtom'
import { CommonBadge_T } from '@/src/common/types/commonBadge'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import BadgeCard from '../_components/Badge/BadgeCard'
import DataWrapperForAdminBadgePage from '../_components/DataWrapperForAdminBadgePage'
import NewBadgeModal from './_components/NewBadgeModal'

export default function AdminBadgePage() {
  const [isOpen, setIsOpen] = useState(false)
  const badgeData = useRecoilValue<CommonBadge_T[]>(AdminBadgeListAtom)

  return (
    <DataWrapperForAdminBadgePage>
      <h1 className="my-2">뱃지 관리</h1>
      <button className="my-4 rounded bg-blue-soft p-3 hover:bg-blue-secondary" onClick={() => setIsOpen(true)}>
        뱃지추가
      </button>
      <div className="flex flex-wrap gap-10">
        {badgeData[0]?.bdg_id !== -1 &&
          badgeData.map((badge) => {
            return <BadgeCard key={badge.bdg_id} badge={badge} />
          })}
      </div>
      {isOpen && <NewBadgeModal setIsOpen={setIsOpen} />}
    </DataWrapperForAdminBadgePage>
  )
}
