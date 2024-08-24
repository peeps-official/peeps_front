import { axiosWithAuth } from './instance'

interface AuthData {
  id: number
  authDay: string
  authWay: string
  content: string
  description: string
}

// [이메일] - 받을 수 있는 뱃지
export async function getPossibleBadge() {
  const { data, status } = await axiosWithAuth.get<AuthData>(`/verify/mailer/badge`)

  if (status === 204) {
    return { id: -1, authDay: '', authWay: '', content: '', description: '' }
  }
  return data
}

// [이메일] - 뱃지 만들기 버튼 누르면 최종 요청
export async function makeBadge(description: string = '') {
  const reqData = { description: description }

  const { data, status } = await axiosWithAuth.post(`/verify/mailer/req`, reqData)

  return data
}

// [ NEED ]
// 인증 시간동안 카운트 다운 해주기
