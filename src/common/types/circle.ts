import { CommonBadge_T } from './commonBadge'

export type CircleProfile_T = {
  sep_id: string // 뱃지 이름
  isFollow: number // 팔로우 여부 (-1: 로그인 안됨, 0: 팔로우 안함, 1: 팔로우 중)
  isAuth: number // 인증 여부 (-1: 로그인 안됨, 0: 인증 안함, 1: 인증 함)
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
