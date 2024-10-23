import { BadgeCreate_T } from '../types/badge'
import { axiosWithAuth } from './instance'

// [ TODO ]
// 인증 시간동안 카운트 다운 해주기

export async function getPossibleBadge(email: string) {
  const { data, status } = await axiosWithAuth.get<BadgeCreate_T>(`/verify/mailer/badge?email=${email}`)

  console.log('비상상황!!!!')

  if (status === 204) {
    return { name: '', image: '', member_count: 0, authway: '', email: '', detail: [] }
  }

  return data
}

// [이메일] - 뱃지 만들기 버튼 누르면 최종 요청

export interface AuthData {
  name: string
  authway: string
  email: string
  description: string
}

export async function makeBadge(resData: AuthData) {
  const { data, status } = await axiosWithAuth.post(`/verify`, {
    name: resData.name,
    description: resData.description,
    authway: resData.authway,
    email: resData.email,
  })

  console.log(data)
  console.log(status)
  return data
}

// [파일] - 파일 인증 요청 보내기
export async function upLoadFileAuth(file: File, description: string = '') {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('description', description)

  const { data } = await axiosWithAuth.post(`/verify/file/upload`, formData)

  console.log('파일 업로드: ', data)
  return data
}
