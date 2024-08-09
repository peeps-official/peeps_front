export interface Badge_T {
  id: string
  name: string
  image: string
  content: string
  verifiedUserCount?: number
  followingCount?: number
}

export interface BadgeIssue_T {
  id: number
  content: string
  description?: string
  authDay: string
  authWay: string
}

export interface BadgeAuthData {
  date: Date
  method: 'email' | 'paper' | 'block' | 'login'
  addDatas: { title: string; content: string }[]
}
