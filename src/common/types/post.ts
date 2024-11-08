export type PostUpload_T = {
  description: string
  image: string[]
  isPublic: boolean
}

export interface Post_T {
  id: number
  description: string
  image: string[]
  create_date: string // ISO 8601 형식의 날짜 문자열
  end_date: string // ISO 8601 형식의 날짜 문자열
  isPublic: boolean
  boardLike: number
  comments: number
  user: {
    id: string // 유저 고유 아이디
    user_id: string // 유저가 설정한 아이디
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

export type Comment_T = {
  id: number
  isLike: boolean
  commentLike: number
  description: string
  create_date: string
  end_date: string
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

export type POST_ARR_T = Post_T[]
