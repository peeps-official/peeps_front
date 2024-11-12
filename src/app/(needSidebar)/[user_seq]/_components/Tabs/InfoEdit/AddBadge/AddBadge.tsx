'use client'

import { getAllCommonBadgeList } from '@/src/common/api/commonBadge'
import { OwnerBadgeListAtom } from '@/src/common/recoil/ownerAtom'
import { Badge_T } from '@/src/common/types/badge'
import { CommonBadge_T } from '@/src/common/types/commonBadge'
import { useMutation, useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'
import BadgeBox from './BadgeBox'
import { Fragment, useEffect, useState } from 'react'
import useDebounce from '@/src/common/hooks/useDebounce'
import { useForm, useWatch } from 'react-hook-form'
import { axiosWithAuth } from '@/src/common/api/instance'
import AuthBadgeViewBox from './AuthBadgeViewBox'

export default function AddBadge() {
  const ownerBadgeList = useRecoilValue<Badge_T[]>(OwnerBadgeListAtom)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [뱃지정보, set뱃지정보] = useState<Record<string, CommonBadge_T[]>>({})
  const [selectedBadge, setSelectedBadge] = useState<CommonBadge_T | null>(null)

  const { data: initData, isSuccess } = useQuery({ queryKey: ['commonBadge'], queryFn: getAllCommonBadgeList })

  function groupBadgesByType(badges: CommonBadge_T[]): Record<string, CommonBadge_T[]> {
    return badges.reduce<Record<string, CommonBadge_T[]>>((acc, badge) => {
      const { type } = badge
      if (!acc[type]) {
        acc[type] = []
      }
      acc[type].push(badge)
      return acc
    }, {})
  }

  useEffect(() => {
    if (!isSuccess) return
    setSelectedBadge(initData[0])
    set뱃지정보(groupBadgesByType(initData))
    console.log('init: ', initData)
  }, [initData])

  const { register, control } = useForm()

  const searchBadgeName = useWatch({
    control,
    name: 'type',
  })

  const debouunceBadgeName = useDebounce(searchBadgeName, 300)

  const { mutate: searchBadge } = useMutation({
    mutationFn: async (data: string) => await axiosWithAuth.get<CommonBadge_T[]>(`/badge?name=${data}`),
    onSuccess: (data) => {
      set뱃지정보(groupBadgesByType(data.data))
    },
    onError: (error) => {
      console.error('뱃지 검색에 실패했습니다.')
      console.error(error)
    },
  })

  useEffect(() => {
    if (debouunceBadgeName) {
      searchBadge(debouunceBadgeName)
    } else if (isSuccess) set뱃지정보(groupBadgesByType(initData))
  }, [debouunceBadgeName])

  const badgeTypes = 뱃지정보 && typeof 뱃지정보 === 'object' ? Object.keys(뱃지정보) : []

  return (
    <div className="kr-bold-14 grid grid-cols-2 gap-[2rem]">
      <div>
        <p className="kr-bold-24">인증 가능한 뱃지</p>
        <div className="my-3">
          <input
            type="text"
            {...register('type')}
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="뱃지 검색..."
            className="w-full max-w-80 rounded-md border border-solid border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="mb-6 flex space-x-2">
          {badgeTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type === selectedType ? null : type)}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                selectedType === type
                  ? `bg-${type}-500 bg-black text-white`
                  : `bg-gray-200 text-gray-700 hover:bg-gray-300`
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        {뱃지정보 &&
          typeof 뱃지정보 === 'object' &&
          Object.entries(뱃지정보).map(([key, value]) => (
            <Fragment key={key}>
              {(!selectedType || selectedType === key) && (
                <div className="mb-10">
                  <h2 className="kr-bold-18 mb-3">{key} 인증</h2>
                  <div className="flex w-fit flex-wrap gap-[1rem]">
                    {value.map((badge) => (
                      <button
                        onClick={() => setSelectedBadge(badge)}
                        key={badge.bdg_id}
                        className="flex flex-col items-center"
                      >
                        <div className="relative mb-2 h-16 w-16">
                          <Image
                            src={badge.image}
                            alt={badge.name}
                            layout="fill"
                            objectFit="contain"
                            className="rounded-md drop-shadow-md"
                          />
                        </div>
                        <h3 className="text-center text-xs font-semibold text-yellow-600">{badge.name}</h3>
                        <p className="text-center text-xs text-yellow-500">{badge.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </Fragment>
          ))}
      </div>

      <div className="max-w-[30rem]">{selectedBadge && <AuthBadgeViewBox badge={selectedBadge} />}</div>
    </div>
  )
}
