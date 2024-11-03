import { Circle_T } from '../types/circle'
import { axiosWithAuth } from './instance'

/**
 * @description 서클 프로필 조회
 * @param sep_id 뱃지 이름
 */
export async function getCircleProfile(sep_id: string) {
  console.log(sep_id)
  const { data, status } = await axiosWithAuth.get<Circle_T>(`/circle/${sep_id}`)

  if (status === 404) {
    return null
  }

  return data
}
