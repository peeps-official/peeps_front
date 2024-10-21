import { axiosWithAuth } from './instance'
import { LoginUserData_T } from '../types/user'
import { changeKey } from '../utils/changKey'
import { LogedInUserDefaultData } from '../recoil/userAtom'
import { OwnerProfile_T } from '../types/owner'

/**
 * @description 로그인한 유저의 프로필 데이터를 가져옵니다.
 */
export async function getLoginUserData() {
  try {
    const { data } = await axiosWithAuth.get<LoginUserData_T>('/login/check')
    changeKey(data.user_data, 'nickname', 'user_nickname')
    changeKey(data.user_data, 'backgroundImage', 'user_bg_img')
    changeKey(data.user_data, 'profileImage', 'user_profile_img')

    return data
  } catch (error) {
    console.log('로그인 없음')
    return LogedInUserDefaultData
  }

  // 서버 키값 -> 클라이언트용으로 변경
}

/**
 * @description owner 유저 프로필 데이터를 가져옵니다.
 * [ TODO ]
 * changeKey를 이용해서 하나하나 키값을 변경하는 부분이
 * 서버에 관련 데이터(지금은 OwnerProfile_T 데이터)를 보내는 코드와 의존성이 생겨 나중에 문제가 될 수 있음.
 * 현재는 editOwnerProfile 함수에서만 사용하므로 문제가 없지만
 * 추후 서버에 유저 데이터를 보내는 함수가 늘어날 경우 수정이 필요함.
 */
export async function getOwnerUserData(user_seq: string): Promise<OwnerProfile_T> {
  const { data } = await axiosWithAuth.get(`/${user_seq}/profile`)

  changeKey(data, 'id', 'user_seq')
  changeKey(data, 'nickname', 'user_nickname')
  changeKey(data, 'info', 'profileMessage')
  changeKey(data, 'backgroundImage', 'user_bg_img')
  changeKey(data, 'profileImage', 'user_profile_img')

  return data
}

/**
 * @description owner 유저의 프로필을 수정합니다.
 */
export async function editOwnerProfile(data: OwnerProfile_T) {
  const { user_seq, user_nickname, user_profile_img, user_bg_img, profileMessage } = data

  return axiosWithAuth.patch(`/${user_seq}/profile`, {
    id: user_seq,
    nickname: user_nickname,
    profileImage: user_profile_img,
    backgroundImage: user_bg_img,
    info: profileMessage,
  })
}

/**
 * @description 유저의 뱃지 리스트를 가져옵니다.
 */
export async function getUserBadgeList(user_seq: string) {
  const { data } = await axiosWithAuth.get(`/badge/user/${user_seq}`)

  return data
}

/**
 * @description owner 유저의 학력을 가져옵니다.
 */
export async function getOwnerEducation(user_seq: string) {
  const { data } = await axiosWithAuth.get(`/${user_seq}/degree`)

  return data
}

/**
 * @description owner 유저의 학력을 가져옵니다.
 */
export async function getOwnerCareer(user_seq: string) {
  const { data } = await axiosWithAuth.get(`/${user_seq}/career`)

  return data
}

/**
 * @description owner 유저의 팔로우 리스트를 가져옵니다.
 */

export async function getOwnerFollowList(user_seq: string) {
  const { data } = await axiosWithAuth.get(`/${user_seq}/followlist`)

  return data
}

export async function getOwnerImageList(user_seq: string) {
  const { data } = await axiosWithAuth.get(`/${user_seq}/post/img`)

  return data
}
