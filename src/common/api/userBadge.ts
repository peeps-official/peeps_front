import { axiosWithAuth } from './instance'

interface AuthData {
  id: number
  authDay: string
  authWay: string
  content: string
  description: string
}

// [ TODO ]
// 인증 시간동안 카운트 다운 해주기

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

// [파일] - 파일 인증 요청 보내기
export async function upLoadFileAuth(file: File, description: string = '') {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('description', description)

  const { data } = await axiosWithAuth.post(`/verify/file/upload`, formData)

  console.log('파일 업로드: ', data)
  return data
}
