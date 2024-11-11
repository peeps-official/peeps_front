'use client'

import LoadingSpinner from '@/src/app/_styles/animation/LoadingSpinner'
import { editOwnerProfile } from '@/src/common/api/user'
import ModalForm from '@/src/common/components/Modal/ModalForm'
import { useImage } from '@/src/common/hooks/useImage'

import { OwnerProfileStateAtom } from '@/src/common/recoil/ownerAtom'
import { OwnerProfile_T } from '@/src/common/types/owner'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'

export default function EditProfileModal({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) {
  const ownerUserData = useRecoilValue<OwnerProfile_T>(OwnerProfileStateAtom)
  const { user_nickname, user_profile_img, profileMessage } = ownerUserData

  const { imgBundles, contentInputRef, uploadImage, removeImage, removeAllimg } = useImage([])
  const [imgSrc, setImgSrc] = useState<string | null>(user_profile_img)

  const bundlesIdx = imgBundles.length - 1

  useEffect(() => {
    if (imgBundles.length > 0) {
      if (imgBundles[bundlesIdx].s3Url) {
        setImgSrc(imgBundles[bundlesIdx].s3Url)
      } else {
        setImgSrc(imgBundles[bundlesIdx].tmpUrl)
      }
    }
  }, [imgBundles])

  const isLoading = imgSrc === imgBundles[bundlesIdx]?.tmpUrl

  const { register, handleSubmit } = useForm()
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: async (data: OwnerProfile_T) => await editOwnerProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userData'] })
      setIsOpen(false)
    },
  })

  const onSubmit = handleSubmit((data) => {
    mutate({ ...ownerUserData, ...data, user_profile_img: imgSrc })
  })

  return (
    <ModalForm title="프로필 수정" setIsOpen={setIsOpen} onSubmit={onSubmit}>
      <ModalForm.ProfileImg
        alt="profile image"
        src={imgSrc}
        isLoading={isLoading}
        inputRef={contentInputRef}
        uploadImage={uploadImage}
      />

      <ModalForm.Input
        title="닉네임"
        id="nickname"
        type="text"
        defaultValue={user_nickname}
        {...register('user_nickname')}
      />
      <ModalForm.Input
        title="대화명"
        id="profile_message"
        type="text"
        defaultValue={profileMessage}
        {...register('profileMessage')}
      />
      <ModalForm.Send title={isLoading ? <LoadingSpinner /> : '수정하기'} isLoading={isLoading} />
    </ModalForm>
  )
}
