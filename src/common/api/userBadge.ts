import { axiosWithAuth } from './instance'

// [ TODO ]
// 인증 시간동안 카운트 다운 해주기

// [이메일] - 받을 수 있는 뱃지
type getPossibleBadgeRes = {
  name: string // 뱃지 이름
  image: string // 뱃지 이미지
  member_count: number // 멤버 수
  authway: string // 인증 방법 - email
  detail: Array<any> // 자세한 정보
}

export async function getPossibleBadge(email: string) {
  const { data, status } = await axiosWithAuth.get<getPossibleBadgeRes>(`/verify/mailer/badge?email=${email}`)

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
  const { data, status } = await axiosWithAuth.post(`/verify/mailer/req`, {
    name: resData.name,
    authway: resData.authway,
    email: resData.email,
    description: resData.description,
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
