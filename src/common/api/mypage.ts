import { axiosWithAuth } from './instance'
import { LoginUserDataReq_T, UserProfile_T } from '../types/user'
import { changeKey } from '../utils/changKey'

/**
 * @description 로그인한 유저의 프로필 데이터를 가져옵니다.
 */
export async function getLoginUserData() {
  const { data } = await axiosWithAuth.get<LoginUserDataReq_T>('/login/check')

  // 서버 키값 -> 클라이언트용으로 변경
  changeKey(data.user_data, 'nickname', 'user_nickname')
  changeKey(data.user_data, 'backgroundImage', 'user_bg_img')
  changeKey(data.user_data, 'profileImage', 'user_profile_img')

  return data
}

/**
 * @description owner 유저 프로필 데이터를 가져옵니다.
 */
export async function getOwnerUserData(user_seq: string) {
  const { data } = await axiosWithAuth.get(`/${user_seq}/profile`)

  return data
}

/**
 * @description owner 유저의 프로필을 수정합니다.
 */
export async function editOwnerProfile(data: UserProfile_T) {
  const { user_seq, user_nickname, user_profile_img, user_bg_img, profileMessage } = data

  return axiosWithAuth.patch(`/${user_seq}/profile`, {
    nickname: user_nickname,
    profileImage: user_profile_img,
    backgroundImage: user_bg_img,
    info: profileMessage,
  })
}
