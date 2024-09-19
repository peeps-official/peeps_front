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
 * [loginState]
 * 200: 모든 정보 있음
 * 300: 추가로 필요한 정보 있음
 */

type UserLogin_Key_T = keyof UserLogin_T

export interface LoginUserDataReq_T {
  loginState: number
  needData?: UserLogin_Key_T[]
  user_data: UserLogin_T
}

/**
 * @description 유저 프로필 데이터 / 유저 로그인 정보 + a
 * [isFollow]
 *  -1: 비로그인 상태
 *   0: 로그인 상태 - 팔로우 아님
 *   1: 로그인 상태 - 팔로우중
 */

export interface UserProfile_T extends UserLogin_T {
  isFollow?: -1 | 0 | 1
  profileMessage: string | ''
  follwer_list: { nickname: string; user_id: string }[]
  badge_list: Badge_T[]
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

/**
 * @description 유저 정보 중 교육 type
 */

export type Education_T = {
  id?: number
  school: string // 필수
  major: string // 필수
  degree: string // 필수
  startDate: string // 필수
  endDate: string
  grade: number
  enrollmentStatus: EducationStatus // 필수
  description: string
}

export enum EducationStatus {
  재학 = '재학',
  휴학 = '휴학',
  자퇴 = '자퇴',
  졸업 = '졸업',
}
