/**
 * @description 유저 로그인 정보 데이터 타입 / 서버랑 다름 주의
 */
export interface UserLogin_T {
  user_seq: string
  user_id: string
  user_nickname: string
  user_bg_img: string | null // server: backgroundImage
  user_profile_img: string | null //server: profileImage
}

/**
 * @description '/login/check' API 응답 타입
 * [loginState]
 * -1: 비로그인 상태
 * 200: 모든 정보 있음
 * 300: 추가로 필요한 정보 있음
 */

type UserLogin_Key_T = keyof UserLogin_T

export interface LoginUserData_T {
  loginState: number
  needData?: UserLogin_Key_T[]
  user_data: UserLogin_T
}

/**
 * @description 유저 사이드바 친구 데이터 타입
 * [isFollow]
 */

export type LoginUserFollow_T = {
  user_id: string
  user_sep: string
  image: string
}

/**
 * @description 유저 사이드바 친구 데이터 타입
 * [isFollow]
 */

export type Login_User_Follow_T = {
  user_id: string
  user_sep: string
  image: string
}
