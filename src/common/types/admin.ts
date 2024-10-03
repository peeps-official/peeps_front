/**
 * @description admin페이지용 / 뱃지 생성 데이터 타입
 */
export type AdminCreateBadge_T = {
  name: string
  image: string
  email: string
  login: boolean
  file: boolean
}

/**
 * @description admin페이지용 / 뱃지 관리 리스트 데이터 타입
 */
export type AdminBadgeList_T = {
  bdg_id: number
  name: string
  image: string
  member_count: number
  auth: AuthType_T
}

export interface AuthType_T {
  id: number
  email: string
  login: boolean
  file: boolean
}

/**
 * @description admin페이지용 / 유저 데이터 타입
 */
export interface AdminUserData_T {
  id: string
  nickname: string
  profileImage: string | null
  backgroundImage: string | null
  info: string | null
  mobile: string
  name: string
  birthday: string
  birthyear: string
  boards: any[]
}
