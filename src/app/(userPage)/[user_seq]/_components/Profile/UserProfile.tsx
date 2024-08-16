'use client'

import ProfileCircleBadge from '@/src/common/components/Badge/ProfileCircleBadge'
import { UserProfileStateAtom } from '@/src/common/recoil/userAtom'
import NextImg from '@/src/common/utils/NextImg'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { UserProfile_T } from '@/src/common/types/user'

import ProfileModal from '../ProfilePopUp/ProfileModal'
import { Badge_T } from '@/src/common/types/badge'

export default function UserProfile() {
  const recoilData = useRecoilValue<UserProfile_T>(UserProfileStateAtom)

  const {
    user_id,
    user_nickname,
    profileMessage,
    user_bg_img,
    user_profile_img,
    follwer_list,
    badge_list,
  } = recoilData

  return (
    <ProfileWrapper>
      {user_bg_img && <ProfileBackground src={user_bg_img} alt="user profile background" />}
      <ProfileCardWrapper>
        {user_profile_img && <ProfileImage src={user_profile_img} alt="profile image" />}
        <div className="flex flex-col gap-[11px]">
          <Name name={user_nickname} />
          <IdAndFollowers id={user_id} followers={follwer_list} />
          {<ProfileMessage message={profileMessage ?? '--'} />}
          {badge_list.length > 0 && <BadgeList badges={badge_list} />}
          <FollowAndProfileButton />
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
    <div className="box-border flex flex-1 flex-col gap-[20px] max-w-full self-stretch max-w-full py-0 pl-4 pr-5 shrink-0">
      {children}
    </div>
  )
}

/**
 * 프로필 배경
 */

type ProfileBackgroundProps = {
  alt: string
  src: string
}

export function ProfileBackground({ alt, src }: ProfileBackgroundProps) {
  return (
    <div className="w-full h-[204px] flex relative rounded-[15px] overflow-hidden object-cover box-border">
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
  return <div className="flex flex gap-[10px]">{children}</div>
}

/**
 * 프로필 이미지
 */

type ProfileImageProps = {
  alt: string
  src: string
}

export function ProfileImage({ alt, src }: ProfileImageProps) {
  return (
    <div className="object-cover w-24 h-24 overflow-hidden rounded-full cursor-pointer">
      <NextImg alt={alt} src={src} />
    </div>
  )
}

/**
 * 유저 이름
 */
export function Name({ name }: { name: string }) {
  return (
    <div className="m-0 relative text-[28px] tracking-[-0.01em] leading-[34px] font-bold font-inherit inline-block min-w-[103px]">
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
    <div className="flex robo-bold-14">
      <div className="flex">
        <div className="min-w-[52px]">@{id}</div>
        <div className="flex items-center justify-center w-3 text-center shrink-0">‧</div>
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
    <div className="relative tracking-[-0.01em] leading-[14px] font-medium font-roboto text-dimgray-lighter0">
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
    <div className="w-full pt-[2px] h-[40px] flex gap-[10px]">
      {badges.map((badge) => (
        <ProfileCircleBadge
          key={badge.bdg_id}
          badge={badge}
          selectedBadgeId={selectedBadgeId}
        />
      ))}
    </div>
  )
}

/**
 * 팔로우 & 프로필 보기 버튼
 */

export function FollowAndProfileButton() {
  const [isFollowing, setIsFollowing] = useState(false)

  const handleFollowClick = () => {
    setIsFollowing((prevState) => !prevState)
  }
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

  return (
    <div className="flex items-center gap-[10px] text-center mt-[1rem]">
      <div className="flex">
        <button
          onClick={handleFollowClick}
          className={`rounded-[15px] overflow-hidden flex items-center justify-center py-0 px-3 whitespace-nowrap font-bold
              ${
                isFollowing
                  ? 'bg-blue-primary hover:bg-blue-primaryHover text-white'
                  : 'bg-blue-secondary hover:bg-blue-secondaryHover text-white'
              }`}
        >
          <b className="w-[55px]  relative tracking-[-0.01em]  leading-[34px] text-small flex items-center justify-center min-w-[55px]">
            {isFollowing ? '팔로우 중' : '팔로우'}
          </b>
        </button>
      </div>
      <button
        onClick={() => setIsProfileModalOpen(true)}
        className="rounded-[15px] bg-black overflow-hidden flex items-center justify-center py-0 px-[11px] whitespace-nowrap text-white"
      >
        <b className="w-[68px] relative tracking-[-0.01em] leading-[34px] font-bold text-small flex items-center  justify-center min-w-[68px]">
          프로필 보기
        </b>
      </button>
      {isProfileModalOpen && <ProfileModal setIsProfileModalOpen={setIsProfileModalOpen} />}
    </div>
  )
}
