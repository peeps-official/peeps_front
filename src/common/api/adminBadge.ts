import { Badge_T, BadgeIssue_T } from '../types/badge'
import { axiosWithAuth } from './instance'

// 뱃지 리스트 조회
export async function getBadgeList() {
  const { data } = await axiosWithAuth.get<Badge_T[]>('/badge')

  return data
}

// @인증 요청 목록 - 리스트 조회
export async function getBadgeIssueList() {
  const { data } = await axiosWithAuth.get<BadgeIssue_T[]>('/admin/verify/req')

  return data
}

// @인증 요청 목록 - 뱃지 승인
export async function ApproveBadge(id: string) {
  const { data } = await axiosWithAuth.post(`/admin/verify/req/${id}`)

  return data
}

// @인증 요청 목록 - 뱃지 거절
export async function RejectBadge(id: string) {
  console.log('bye')
}

// 인증 완료 목록
export async function getBadgeApproveList() {
  const { data } = await axiosWithAuth.get<BadgeIssue_T[]>('/admin/verify/inspect')

  return data
}
