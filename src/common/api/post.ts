import { FEED_POST_T, POST_ARR_T, PostUpload_T } from '../types/post'
import { axiosWithAuth } from './instance'

export async function getPostList(pageOwnerSeq: string) {
  const { data: feedData } = await axiosWithAuth.get<POST_ARR_T>(`${pageOwnerSeq}/post`)

  return feedData
}

export async function uploadPost(user_seq: string, data: PostUpload_T) {
  const { image, description, isPublic } = data
  const res = await axiosWithAuth.post(`/${user_seq}/post`, {
    description,
    isPublic,
    image,
  })
}

export async function editPost(user_seq: string, art_id: number, data: PostUpload_T) {
  const { image, description, isPublic } = data

  const res = await axiosWithAuth.patch(`/${user_seq}/post/${art_id.toString()}`, {
    description,
    isPublic,
    image,
  })
}

/**
 * @description 피드 포스트 리스트
 */

export async function getFeedPostList() {
  const { data: feedData } = await axiosWithAuth.get<FEED_POST_T[]>('/circle/follow/post')

  return feedData
}
