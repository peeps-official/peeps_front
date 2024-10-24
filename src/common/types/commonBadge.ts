import { BadgeAuthType } from './badge'

/**
 * @description admin페이지용 / 공통 뱃지 관리 리스트 데이터 타입
 */
export type CommonBadge_T = {
  bdg_id: number
  name: string
  image: string
  type: string
  member_count: number
  followingCount: number
  description: string
  auth: { [key in BadgeAuthType]: AuthData_T }
}

export type AuthData_T = {
  id: number
  isEnabled: boolean
  method: string
  memo: string
}

/**
 * @description admin페이지용 / 공통 뱃지 생성 정보
 */

export type CreateCommonBadge_T = {
  name: string
  image: string
  description: string // memo
  type: string
  email_method: string
  email_memo: string
  login_memo: string
  file_memo: string
  blockchain_memo: string
}
