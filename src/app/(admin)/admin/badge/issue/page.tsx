'use client'
import { axiosWithAuth } from '@/src/common/api/instance'
import { BadgeIssue_T } from '@/src/common/types/badge'
import AdminTable from '../../_components/Table/AdminTable'
import { useEffect, useState } from 'react'

/**
 * 뱃지 발급 페이지 - 뱃지 발급 요청에 관한 페이지 (뱃지 발급 요청 승인, 거절)
 *
 * 들어온 승인 요청
 * -> (이메일, 로그인, 블록체인) 인증은 자동인증이므로 별도의 승인이 필요 없음
 * -> 서류 인증에 대한 승인 요청만 필요.
 */
export default function BadgeIssuePage() {
  const [badgeData, setBadgeData] = useState<BadgeIssue_T[] | null>(null)

  useEffect(() => {
    ;(async () => {
      const { data } = await axiosWithAuth.get<BadgeIssue_T[]>('/admin/verify/req')

      setBadgeData(data)
      return data
    })()
  }, [])

  return (
    <>
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
            },
            { head: '뱃지 거절', data: '거절', action: RejectBadge },
          ]}
        />
      )}
    </>
  )
}

async function ApproveBadge(id: string) {
  const res = await axiosWithAuth.get(`/admin/verify/req/${id}`)
  console.log(res)
}

async function RejectBadge(id: string) {
  console.log('bye')
}
