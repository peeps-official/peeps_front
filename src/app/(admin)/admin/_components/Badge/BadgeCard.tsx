'use client'

import {
  BadgeTypes,
  IsBadgeAuth,
} from '@/src/app/(userPage)/[user_seq]/_components/Tabs/InfoEdit/Badge/BadgeItemContainer'
import { axiosWithAuth } from '@/src/common/api/instance'
import { AdminBadgeList_T, AuthType_T } from '@/src/common/types/admin'
import NextImg from '@/src/common/utils/NextImg'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'

/**
 * 뱃지 카드 컴포넌트
 */

interface Props {
  badge: AdminBadgeList_T
}

export default function BadgeCard({ badge }: Props) {
  const queryClient = useQueryClient()

  const { mutate: deleteBadgeReq } = useMutation({
    mutationFn: async (id: number) => await axiosWithAuth.delete(`/admin/badge/${id}`),
    onSuccess: (variables) => {
      window.alert(name + '뱃지가 삭제되었습니다.')
      queryClient.invalidateQueries({ queryKey: ['admin', 'badge'] })
    },
  })
  const { name, image, bdg_id: id } = badge

  function deleteBadge(id: number) {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteBadgeReq(id)
    }
  }

  return (
    <div className="flex flex-col gap-[10px] rounded-[8px] px-[14px] py-[16px] shadow-popupBox duration-200 ease-in hover:translate-y-[-0.2rem]">
      <Link href={`badge/${id}`}>
        <div onClick={(e) => e.stopPropagation()} className="flex items-center justify-between gap-[2em]">
          <div className="flex items-center gap-[0.3em]">
            <div className="relative top-[0.1rem] flex h-[30px] w-[30px] items-center justify-center">
              <NextImg src={image} alt="badge" />
            </div>
            <p className="kr-bold-14">{name}</p>
          </div>
        </div>
        <div className="mt-3 flex gap-1">
          {BadgeTypes.map((type) => {
            const isAuth: boolean = !!badge.auth[type.id as keyof AuthType_T]
            return <IsBadgeAuth key={type.id} auth={isAuth} icon={type.icon} />
          })}
        </div>
      </Link>
    </div>
  )
}
