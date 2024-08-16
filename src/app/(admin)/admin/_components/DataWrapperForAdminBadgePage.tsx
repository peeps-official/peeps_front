'use client'

import { getBadgeList } from '@/src/common/api/adminBadge'
import { badgeDataAtom } from '@/src/common/recoil/badgeAtom'
import { Badge_T } from '@/src/common/types/badge'
import { changeKey } from '@/src/common/utils/changKey'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

type Props = {
  children: React.ReactNode
}

export default function DataWrapperForAdminBadgePage({ children }: Props) {
  const [badgeData, setBadgeData] = useRecoilState<Badge_T[]>(badgeDataAtom)

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
