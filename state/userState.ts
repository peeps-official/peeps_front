import { atom } from 'recoil'

export const userDataKey: string = 'userDataKey'

export const uerDataState = atom<UserData>({
  key: userDataKey,
  default: {
    id: '',
    nickname: '',
    profileImage: null,
    backgroundImage: null,
    info: null,
    mobile: '',
    name: '',
    birthday: '',
    birthyear: '',
    boards: [],
  },
})

export interface UserData {
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
