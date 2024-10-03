import { atom } from 'recoil'
import { Badge_T } from '../types/badge'
import { AdminBadgeList_T } from '../types/admin'

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

export const AdminBadgeListAtom = atom<Array<AdminBadgeList_T>>({
  key: 'AdminBadgeListAtom',
  default: [
    {
      bdg_id: -1,
      name: '',
      image: '',
      member_count: 0,
      auth: {
        id: 0,
        email: '',
        login: false,
        file: false,
      },
    },
  ],
})
