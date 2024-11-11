'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import { CircleProfile_T } from '@/src/common/types/circle'
import NextImg from '@/src/common/utils/NextImg'
import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import DataWrapperForCircle from './_components/DataWrapperForCircle'

export default function page() {
  const [써클s정보, set써클s정보] = useState<CircleProfile_T[]>([])

  const searchParams = useSearchParams()
  const search = searchParams.get('name')

  const router = useRouter()

  useEffect(() => {
    if (search) searchCircle(search)
  }, [search])

  const { mutate: searchCircle } = useMutation({
    mutationFn: async (data: string) => await axiosWithAuth.get(`/circle?name=${data}`),
    onSuccess: (variables) => {
      set써클s정보(variables.data)
    },
    onError: (error) => {
      console.error('뱃지 검색에 실패했습니다.')
      console.error(error)
    },
  })

  return (
    <DataWrapperForCircle>
      <div className="p-10">
        {써클s정보.map((circle) => (
          <button key={circle.sep_id} onClick={() => router.push(`circle/${circle.badge.name}`)}>
            <div className="h-40 w-40 overflow-hidden rounded-lg shadow-md hover:shadow-xl">
              <NextImg src={circle.badge.image ?? '/images/profile/profile.svg'} alt="user profile" />
            </div>
            <div className="w-40 px-2">
              <p className="kr-bold-14 mt-2 w-full text-left">{circle.badge.name}</p>
              <p className="kr-regular-12 overflow-hidden truncate text-nowrap text-left text-[#999]">
                {circle.badge.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </DataWrapperForCircle>
  )
}
