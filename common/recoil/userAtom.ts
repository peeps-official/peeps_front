import { UserData } from '@/state/tableState'
import { atom } from 'recoil'

// admin
export const adminDatakey: string = 'adminDataKey'

export const uerData = atom<Array<UserData>>({
  key: adminDatakey,
  default: [
    {
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
  ],
})

// user
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
