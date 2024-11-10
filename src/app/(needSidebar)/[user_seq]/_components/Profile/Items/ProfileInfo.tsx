'use client'

import { editOwnerProfile } from '@/src/common/api/user'
import ProfileCircleBadge from '@/src/common/components/Badge/ProfileCircleBadge'
import Button from '@/src/common/components/Btn/Button'
import { Badge_T } from '@/src/common/types/badge'
import { OwnerProfile_T } from '@/src/common/types/owner'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FaCamera } from 'react-icons/fa'
import { FollowAndProfileButton } from './FollowAndProfileButton'
import { useEffect, useState } from 'react'
import { useImage } from '@/src/common/hooks/useImage'
import ImageUploadModal from './ImageUploadModal'

type Props = {
  isOwner: boolean
  ownerData: OwnerProfile_T
}

export default function ProfileInfo({ isOwner, ownerData }: Props) {
  const { user_id, user_nickname, profileMessage, follwer_list, badge_list, user_bg_img } = ownerData
  const { imgBundles, contentInputRef, uploadImage, removeImage, removeAllimg } = useImage([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imgSrc, setImgSrc] = useState<string | null>(user_bg_img)

  const queryClient = useQueryClient()

  const bundlesIdx = imgBundles.length - 1

  useEffect(() => {
    setImgSrc(user_bg_img)
  }, [user_bg_img])

  // 프로필 수정 mutation
  const { mutate } = useMutation({
    mutationFn: async (data: OwnerProfile_T) => {
      return editOwnerProfile(data)
    },
    onSuccess: () => {
      setIsModalOpen(false)
      queryClient.invalidateQueries({ queryKey: ['userData'] })
    },
  })

  useEffect(() => {
    if (imgBundles.length > 0) {
      console.log(imgBundles)
      if (imgBundles[bundlesIdx].s3Url) {
        setImgSrc(imgBundles[bundlesIdx].s3Url)
      } else {
        setImgSrc(imgBundles[bundlesIdx].tmpUrl)
      }
    }
  }, [imgBundles])

  const handleChangeBgImg = () => {
    mutate({ ...ownerData, user_profile_img: imgSrc })
  }

  const onDelete = () => {
    setImgSrc(null)
    removeAllimg()
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
            onClickFn={() => setIsModalOpen(true)}
            styles={`bg-gray-dark text-black hover:bg-[#ddd]`}
          />
        )}
      </div>
      {<ProfileMessage message={profileMessage ?? '--'} />}
      {isModalOpen && (
        <ImageUploadModal
          setIsOpen={setIsModalOpen}
          inputRef={contentInputRef}
          src={imgSrc}
          isLoading={imgSrc === imgBundles[bundlesIdx]?.tmpUrl}
          uploadImage={uploadImage}
          onDelete={onDelete}
          onSubmit={handleChangeBgImg}
        />
      )}
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
