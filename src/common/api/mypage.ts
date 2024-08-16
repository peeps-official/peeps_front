import { axiosWithAuth } from './instance'
import { LoginUserDataReq_T } from '../types/user'
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
  console.log('owner: ', data)

  return data
}
