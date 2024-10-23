import { axiosWithAuth } from '@/src/common/api/instance'
import { CommonBadge_T } from '@/src/common/types/commonBadge'

export async function getBadgeDetails(badgeId: string) {
  const { data } = await axiosWithAuth.get<CommonBadge_T>(`/admin/badge/${badgeId}`)

  return data
}
