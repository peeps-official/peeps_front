import { CommonBadge_T } from './commonBadge'

export type CircleProfile_T = {
  sep_id: string // 뱃지 이름
  isFollow: boolean // 팔로우 여부
  isAuth: boolean // 인증 여부
  follow: number // 팔로우 수
  board: number // 게시글 수
  user: number // 회원 수
  badge: CommonBadge_T // 뱃지 정보
}

export type CirCleFollower_T = {
  nickname: string // 닉네임
  user_id: string
  user_seq: string
  image: string // 프로필 이미지
}
