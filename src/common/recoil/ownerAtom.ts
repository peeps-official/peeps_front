import { atom } from 'recoil'
import { OwnerBadge_T, OwnerImgList_T, OwnerProfile_T } from '../types/owner'

/**
 * @description Owner 프로필 데이터
 */
export const OwnerProfileStateAtom = atom<OwnerProfile_T>({
  key: 'OwnerProfileStateAtom',
  default: {
    user_seq: '',
    user_id: '',
    user_nickname: '',
    user_bg_img: null,
    user_profile_img: null,
    profileMessage: '',
    isFollow: -1,
    follwer_list: [],
    badge_list: [],
  },
})

/**
 * @description Owner 이미지 리스트
 */

export const OwnerImgListAtom = atom<OwnerImgList_T>({
  key: 'OwnerImgListAtom',
  default: {
    id: '',
    image: [],
  },
})

export const OwnerBadgeListAtom = atom<OwnerBadge_T[]>({
  key: 'OwnerBadgeListAtom',
  default: [],
})
