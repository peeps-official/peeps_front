'use client'

import { Badge_T } from '@/src/common/types/badge'
import NextImg from '@/src/common/utils/NextImg'

/**
 * 뱃지 카드 컴포넌트
 */

interface Props {
  badge: Badge_T
}

export default function BadgeCard({ badge }: Props) {
  const { name, image, content } = badge

  return (
    <div className="flex flex-col items-center justify-center max-w-sm p-5 overflow-hidden bg-white rounded shadow-lg ">
      <div className="h-[100px] w-[100px] mb-[20px] shadow-xl rounded-[50%]">
        <NextImg src={image} alt={name} />
      </div>
      <div className="mb-2 text-lg font-bold text-center">{name}</div>
      <div className="mb-2 text-lg font-normal text-center text-gray-medium">
        {content}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          수정
        </button>
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          삭제
        </button>
      </div>
    </div>
  )
}
