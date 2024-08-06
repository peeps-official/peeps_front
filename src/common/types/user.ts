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
  nickname: string
  profileImage: string | null
  backgroundImage: string | null
}
