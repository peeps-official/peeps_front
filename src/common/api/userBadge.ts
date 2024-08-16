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
  const { data } = await axiosWithAuth.get<AuthData>(`/verify/mailer/badge`)

  return data
}

// [이메일] - 뱃지 만들기
export async function makeBadge(description: string = '') {
  const { data } = await axiosWithAuth.post(`/verify/mailer/req`, {
    description,
  })

  return data
}
