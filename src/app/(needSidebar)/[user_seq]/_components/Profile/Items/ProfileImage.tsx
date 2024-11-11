'use client'
import { editOwnerProfile } from '@/src/common/api/user'
import ImageUploadModal from '@/src/app/(needSidebar)/[user_seq]/_components/Profile/Items/ImageUploadModal'
import { OwnerProfile_T } from '@/src/common/types/owner'
import NextImg from '@/src/common/utils/NextImg'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { FaCamera } from 'react-icons/fa'
import { useImage } from '@/src/common/hooks/useImage'

type ProfileImageProps = {
  alt: string
  src: string | null
  isOwner: boolean
  ownerData: OwnerProfile_T
}

export default function ProfileImage({ alt, src, isOwner, ownerData }: ProfileImageProps) {
  const { user_bg_img: isBackground } = ownerData
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { imgBundles, contentInputRef, uploadImage, removeImage, removeAllimg } = useImage([])
  const [imgSrc, setImgSrc] = useState<string | null>(src)

  const queryClient = useQueryClient()
  const bundlesIdx = imgBundles.length - 1

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
    setImgSrc(src)
  }, [src])

  useEffect(() => {
    if (imgBundles.length > 0) {
      if (imgBundles[bundlesIdx].s3Url) {
        setImgSrc(imgBundles[bundlesIdx].s3Url)
      } else {
        setImgSrc(imgBundles[bundlesIdx].tmpUrl)
      }
    }
  }, [imgBundles])

  const handleChangeProfileImg = () => {
    mutate({ ...ownerData, user_profile_img: imgSrc })
  }

  const onDelete = () => {
    setImgSrc(null)
    removeAllimg()
  }

  return (
    <>
      <div className={`${isBackground && 'absolute top-[-50px]'} h-[168px] w-[168px] rounded-full bg-[white] p-[4px]`}>
        <div className="relative h-full w-full">
          <div className="h-full w-full cursor-pointer overflow-hidden rounded-full object-cover">
            <NextImg alt={alt} src={src ?? '/images/profile/profile.svg'} />
          </div>

          {isOwner && (
            <button
              className="absolute bottom-[15px] right-[4px] z-[100] flex h-[36px] w-[36px] items-center justify-center overflow-hidden rounded-full bg-[#E4E6EB] p-[9px] hover:bg-slate-300"
              onClick={() => setIsModalOpen(true)}
            >
              <FaCamera className="h-full w-full" />
            </button>
          )}
        </div>
        {isModalOpen && (
          <ImageUploadModal
            setIsOpen={setIsModalOpen}
            inputRef={contentInputRef}
            src={imgSrc}
            isLoading={imgSrc === imgBundles[bundlesIdx]?.tmpUrl}
            uploadImage={uploadImage}
            onDelete={onDelete}
            onSubmit={handleChangeProfileImg}
          />
        )}
      </div>
      {isBackground && <div className="w-[174px]" />}
    </>
  )
}
