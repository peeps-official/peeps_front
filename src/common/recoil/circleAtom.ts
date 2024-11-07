import { atom } from 'recoil'
import { Circle_T } from '../types/circle'
import { Post_T } from '../types/post'

export const CircleDataAtom = atom<Circle_T | null>({
  key: 'CircleDataAtom',
  default: null,
})

export const CircleFeedDataAtom = atom<Post_T[] | null>({
  key: 'CircleFeedDataAtom',
  default: null,
})
