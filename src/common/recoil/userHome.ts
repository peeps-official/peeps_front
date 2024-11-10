import { atom, selector } from 'recoil'
import { POST_ARR_T } from '../types/post'
import { OwnerProfileStateAtom } from './ownerAtom'
import { LogedInUserReqDataAtom } from './userAtom'
/**
 * @description 로그인 유저가 Owner인지 확인
 */
export const IsOwnerAtom = selector({
  key: 'isOwner',
  get: ({ get }) => {
    const loginUser = get(LogedInUserReqDataAtom)
    const ownerUser = get(OwnerProfileStateAtom)

    return loginUser.user_data.user_seq === ownerUser.user_seq
  },
})

/**
 * @description Owner 게시물 리스트
 */
export const OwnerPostListAtom = atom<POST_ARR_T>({
  key: 'OwnerPostListAtom',
  default: [],
})
