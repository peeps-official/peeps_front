export type BadgeAuthType = 'email' | 'file' | 'blockchain' | 'login'
/**
 * @description 뱃지 리스트
 */

export type Badge_T = {
  bdg_id: number
  name: string
  image: string
  member_count: number
  followingCount?: number
  isPublic: boolean
  auth: { id: number } & { [key in BadgeAuthType]: BadgeAuthData_T | null }
}

export interface BadgeIssue_T {
  bdg_id: number
  content: string
  description?: string
  authDay: string
  authWay: string
}

/**
 * @description 뱃지 생성 정보 (인증 후 어떤 뱃지 생길 지 보여주는 정보)
 */
export type BadgeCreate_T = {
  name: string
  image: string
  member_count: number
  authway: BadgeAuthType
  detail: BadgeDetail_T[]
}

/**
 * @description 각각의 인증에 대한 정보
 */
export type BadgeAuthData_T = {
  id: number
  description: string | null
  file_url?: string
  authDay: string // Date객체 형식 string, new Date()로 감싸서 사용해야 함.
  detail: BadgeDetail_T[]
}

/**
 * @description 인증 상세 정보 (detail에 들어감)
 */
export type BadgeDetail_T = {
  title: string
  content: string
  isPublic: boolean
}
