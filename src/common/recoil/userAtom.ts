import { atom } from 'recoil'
import { UserData_T, UserProfile_T } from '../types/user'

// admin
export const adminDatakey: string = 'adminDataKey'

export const uerDataAtom = atom<Array<UserData_T>>({
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

export const badgeAtom = atom<Array<UserData_T>>({
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

export const uerDataStateAtom = atom<UserData_T>({
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

export const UserProfileStateAtom = atom<UserProfile_T>({
  key: 'UserProfileStateAtom',
  default: {
    user_seq: '',
    user_id: '',
    user_nickname: '',
    user_bg_img: null,
    user_profile_image: null,
    profileMessage: '',
    follower: [],
    badge: [],
  },
})
