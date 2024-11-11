import { atom } from 'recoil'
import { CircleProfile_T, CirCleFollower_T } from '../types/circle'
import { Post_T } from '../types/post'

export const CircleDataAtom = atom<CircleProfile_T | null>({
  key: 'CircleDataAtom',
  default: null,
})

export const CircleFeedDataAtom = atom<Post_T[] | null>({
  key: 'CircleFeedDataAtom',
  default: null,
})

export const CirCleFollowerListAtom = atom<CirCleFollower_T[] | null>({
  key: 'CirCleFollowerListAtom',
  default: null,
})
