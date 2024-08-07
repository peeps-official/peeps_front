'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import { Badge_T } from '@/src/common/types/admin'
import NextImg from '@/src/common/utils/NextImg'
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'

/**
 * 뱃지 카드 컴포넌트
 */

interface Props {
  badge: Badge_T
}

export default function BadgeCard({ badge }: Props) {
  const queryClient = useQueryClient()

  const { mutate: deleteBadgeReq } = useMutation({
    mutationFn: async (id: number) =>
      await axiosWithAuth.delete(`/admin/badge/${id}`),
    onSuccess: (variables) => {
      window.alert(name + '뱃지가 삭제되었습니다.')
      queryClient.invalidateQueries({ queryKey: ['admin', 'badge'] })
    },
  })
  const { name, image, content, id } = badge

  function deleteBadge(id: number) {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteBadgeReq(id)
    }
  }

  return (
    <div className="flex flex-col flex-wrap items-center justify-center max-w-sm p-5 overflow-hidden bg-white rounded shadow-lg ">
      <Link href={`badge/${id}`}>
        <div className="h-[100px] w-[100px] mb-[20px] shadow-xl rounded-[50%]">
          <NextImg src={image} alt={name} />
        </div>
        <div className="mb-2 text-lg font-bold text-center">{name}</div>
        <div className="mb-2 text-lg font-normal text-center text-gray-medium">
          {content}
        </div>
      </Link>
      <div className="grid grid-cols-2 gap-4">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          수정
        </button>
        <button
          onClick={() => deleteBadge(id)}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          삭제
        </button>
      </div>
    </div>
  )
}
