/**
 * @description 뱃지 요청 정보 (관리자 페이지에서 뱃지 요청 상세보기 정보)
 */
export type BadgeIssueRes_T = {
  id: number
  content: string // 이미지 or pdf url
  description?: string
  authDay: string
  authWay: string
  user_id: string
}

export type BadgeApproveReq_T = {
  bdg_name: string
  file: Record<string, string>
}
