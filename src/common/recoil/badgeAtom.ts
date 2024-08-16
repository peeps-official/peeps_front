import { atom } from 'recoil'
import { Badge_T } from '../types/badge'

export const badgeDataAtom = atom<Array<Badge_T>>({
  key: 'badgeDataAtom',
  default: [
    {
      id: '',
      name: '',
      image: '',
      content: '',
      member_count: 0,
      followingCount: 0,
    },
  ],
})
