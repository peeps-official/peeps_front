'use client'

import { OwnerProfileStateAtom } from '@/src/common/recoil/userAtom'
import { OwnerProfile_T } from '@/src/common/types/user'
import NextImg from '@/src/common/utils/NextImg'
import { useRecoilValue } from 'recoil'

import { IsOwnerAtom } from '@/src/common/recoil/userHome'
import ProfileImage from './Items/ProfileImage'
import ProfileInfo from './Items/ProfileInfo'

export default function UserProfile() {
  const ownerData = useRecoilValue<OwnerProfile_T>(OwnerProfileStateAtom)
  const isOwner = useRecoilValue<boolean>(IsOwnerAtom)

  return (
    <div className="box-border flex max-w-full flex-1 flex-col gap-[20px]">
      <ProfileBackground src={ownerData.user_bg_img} alt="user profile background" />
      <div className="relative flex items-center gap-[10px]">
        <ProfileImage src={ownerData.user_profile_img} alt="profile image" isOwner={isOwner} ownerData={ownerData} />
        <ProfileInfo isOwner={isOwner} ownerData={ownerData} />
      </div>
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
