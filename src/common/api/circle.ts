import { Circle_T, CirCleFollower_T } from '../types/circle'
import { PostUpload_T } from '../types/post'
import { axiosWithAuth } from './instance'

/**
 * @description 서클 프로필 조회
 * @param sep_id 뱃지 이름
 */
export async function getCircleProfile(sep_id: string) {
  const { data, status } = await axiosWithAuth.get<Circle_T>(`/circle/${sep_id}`)

  if (status === 404) {
    return null
  }

  return data
}

/**
 * @description 서클 팔로우 리스트 조회
 */

export async function getCircleFollowList(sep_id: string) {
  const { data } = await axiosWithAuth.get<CirCleFollower_T[]>(`/circle/${sep_id}/follow`)
  return data
}

/**
 * @description 서클 게시글 조회
 */
export async function getCircleFeed(sep_id: string) {
  const { data } = await axiosWithAuth.get(`/circle/${sep_id}/post`)
  return data
}

/**
 * @description 서클 게시글 중 내가 작성한 게시글
 */
export async function getMyCirclePost(sep_id: string) {
  const { data } = await axiosWithAuth.get(`/circle/${sep_id}/post/user`)
  return data
}

/**
 * @description 서클 게시글 생성
 */

export async function uploadCirclePost(sep_id: string, data: PostUpload_T) {
  const { image, description, isPublic } = data

  const res = await axiosWithAuth.post(`/circle/${sep_id}/post`, {
    description,
    isPublic,
    image,
  })
}

/**
 * @description 서클 게시글 수정
 */
export async function editCirclePost(sep_id: string, art_id: number, data: PostUpload_T) {
  const { image, description, isPublic } = data

  const res = await axiosWithAuth.patch(`/circle/${sep_id}/post/${art_id}`, {
    description,
    isPublic,
    image,
  })
}

/**
 * @description 서클 게시글 삭제
 */
export async function deleteCirclePost(sep_id: string, art_id: number) {
  const res = await axiosWithAuth.delete(`/circle/${sep_id}/post/${art_id}`)
}
