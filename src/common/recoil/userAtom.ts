import { atom } from 'recoil'
import { AdminUserData_T } from '../types/admin'
import { Badge_T } from '../types/badge'
import { LoginUserData_T, LoginUserFollow_T, UserLogin_T } from '../types/user'

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

/**
 * @description 로그인 유저 기본 값
 */

export const LogedInUserDefaultData: LoginUserData_T = {
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

/**
 * 로그인 데이터 중 user_data에 대한 데이터
 */
export const OnlyLogedInUserData = atom<UserLogin_T>({
  key: 'OnlyLogedInUserData',
  default: {
    user_seq: '',
    user_id: '',
    user_nickname: '',
    user_profile_img: '',
    user_bg_img: '',
  },
})

/**
 * @description 로그인 유저 뱃지 리스트
 */
export const LoginUserBadgeListAtom = atom<Badge_T[]>({
  key: 'LoginUserBadgeListAtom',
  default: [],
})
