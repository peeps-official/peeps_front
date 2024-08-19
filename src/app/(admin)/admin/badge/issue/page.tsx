'use client'
import { axiosWithAuth } from '@/src/common/api/instance'
import { BadgeIssue_T } from '@/src/common/types/badge'
import AdminTable from '../../_components/Table/AdminTable'
import { useEffect, useState } from 'react'
import { useQueries, useQueryClient } from '@tanstack/react-query'
import {
  ApproveBadge,
  getBadgeApproveList,
  getBadgeIssueList,
  RejectBadge,
} from '@/src/common/api/adminBadge'

/**
 * 뱃지 발급 페이지 - 뱃지 발급 요청에 관한 페이지 (뱃지 발급 요청 승인, 거절)
 *
 * 들어온 승인 요청
 * -> (이메일, 로그인, 블록체인) 인증은 자동인증이므로 별도의 승인이 필요 없음
 * -> 서류 인증에 대한 승인 요청만 필요.
 */
export default function BadgeIssuePage() {
  const [badgeData, setBadgeData] = useState<BadgeIssue_T[] | null>(null)
  const [approveData, setApproveData] = useState<BadgeIssue_T[] | null>(null)
  const res = useQueries({
    queries: [
      {
        queryKey: ['badgeData', 'issue'],
        queryFn: getBadgeIssueList,
      },
      {
        queryKey: ['badgeData', 'approve'],
        queryFn: getBadgeApproveList,
      },
    ],
  })
  const queryClient = useQueryClient()

  useEffect(() => {
    const [badgeDataRes, approveDataRes] = res
    if (!badgeDataRes || badgeDataRes.isPending || approveDataRes.isPending) return
    if (badgeDataRes.isError || approveDataRes.isError) {
      console.log('error!!')
      return
    }

    if (badgeDataRes.isSuccess) {
      setBadgeData(badgeDataRes.data)
    }

    if (approveDataRes.isSuccess) {
      setApproveData(approveDataRes.data)
    }
  }, [res])

  console.log(badgeData, approveData)

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
              data: '승인',
              action: ApproveBadge,
              refresh: () =>
                queryClient.invalidateQueries({ queryKey: ['badgeData', 'issue'] }),
            },
            {
              head: '뱃지 거절',
              data: '거절',
              action: RejectBadge,
              refresh: () =>
                queryClient.invalidateQueries({ queryKey: ['badgeData', 'approve'] }),
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
              head: '뱃지 승인 취소',
              data: '승인 취소',
              action: () => {
                console.log('승인 취소')
              },
            },
          ]}
        />
      )}
    </div>
  )
}
