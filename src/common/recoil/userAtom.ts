import { atom } from 'recoil'
import { LoginUserFollow_T, LoginUserData_T, UserLogin_T } from '../types/user'
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
 * @description 로그인 유저 기본 값
 */

export const LogedInUserDefaultData = {
  loginState: -1,
  needData: [],
  user_data: {
    user_seq: '',
    user_id: '',
    user_nickname: '',
    user_bg_img: '',
    user_profile_img: '',
  },
}

/**
 * @description 로그인 유저에 대한 서버 응답 데이터
 */

export const LogedInUserReqDataAtom = atom<LoginUserData_T>({
  key: 'LoginUserDataStateAtom',
  default: LogedInUserDefaultData,
})

export const Login_User_Follow_Atom = atom<Array<LoginUserFollow_T>>({
  key: 'Login_User_Follow_Atom',
  default: [],
})
