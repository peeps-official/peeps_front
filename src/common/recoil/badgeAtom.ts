import { atom } from 'recoil'
import { CommonBadge_T } from '../types/commonBadge'

export const AdminBadgeListAtom = atom<CommonBadge_T[]>({
  key: 'AdminBadgeListAtom',
  default: [],
})

export const CommonBadgeDataAtom = atom<CommonBadge_T | null>({
  key: 'CommonBadgeDataAtom',
  default: null,
})
