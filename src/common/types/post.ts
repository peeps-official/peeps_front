export type PostUpload_T = {
  description: string
  image: string[]
  isPublic: boolean
}

export interface POST_T {
  id: number
  description: string
  image: string[]
  create_date: string // ISO 8601 형식의 날짜 문자열
  end_date: string // ISO 8601 형식의 날짜 문자열
  isPublic: boolean
  boardLike: number
  comments: number
  user: {
    id: string
    user_id: string
    nickname: string
    profileImage: string
    backgroundImage: string
    info: string
    mobile: string
    name: string
    birthday: string
    birthyear: string
  }
}

export type POST_ARR_T = POST_T[]
