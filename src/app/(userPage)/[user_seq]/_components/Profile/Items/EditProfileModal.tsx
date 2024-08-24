'use client'

import { editOwnerProfile } from '@/src/common/api/user'
import ModalForm from '@/src/common/components/Modal/ModalForm'
import { OwnerProfileStateAtom } from '@/src/common/recoil/userAtom'
import { UserProfile_T } from '@/src/common/types/user'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'

export default function EditProfileModal({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) {
  const setOwnerUserData = useRecoilValue<UserProfile_T>(OwnerProfileStateAtom)
  const { user_nickname, user_profile_img, profileMessage } = setOwnerUserData
  const [imgSrc, setImgSrc] = useState<string | null>(user_profile_img)
  const { register, handleSubmit } = useForm()
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: async (data: UserProfile_T) => await editOwnerProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['owner', 'userPage'] })
      setIsOpen(false)
    },
  })

  const onSubmit = handleSubmit((data) => {
    mutate({ ...setOwnerUserData, ...data, user_profile_img: imgSrc })
  })

  return (
    <ModalForm title="프로필 수정" setIsOpen={setIsOpen} onSubmit={onSubmit}>
      <ModalForm.ProfileImg alt="profile image" src={imgSrc} setImgSrc={setImgSrc} />
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
      <ModalForm.Send title="수정하기" />
    </ModalForm>
  )
}
