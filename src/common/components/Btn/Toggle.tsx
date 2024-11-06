'use client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { axiosWithAuth } from '../../api/instance'

type ToggleButtonProps = {
  isEnable: boolean
  id: number
  isAll?: boolean
}

/**
 * [TODO] 트래픽 넘 잡아먹음 -> 나중에 수정 버튼 누르면 요청하도록 수정해야함.
 */
export default function ToggleButton({ isEnable, id, isAll = false }: ToggleButtonProps) {
  const [enabled, setEnabled] = useState(isEnable)

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: async () => {
      if (isAll) {
        const { data } = await axiosWithAuth.patch(`/badge/user/${id}/isPublic`, {
          isPublic: !enabled,
        })

        return data
      } else {
        const { data } = await axiosWithAuth.patch(`/badge/user/detail/${id}`, {
          isPublic: !enabled,
        })

        return data
      }
    },
    onSuccess: (data) => {
      const { isPublic } = data
      queryClient.invalidateQueries({ queryKey: ['badgeList'] })
      setEnabled(isPublic)
    },
  })

  return (
    <button
      onClick={() => mutate()}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${
        enabled ? 'bg-blue-600' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
          enabled ? 'translate-x-5' : 'translate-x-1'
        }`}
      />
    </button>
  )
}
