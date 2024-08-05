import { atom } from 'recoil'
import { UserData, UserProfile } from '../types/user'

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

export const adminBadgeListKey: string = 'adminBadgeListKey'

export const badgeAtom = atom<Array<UserData>>({
  key: adminBadgeListKey,
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

export const userProfileState = atom<UserProfile>({
  key: 'userProfileState',
  default: {
    nickname: '',
    profileImage: null,
    backgroundImage: null,
  },
})
