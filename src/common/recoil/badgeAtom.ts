import { atom } from 'recoil'
import { Badge_T } from '../types/badge'

export const badgeDataAtom = atom<Array<Badge_T>>({
  key: 'badgeDataAtom',
  default: [
    {
      bdg_id: -1,
      name: '',
      image: '',
      content: '',
      member_count: 0,
      followingCount: 0,
    },
  ],
})
