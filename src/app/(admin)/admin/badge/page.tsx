'use client'
/**
 * 뱃지 페이지 - 뱃지 자체 관리 페이지 (뱃지 생성, 수정, 삭제) / 참고: https://ccob.cccv.to/badge/list
 *
 * (이메일 / 로그인 / 블록체인 / 서류) 각각의 인증에 대하여 뱃지를 생성, 수정, 삭제할 수 있는 페이지
 * -> 뱃지는 인증 방법에 상관없이 하나만 제작.
 * -> 뱃지 내부에 다양한 인증방법에 따른 내용 추가하는 방식으로 구현.
 */

import { useMutation, useQueries, useQuery } from '@tanstack/react-query'
import BadgeCard from '../_components/Badge/BadgeCard'
import { axiosWithAuth } from '@/src/common/api/instance'
import { Badge_T } from '@/src/common/types/admin'

const tmp_data = [
  {
    name: 'test',
    image: 'https://via.placeholder.com/150',
    content: 'test content',
  },
]

export default function AdminBadgePage() {
  const { data: badgeData, isSuccess } = useQuery({
    queryKey: ['admin', 'badge'],
    queryFn: async () => await axiosWithAuth.get<Badge_T[]>('/badge'),
  })
  const { mutate } = useMutation({
    mutationFn: async (data: Badge_T) =>
      await axiosWithAuth.post('/admin/badge', data),
    onSuccess: (variables) => {
      console.log('success', variables)
    },
  })
  console.log('badgeData', badgeData)
  // const { data } = await axiosWithAuth.get<Badge_T[]>('/badge')

  return (
    <div className="p-5">
      <h1 className="my-2">뱃지 관리</h1>
      <button
        className="p-3 my-4 rounded bg-blue-soft hover:bg-blue-secondary"
        onClick={() => {
          mutate({
            name: '한경대학교',
            image:
              'https://i.namu.wiki/i/rlymHGzGkXgtwPzlj9jmLbyqGFcykXgKxesKDZ6bBtdVi9dsunCmoQzcSo7Yib6T7Y4rCbzxcZOZmsw-c89Fng.svg',
            content: 'test content',
          })
        }}
      >
        뱃지추가 버튼
      </button>
      <div className="flex gap-10">
        {badgeData?.data?.map((badge) => {
          return <BadgeCard key={badge.name} badge={badge} />
        })}
      </div>
    </div>
  )
}
