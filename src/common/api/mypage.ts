import { axiosWithAuth } from './instance'
import { LoginUserDataReq_T } from '../types/user'

/**
 * @description 로그인한 유저의 프로필 데이터를 가져옵니다.
 */
export async function fetchUserProfileData() {
  const { data } = await axiosWithAuth.get<LoginUserDataReq_T>('/login/check')

  // 서버 키값 -> 클라이언트용으로 변경
  changeKey(data.user_data, 'nickname', 'user_nickname')
  changeKey(data.user_data, 'backgroundImage', 'user_bg_img')
  changeKey(data.user_data, 'profileImage', 'user_profile_img')

  return data
}

function changeKey(obj: any, oldKey: string, newKey: string) {
  if (oldKey !== newKey) {
    obj[newKey] = obj[oldKey]
    delete obj[oldKey]
  }
}
