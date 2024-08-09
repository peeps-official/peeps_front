import { Badge_T } from './badge'

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
 */
export interface UserProfileReq_T {
  loginState: number
  needData: string[]
  user_data: UserLogin_T
}

/**
 * @description 유저 프로필 데이터 / 유저 로그인 정보 + a
 */

export interface UserProfile_T extends UserLogin_T {
  profileMessage: string | ''
  follower: { nickname: string; user_id: string }[]
  badge: Badge_T[]
}

/**
 * @description 유저 프로필 팝업 데이터 타입
 */
export interface PopupProfile_T {
  user_name: string
  profileMessage: string | ''
  profile_img: string | null
  phone: string
  email: string
  url: string
  addr: string
  mainBadge: Badge_T
}

/**
 * @description 유저 프로필 팝업 페이지 전체 데이터 타입
 */

export interface PopupProfilePage_T {
  profile: PopupProfile_T
  badges: Badge_T[]
  educate: {
    dateStart: string
    dateEnd?: string
    title: string
    subEx: string[]
  }[]
  career: {
    dateStart: string
    dateEnd?: string
    title: string
    subEx: string[]
  }[]
}
