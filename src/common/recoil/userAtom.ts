import { atom, selector } from 'recoil'
import { AdminUserData_T } from '../types/admin'
import { Badge_T } from '../types/badge'
import { LoginUserData_T, LoginUserFollow_T, UserLogin_T } from '../types/user'
import { FEED_POST_T } from '../types/post'

export const badgeAtom = atom<Array<AdminUserData_T>>({
  key: 'adminBadgeListKey',
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
 * [loginState]
 *  -1: 비로그인 상태
 *  200: 모든 정보 있음
 *  300: 추가로 필요한 정보 있음
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

/**
 * @description 로그인 여부
 */
export const IsUserLogedInAtom = selector<boolean>({
  key: 'IsUserLogedInAtom',
  get: ({ get }) => {
    const loginData = get(LogedInUserReqDataAtom)
    return loginData?.loginState === 200 ? true : false
  },
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

/**
 * @description 로그인 유저 피드 포스트 리스트
 */
export const LoginUserFeedPostListAtom = atom<FEED_POST_T[]>({
  key: 'LoginUserFeedPostListAtom',
  default: [],
})
