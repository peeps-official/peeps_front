import { BadgeIssueRes_T } from '../types/adminBadge'
import { CommonBadge_T } from '../types/commonBadge'
import { axiosWithAuth } from './instance'

// Admin 권한 확인
export async function checkAdmin() {
  try {
    const { status } = await axiosWithAuth.get('/admin')

    if (status === 200) return true
    return false
  } catch (error) {
    return false
  }
}

// 뱃지 리스트 조회
export async function getBadgeList() {
  const { data } = await axiosWithAuth.get<CommonBadge_T[]>('/admin/badge')

  return data
}

/**
 * @description 인증 요청 목록 테이블
 */

// 리스트 조회
export async function getBadgeIssueList() {
  const { data } = await axiosWithAuth.get<BadgeIssueRes_T[]>('/admin/verify/req')

  return data
}

// 뱃지 승인
export async function ApproveBadge(id: string) {
  const { data } = await axiosWithAuth.post(`/admin/verify/req/${id}`)

  return data
}

// 뱃지 거절
export async function RejectBadge(id: string) {
  const { data } = await axiosWithAuth.delete(`/admin/verify/req/${id}`)

  return data
}

/**
 * @description 인증 완료 목록 테이블
 */

// 리스트 조회
export async function getBadgeApproveList() {
  const { data } = await axiosWithAuth.get<BadgeIssueRes_T[]>('/admin/verify/inspect')

  return data
}

// 뱃지 승인 취소
export async function CancelBadge(id: string) {
  const { data } = await axiosWithAuth.delete(`/admin/verify/inspect/${id}`)

  return data
}
