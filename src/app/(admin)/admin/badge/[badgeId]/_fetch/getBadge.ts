import { axiosWithAuth } from '@/src/common/api/instance'
import { AdminBadgeList_T } from '@/src/common/types/admin'

export async function getBadgeDetails(badgeId: string) {
  const { data } = await axiosWithAuth.get<AdminBadgeList_T>(`/admin/badge/${badgeId}`)

  return data
}
