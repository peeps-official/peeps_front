/**
 * @description admin페이지용 / 뱃지 생성 데이터 타입
 */
export type AdminCreateBadge_T = {
  name: string
  image: string
  content: string
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
