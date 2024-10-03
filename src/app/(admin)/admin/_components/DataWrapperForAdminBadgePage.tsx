'use client'

import { getBadgeList } from '@/src/common/api/adminBadge'
import { AdminBadgeListAtom } from '@/src/common/recoil/badgeAtom'
import { AdminBadgeList_T } from '@/src/common/types/admin'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

type Props = {
  children: React.ReactNode
}

export default function DataWrapperForAdminBadgePage({ children }: Props) {
  const setBadgeData = useSetRecoilState<AdminBadgeList_T[]>(AdminBadgeListAtom)

  const { data: badgeDataQuery, isSuccess } = useQuery({
    queryKey: ['admin', 'badge'],
    queryFn: async () => await getBadgeList(),
  })

  useEffect(() => {
    if (isSuccess) {
      setBadgeData(badgeDataQuery)
    }
  }, [badgeDataQuery])

  return <>{children}</>
}
