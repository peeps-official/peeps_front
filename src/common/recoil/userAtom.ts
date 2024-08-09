import { atom } from 'recoil'
import { UserLogin_T, UserProfile_T } from '../types/user'
import { AdminUserData_T } from '../types/admin'

// admin
export const adminDatakey: string = 'adminDataKey'

export const uerDataAtom = atom<Array<AdminUserData_T>>({
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

export const badgeAtom = atom<Array<AdminUserData_T>>({
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

export const uerDataStateAtom = atom({
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

export const UserLoginDataStateAtom = atom<UserLogin_T>({
  key: 'UserLoginDataStateAtom',
  default: {
    user_seq: '',
    user_id: '',
    user_nickname: '',
    user_profile_img: '',
    user_bg_img: '',
  },
})

/**
 * @description 유저 프로필 데이터
 */
export const UserProfileStateAtom = atom<UserProfile_T>({
  key: 'UserProfileStateAtom',
  default: {
    user_seq: '',
    user_id: '',
    user_nickname: '',
    user_bg_img: null,
    user_profile_img: null,
    profileMessage: '',
    follower: [],
    badge: [],
  },
})
