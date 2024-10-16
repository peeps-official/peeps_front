export type BadgeAuthType = 'email' | 'file' | 'blockchain' | 'login'

export interface Badge_T {
  bdg_id: number
  name: string
  image: string
  content: string
  member_count?: number
  followingCount?: number
}

export interface BadgeIssue_T {
  bdg_id: number
  content: string
  description?: string
  authDay: string
  authWay: string
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
