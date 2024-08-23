import { atom } from 'recoil'
import { UserHomeTab_T } from '../types/home'

export const selectedUserHomeTabAtom = atom<UserHomeTab_T>({
  key: 'selectUserHomeTab',
  default: 'home',
})
