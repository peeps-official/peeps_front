import { CommonBadge_T } from './commonBadge'

export type Circle_T = {
  sep_id: string // 뱃지 이름
  isFollow: number // 팔로우 여부
  follow: number // 팔로우 수
  board: number // 게시글 수
  user: number // 회원 수
  badge: CommonBadge_T // 뱃지 정보
}
