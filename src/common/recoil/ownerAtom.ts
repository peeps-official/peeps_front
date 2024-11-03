import { atom } from 'recoil'
import { OwnerImgList_T, OwnerProfile_T } from '../types/owner'
import { Badge_T } from '../types/badge'

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
    info_detail: null,
    follwer_list: [],
    badge_list: [],
  },
})

/**
 * @description Owner 이미지 리스트
 */

export const OwnerImgListAtom = atom<OwnerImgList_T>({
  key: 'OwnerImgListAtom',
  default: [],
})

export const OwnerBadgeListAtom = atom<Badge_T[]>({
  key: 'OwnerBadgeListAtom',
  default: [],
})
