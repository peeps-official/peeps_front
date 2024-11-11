'use client'

import { getBadgeApproveList, getBadgeIssueList } from '@/src/common/api/admin'
import { BadgeIssueRes_T } from '@/src/common/types/adminBadge'
import { useQueries, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import AdminTable from '../../_components/Table/AdminTable'
import BadgeApproveModal from './_components/BadgeApproveModal'
import { useRecoilValue } from 'recoil'
import { isAdminAtom } from '@/src/common/recoil/adminAtom'

/**
 * 뱃지 발급 페이지 - 뱃지 발급 요청에 관한 페이지 (뱃지 발급 요청 승인, 거절)
 *
 * 들어온 승인 요청
 * -> (이메일, 로그인, 블록체인) 인증은 자동인증이므로 별도의 승인이 필요 없음
 * -> 서류 인증에 대한 승인 요청만 필요.
 */
export default function BadgeIssuePage() {
  const [badgeData, setBadgeData] = useState<BadgeIssueRes_T[] | null>(null)
  const [approveData, setApproveData] = useState<BadgeIssueRes_T[] | null>(null)
  const [modalData, setModalData] = useState<BadgeIssueRes_T | null>(null) // null: 모달창 닫힘, 나머지: 해당 요청 정보
  const isAdmin = useRecoilValue<boolean>(isAdminAtom)

  const res = useQueries({
    queries: [
      {
        queryKey: ['badgeData', 'issue'],
        queryFn: getBadgeIssueList,
        enabled: isAdmin,
      },
      {
        queryKey: ['badgeData', 'approve'],
        queryFn: getBadgeApproveList,
        enabled: isAdmin,
      },
    ],
  })

  useEffect(() => {
    if (res.some((query) => query.isLoading)) return
    const [badgeDataRes, approveDataRes] = res
    if (badgeDataRes.isError || approveDataRes.isError) {
      console.log('error!!')
      return
    }

    if (badgeDataRes.isSuccess) setBadgeData(badgeDataRes.data)

    if (approveDataRes.isSuccess) setApproveData(approveDataRes.data)
  }, [res])

  return (
    <div className="flex flex-col gap-[10rem]">
      {badgeData && (
        <AdminTable
          title="뱃지 요청 목록"
          des="유저가 요청한 뱃지 리스트입니다."
          data={badgeData}
          addtionalColumn={[
            {
              head: '뱃지 승인',
              btnTitle: '승인',
              btnAction: setModalData,
            },
          ]}
        />
      )}
      {approveData && (
        <AdminTable
          title="뱃지 승인 목록"
          des="관리자가 승인한 뱃지 리스트입니다."
          data={approveData}
          addtionalColumn={[
            {
              head: '승인',
              btnTitle: '보기',
              btnAction: setModalData,
            },
          ]}
        />
      )}
      {modalData && <BadgeApproveModal setModalData={setModalData} 뱃지요청정보={modalData} />}
    </div>
  )
}
