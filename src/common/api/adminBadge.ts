import { Badge_T } from '../types/badge'
import { axiosWithAuth } from './instance'

// 뱃지 리스트 조회
export async function getBadgeList() {
  const { data } = await axiosWithAuth.get<Badge_T[]>('/badge')

  return data
}
