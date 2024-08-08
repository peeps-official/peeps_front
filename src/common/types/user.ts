import { Badge_T } from './admin'

export interface UserData_T {
  id: string
  nickname: string
  profileImage: string | null
  backgroundImage: string | null
  info: string | null
  mobile: string
  name: string
  birthday: string
  birthyear: string
  boards: any[]
}

export interface UserProfile_T {
  user_seq: string
  user_id: string
  user_nickname: string
  profileMessage: string | ''
  user_bg_img: string | null
  user_profile_image: string | null
  follower: { nickname: string; user_id: string }[]
  badge: Badge_T[]
}
