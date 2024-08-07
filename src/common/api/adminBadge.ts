import { Badge_T } from '../types/admin'
import { axiosWithAuth } from './instance'

export async function getBadgeList() {
  const { data } = await axiosWithAuth.get<Badge_T[]>('/badge')

  console.log('데이터 조회!!')
  return data
}
