import { Badge_T } from './badge'
import { UserLogin_T } from './user'

/**
 * @description 유저 프로필 데이터 / 유저 로그인 정보 + a
 * [isFollow]
 *  -1: 비로그인 상태
 *   0: 로그인 상태 - 팔로우 아님
 *   1: 로그인 상태 - 팔로우중
 */

export interface OwnerProfile_T extends UserLogin_T {
  isFollow?: -1 | 0 | 1
  profileMessage: string | ''
  info_detail: string | null
  follwer_list: { nickname: string; user_id: string }[]
  badge_list: Badge_T[]
}

/**
 * @description owner 사진 리스트
 */
export type OwnerImgList_T = {
  post_id: number
  src: string
}[]

/**
 * @description owner 정보 중 경력 type
 */

export type OwnerCareer_T = {
  id?: number
  company: string // 필수
  teamName: string
  jobRole: string
  jobTitle: string
  jobType: string
  startDate: string // 필수
  endDate: string
  isCurrently: boolean | string // 필수
  description: string
}

/**
 * @description 유저 정보 중 교육 type
 */

export type OwnerEducation_T = {
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
