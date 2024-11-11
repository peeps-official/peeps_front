import { atom } from 'recoil'

export const isAdminAtom = atom<boolean>({
  key: 'isAdmin',
  default: false,
})
