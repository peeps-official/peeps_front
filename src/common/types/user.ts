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
  user_profile_img: string | null
  follower: { nickname: string; user_id: string }[]
  badge: Badge_T[]
}

export interface PopupProfilePage_T {
  profile: PopupProfile_T
  badges: Badge_T[]
  educate: {
    dateStart: string
    dateEnd?: string
    title: string
    subEx: string[]
  }[]
  career: {
    dateStart: string
    dateEnd?: string
    title: string
    subEx: string[]
  }[]
}

export interface PopupProfile_T {
  user_name: string
  profileMessage: string | ''
  profile_img: string | null
  phone: string
  email: string
  url: string
  addr: string
  mainBadge: Badge_T
}
