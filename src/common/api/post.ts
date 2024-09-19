import { POST_ARR_T, PostUpload_T } from '../types/post'
import { axiosWithAuth } from './instance'

export async function getPostList(pageOwnerSeq: string) {
  const { data: feedData } = await axiosWithAuth.get<POST_ARR_T>(`${pageOwnerSeq}/post`)

  return feedData
}

export async function uploadPost(user_seq: string, data: PostUpload_T) {
  const { imgs: files, contents: description, isPublic } = data
  const formData = new FormData()

  console.log(data)

  if (files) {
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i])
      console.log(i)
      console.log(files[i])
    }
  }
  formData.append('description', description)
  formData.append('isPublic', isPublic.toString())

  const res = await axiosWithAuth.post(`/${user_seq}/post`, formData)
  console.log(res.data)
}
