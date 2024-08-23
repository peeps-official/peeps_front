'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import { editOwnerProfile } from '@/src/common/api/user'
import ProfileCircleBadge from '@/src/common/components/Badge/ProfileCircleBadge'
import Button from '@/src/common/components/Btn/Button'
import { LogedInUserReqDataAtom, OwnerProfileStateAtom } from '@/src/common/recoil/userAtom'
import { Badge_T } from '@/src/common/types/badge'
import { LoginUserDataReq_T, UserProfile_T } from '@/src/common/types/user'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { FaCamera } from 'react-icons/fa'
import { useRecoilValue } from 'recoil'
import ProfileModal from '../../ProfilePopUp/ProfileModal'
import PopEditProfile from '../PopEditProfile'

type Props = {
  isOwner: boolean
  ownerData: UserProfile_T
}

export default function ProfileInfo({ isOwner, ownerData }: Props) {
  const queryClient = useQueryClient()

  const { user_id, user_nickname, profileMessage, follwer_list, badge_list } = ownerData

  // 프로필 수정 mutation
  const { mutate } = useMutation({
    mutationFn: async (data: UserProfile_T) => {
      return editOwnerProfile(data)
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['owner', 'userPage'] })
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
    <div className="font-inherit relative m-0 inline-block min-w-[103px] text-[28px] font-bold leading-[34px] tracking-[-0.01em]">
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
    <div className="robo-bold-14 flex">
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
  selectedBadgeId?: string
}

export function BadgeList({ badges, selectedBadgeId = '-1' }: BadgeListProps) {
  return (
    <div className="flex h-[40px] w-full gap-[10px] pt-[2px]">
      {badges.map((badge) => (
        <ProfileCircleBadge key={badge.bdg_id} badge={badge} selectedBadgeId={selectedBadgeId} />
      ))}
    </div>
  )
}

/**
 * 팔로우 & 프로필 보기 버튼
 */

type FollowAndProfileButtonProps = {
  isOwner: boolean
}

type isFollow = -1 | 0 | 1

export function FollowAndProfileButton({ isOwner }: FollowAndProfileButtonProps) {
  const loginedUserData = useRecoilValue<LoginUserDataReq_T>(LogedInUserReqDataAtom)
  const ownerData = useRecoilValue<UserProfile_T>(OwnerProfileStateAtom)

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const queryClient = useQueryClient()

  const handleFollowClick = () => {
    handleEditProfile()
  }

  const isFollow = ownerData.isFollow

  async function handleEditProfile() {
    // 로그인 검증
    if (!loginedUserData.user_data.user_seq) alert('로그인이 필요합니다.')

    // isFollow
    if (isFollow === 0) {
      const { data } = await axiosWithAuth.post(`${ownerData.user_seq}/follow`)
      if (data) {
        queryClient.invalidateQueries({ queryKey: ['owner', 'userPage'] })
      }
    } else if (isFollow === 1) {
      const { data, status } = await axiosWithAuth.delete(`${ownerData.user_seq}/unfollow`)
      console.log(status)
      if (status === 200) {
        queryClient.invalidateQueries({ queryKey: ['owner', 'userPage'] })
      }
    }
  }

  return (
    <div className="mt-[1rem] flex items-center gap-[10px] text-center">
      {isOwner ? (
        <Button
          title="프로필 수정"
          onClickFn={() => setIsEditOpen(true)}
          styles={
            isFollow
              ? 'bg-blue-primary text-white hover:bg-blue-primaryHover'
              : 'bg-blue-secondary text-white hover:bg-blue-secondaryHover'
          }
        />
      ) : (
        <Button
          title={isFollow === 1 ? '팔로우 중' : '팔로우'}
          onClickFn={handleFollowClick}
          styles={
            isFollow
              ? 'bg-blue-primary text-white hover:bg-blue-primaryHover'
              : 'bg-blue-secondary text-white hover:bg-blue-secondaryHover'
          }
        />
      )}
      <Button title="프로필 보기" onClickFn={() => setIsProfileModalOpen(true)} styles={'bg-black text-white'} />
      {isEditOpen && <PopEditProfile setIsOpen={setIsEditOpen} />}
      {isProfileModalOpen && <ProfileModal setIsProfileModalOpen={setIsProfileModalOpen} />}
    </div>
  )
}
