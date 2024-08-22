'use client'

import ProfileCircleBadge from '@/src/common/components/Badge/ProfileCircleBadge'
import { LogedInUserReqDataAtom, OwnerProfileStateAtom } from '@/src/common/recoil/userAtom'
import NextImg from '@/src/common/utils/NextImg'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { LoginUserDataReq_T, UserProfile_T } from '@/src/common/types/user'
import { FaCamera } from 'react-icons/fa'

import ProfileModal from '../ProfilePopUp/ProfileModal'
import { Badge_T } from '@/src/common/types/badge'
import Button from '@/src/common/components/Btn/Button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { editOwnerProfile } from '@/src/common/api/mypage'
import ModalForm from '../Modal/ModalForm'

export default function UserProfile() {
  const queryClient = useQueryClient()
  const ownerData = useRecoilValue<UserProfile_T>(OwnerProfileStateAtom)
  const { user_data: LoginUserData } = useRecoilValue<LoginUserDataReq_T>(LogedInUserReqDataAtom)

  // 프로필 수정 mutation
  const { mutate } = useMutation({
    mutationFn: async (data: UserProfile_T) => {
      return editOwnerProfile(data)
    },
    onSuccess: (data) => {
      console.log(data)
      queryClient.invalidateQueries({ queryKey: ['owner', 'userPage'] })
    },
  })

  const { user_id, user_nickname, profileMessage, user_bg_img, user_profile_img, follwer_list, badge_list } = ownerData

  // 로그인 유저와 프로필 주인이 같은지 확인
  const isOwner = LoginUserData.user_seq === ownerData.user_seq

  // background image 변경 함수
  function handleChangeBgImg() {
    const url = window.prompt('배경 이미지 URL을 입력해주세요. (제거 시 빈칸 입력)')

    mutate({ ...ownerData, user_bg_img: url })
  }

  return (
    <ProfileWrapper>
      <ProfileBackground src={user_bg_img} alt="user profile background" />
      <ProfileCardWrapper>
        <ProfileImage src={user_profile_img} alt="profile image" />
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
      </ProfileCardWrapper>
    </ProfileWrapper>
  )
}

/**
 * 전체 프로필 wrapper
 */

type ProfileWrapperProps = {
  children: React.ReactNode
}

export function ProfileWrapper({ children }: ProfileWrapperProps) {
  return (
    <div className="box-border flex max-w-full flex-1 shrink-0 flex-col gap-[20px] self-stretch py-0 pl-4 pr-5">
      {children}
    </div>
  )
}

/**
 * 프로필 배경
 */

type ProfileBackgroundProps = {
  src: string | null
  alt: string
}

export function ProfileBackground({ src, alt }: ProfileBackgroundProps) {
  if (!src) return

  return (
    <div className="relative box-border flex aspect-bg w-full overflow-hidden rounded-[15px] object-cover">
      <NextImg alt={alt} src={src} />
    </div>
  )
}

/**
 * 유저 카드 프로필 래퍼 (백그라운드 제외한 모든 프로필 정보)
 */

type ProfileCardWrapperProps = {
  children: React.ReactNode
}

export function ProfileCardWrapper({ children }: ProfileCardWrapperProps) {
  return <div className="flex gap-[10px]">{children}</div>
}

/**
 * 프로필 이미지
 */

type ProfileImageProps = {
  alt: string
  src: string | null
}

export function ProfileImage({ alt, src }: ProfileImageProps) {
  return (
    <div className="h-24 w-24 cursor-pointer overflow-hidden rounded-full object-cover">
      <NextImg alt={alt} src={src ?? '/images/profile/profile_default.png'} />
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

export function FollowAndProfileButton({ isOwner }: FollowAndProfileButtonProps) {
  const [isFollowing, setIsFollowing] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)

  const handleFollowClick = () => {
    setIsFollowing((prevState) => !prevState)
  }

  return (
    <div className="mt-[1rem] flex items-center gap-[10px] text-center">
      {isOwner ? (
        <Button
          title="프로필 수정"
          onClickFn={() => setIsEditOpen(true)}
          styles={
            isFollowing
              ? 'bg-blue-primary text-white hover:bg-blue-primaryHover'
              : 'bg-blue-secondary text-white hover:bg-blue-secondaryHover'
          }
        />
      ) : (
        <Button
          title={isFollowing ? '팔로우 중' : '팔로우'}
          onClickFn={handleFollowClick}
          styles={
            isFollowing
              ? 'bg-blue-primary text-white hover:bg-blue-primaryHover'
              : 'bg-blue-secondary text-white hover:bg-blue-secondaryHover'
          }
        />
      )}
      <Button title="프로필 보기" onClickFn={() => setIsProfileModalOpen(true)} styles={'bg-black text-white'} />
      {isEditOpen && <ModalForm setIsOpen={setIsEditOpen} title="프로필 수정" />}
      {isProfileModalOpen && <ProfileModal setIsProfileModalOpen={setIsProfileModalOpen} />}
    </div>
  )
}
