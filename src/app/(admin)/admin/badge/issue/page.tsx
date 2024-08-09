import { axiosWithAuth } from '@/src/common/api/instance'
import { BadgeIssue_T } from '@/src/common/types/badge'
import AdminTable from '../../_components/Table/AdminTable'

/**
 * 뱃지 발급 페이지 - 뱃지 발급 요청에 관한 페이지 (뱃지 발급 요청 승인, 거절)
 *
 * 들어온 승인 요청
 * -> (이메일, 로그인, 블록체인) 인증은 자동인증이므로 별도의 승인이 필요 없음
 * -> 서류 인증에 대한 승인 요청만 필요.
 */
export default async function BadgeIssuePage() {
  const { data: badgeData } = await axiosWithAuth.get<BadgeIssue_T[]>(
    '/admin/verify/req'
  )

  console.log(badgeData)

  return (
    <>
      <AdminTable
        title="뱃지 요청 목록"
        des="유저가 요청한 뱃지 리스트입니다."
        data={badgeData}
      />
    </>
  )
}
