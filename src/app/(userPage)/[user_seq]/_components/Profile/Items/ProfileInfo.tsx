'use client'

import { editOwnerProfile } from '@/src/common/api/user'
import ProfileCircleBadge from '@/src/common/components/Badge/ProfileCircleBadge'
import Button from '@/src/common/components/Btn/Button'
import { Badge_T } from '@/src/common/types/badge'
import { UserProfile_T } from '@/src/common/types/user'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FaCamera } from 'react-icons/fa'
import { FollowAndProfileButton } from './FollowAndProfileButton'

type Props = {
  isOwner: boolean
  ownerData: UserProfile_T
}

export default function ProfileInfo({ isOwner, ownerData }: Props) {
  const queryClient = useQueryClient()

  const { user_id, user_nickname, profileMessage, follwer_list, badge_list, user_seq } = ownerData

  // 프로필 수정 mutation
  const { mutate } = useMutation({
    mutationFn: async (data: UserProfile_T) => {
      return editOwnerProfile(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ownerUserData', user_seq] })
    },
  })

  // background image 변경 함수
  function handleChangeBgImg() {
    const url = window.prompt('배경 이미지 URL을 입력해주세요. (제거 시 빈칸 입력)')
    if (url === null) return

    mutate({ ...ownerData, user_bg_img: url })
  }

  return (
    <div className="flex flex-1 flex-col gap-[11px]">
      <div className="flex justify-between">
        <div>
          <Name name={user_nickname} />
          <IdAndFollowers id={user_id} followers={follwer_list} />
        </div>

        {isOwner && (
          <Button
            icons={<FaCamera />}
            title="커버 사진 수정"
            onClickFn={handleChangeBgImg}
            styles={`bg-gray-dark text-black hover:bg-[#ddd]`}
          />
        )}
      </div>
      {<ProfileMessage message={profileMessage ?? '--'} />}
      {badge_list.length > 0 && <BadgeList badges={badge_list} />}
      <FollowAndProfileButton isOwner={isOwner} />
    </div>
  )
}

/**
 * 유저 이름
 */
export function Name({ name }: { name: string }) {
  return (
    <div className="font-inherit relative m-0 inline-block min-w-[103px] pb-[] text-[28px] font-bold leading-[34px] tracking-[-0.01em]">
      {name}
    </div>
  )
}

/**
 * 유저 아이디 & 팔로워
 */

type IdAndFollowersProps = {
  id: string
  followers: { nickname: string; user_id: string }[]
}

export function IdAndFollowers({ id, followers }: IdAndFollowersProps) {
  return (
    <div className="robo-bold-14 flex pt-[.5em]">
      <div className="flex">
        <div className="min-w-[52px]">@{id}</div>
        <div className="flex w-3 shrink-0 items-center justify-center text-center">‧</div>
      </div>
      <div className="min-w-[91px]">팔로워 {followers.length}명</div>
    </div>
  )
}

/**
 * 프로필 메세지
 */

type ProfileMessageProps = {
  message: string
}

export function ProfileMessage({ message }: ProfileMessageProps) {
  return (
    <div className="font-roboto text-dimgray-lighter0 relative font-medium leading-[14px] tracking-[-0.01em]">
      {message}
    </div>
  )
}

/**
 * 프로필 뱃지
 */

type BadgeListProps = {
  badges: Badge_T[]
  selectedBadgeId?: number
}

export function BadgeList({ badges, selectedBadgeId = -1 }: BadgeListProps) {
  return (
    <div className="mb-[-1rem] flex h-[40px] w-full gap-[10px] pt-[2px]">
      {badges.map((badge) => (
        <ProfileCircleBadge key={badge.bdg_id} badge={badge} selectedBadgeId={selectedBadgeId} />
      ))}
    </div>
  )
}
