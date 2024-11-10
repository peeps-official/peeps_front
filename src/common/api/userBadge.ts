import { BadgeCreate_T } from '../types/badge'
import { axiosWithAuth } from './instance'

// [ TODO ]
// 인증 시간동안 카운트 다운 해주기

export async function getPossibleBadge(email: string) {
  const { data, status } = await axiosWithAuth.get<BadgeCreate_T>(`/verify/mailer/badge?email=${email}`)

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

// 뱃지 마지막 생성 요청
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

// 뱃지 삭제 요청
export async function deleteBadge(badgeId: number) {
  try {
    const { data, status } = await axiosWithAuth.delete(`/badge/user/${badgeId}`, {})
    return { data, status }
  } catch (error) {
    console.error('뱃지 삭제 실패:', error)
    return false
  }
}

// [파일] - 파일 인증 요청 보내기
export async function upLoadFileAuth(file: string, description: string = '') {
  const { data } = await axiosWithAuth.post(`/verify/file/upload`, {
    content: file,
    description: description,
  })

  return data
}
