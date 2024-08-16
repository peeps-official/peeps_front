import { Badge_T } from '../types/badge'
import { axiosWithAuth } from './instance'

export async function getBadgeList() {
  const { data } = await axiosWithAuth.get<Badge_T[]>('/badge')

  return data
}
