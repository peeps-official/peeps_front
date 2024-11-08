import { atom } from 'recoil'

export const fileAtom = atom<string | null>({
  key: 'fileAtom',
  default: null,
})
