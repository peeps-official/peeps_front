import { atom } from 'recoil'
import { Circle_T } from '../types/circle'

export const CircleDataAtom = atom<Circle_T | null>({
  key: 'CircleDataAtom',
  default: null,
})
