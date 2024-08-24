import { atom } from 'recoil'
import { UserHomeTab_T } from '../types/home'

export const IsOwnerAtom = atom<boolean>({
  key: 'isOwner',
  default: false,
})

export const selectedUserHomeTabAtom = atom<UserHomeTab_T>({
  key: 'selectUserHomeTab',
  default: 'feed',
})
