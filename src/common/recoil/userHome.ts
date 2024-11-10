import { atom, selector } from 'recoil'
import { POST_ARR_T } from '../types/post'
import { OwnerProfileStateAtom } from './ownerAtom'
import { LogedInUserReqDataAtom } from './userAtom'

export const IsOwnerAtom = selector({
  key: 'isOwner',
  get: ({ get }) => {
    const loginUser = get(LogedInUserReqDataAtom)
    const ownerUser = get(OwnerProfileStateAtom)

    return loginUser.user_data.user_seq === ownerUser.user_seq
  },
})

export const OwnerPostListAtom = atom<POST_ARR_T>({
  key: 'OwnerPostListAtom',
  default: [],
})
