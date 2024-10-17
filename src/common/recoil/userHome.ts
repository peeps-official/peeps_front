import { atom } from 'recoil'
import { UserHomeTab_T } from '../types/home'
import { POST_ARR_T } from '../types/post'

export const IsOwnerAtom = atom<boolean>({
  key: 'isOwner',
  default: false,
})

export const OwnerPostListAtom = atom<POST_ARR_T>({
  key: 'OwnerPostListAtom',
  default: [],
})
