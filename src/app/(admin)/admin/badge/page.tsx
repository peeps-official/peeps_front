'use client'
/**
 * 뱃지 페이지 - 뱃지 자체 관리 페이지 (뱃지 생성, 수정, 삭제) / 참고: https://ccob.cccv.to/badge/list
 *
 * (이메일 / 로그인 / 블록체인 / 서류) 각각의 인증에 대하여 뱃지를 생성, 수정, 삭제할 수 있는 페이지
 * -> 뱃지는 인증 방법에 상관없이 하나만 제작.
 * -> 뱃지 내부에 다양한 인증방법에 따른 내용 추가하는 방식으로 구현.
 */

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import BadgeCard from '../_components/Badge/BadgeCard'
import { axiosWithAuth } from '@/src/common/api/instance'
import { AdminCreateBadge_T } from '@/src/common/types/admin'
import { getBadgeList } from '@/src/common/api/adminBadge'
import { useEffect, useState } from 'react'
import { Badge_T } from '@/src/common/types/badge'
import { badgeDataAtom } from '@/src/common/recoil/badgeAtom'
import { useRecoilValue } from 'recoil'
import DataWrapperForAdminBadgePage from '../_components/DataWrapperForAdminBadgePage'

export default function AdminBadgePage() {
  const queryClient = useQueryClient()
  const badgeData = useRecoilValue<Badge_T[]>(badgeDataAtom)

  const { mutate: addBadge } = useMutation({
    mutationFn: async (data: AdminCreateBadge_T) =>
      await axiosWithAuth.post('/admin/badge', data),
    onSuccess: (variables) => {
      window.alert(JSON.stringify(variables.data.name) + '뱃지가 추가되었습니다.')
      queryClient.invalidateQueries({ queryKey: ['admin', 'badge'] })
    },
    onError: (error) => {
      window.alert('뱃지 추가에 실패했습니다.')
      console.error(error)
    },
  })

  return (
    <DataWrapperForAdminBadgePage>
      <h1 className="my-2">뱃지 관리</h1>
      <button
        className="p-3 my-4 rounded bg-blue-soft hover:bg-blue-secondary"
        onClick={() => {
          addBadge({
            name: '한경대학교',
            image:
              'https://i.namu.wiki/i/rlymHGzGkXgtwPzlj9jmLbyqGFcykXgKxesKDZ6bBtdVi9dsunCmoQzcSo7Yib6T7Y4rCbzxcZOZmsw-c89Fng.svg',
            content: 'test content',
          })
        }}
      >
        뱃지추가 버튼
      </button>
      <div className="flex flex-wrap gap-10">
        {!!badgeData[0]?.bdg_id &&
          badgeData.map((badge) => {
            return <BadgeCard key={badge.bdg_id} badge={badge} />
          })}
      </div>
    </DataWrapperForAdminBadgePage>
  )
}
