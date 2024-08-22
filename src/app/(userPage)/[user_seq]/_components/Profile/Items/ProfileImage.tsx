'use client'
import { editOwnerProfile } from '@/src/common/api/user'
import { UserProfile_T } from '@/src/common/types/user'
import NextImg from '@/src/common/utils/NextImg'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FaCamera } from 'react-icons/fa'

type ProfileImageProps = {
  alt: string
  src: string | null
  isOwner: boolean
  ownerData: UserProfile_T
}

export default function ProfileImage({ alt, src, isOwner, ownerData }: ProfileImageProps) {
  const queryClient = useQueryClient()
  const { user_bg_img: isBackground } = ownerData

  const { mutate } = useMutation({
    mutationFn: async (data: UserProfile_T) => {
      return editOwnerProfile(data)
    },
    onSuccess: (data) => {
      console.log(data)
      queryClient.invalidateQueries({ queryKey: ['owner', 'userPage'] })
    },
  })

  function handleChangeProfileImg() {
    const url = window.prompt('프로필 이미지 URL을 입력해주세요.')

    if (!url) return

    mutate({ ...ownerData, user_profile_img: url })
  }

  return (
    <>
      <div className={`${isBackground && 'absolute top-[-50px]'} h-[168px] w-[168px] rounded-full bg-[white] p-[4px]`}>
        <div className="h-full w-full cursor-pointer overflow-hidden rounded-full object-cover">
          <NextImg alt={alt} src={src ?? '/images/profile/profile_default.png'} />
        </div>
        {isOwner && (
          <button
            className="absolute bottom-[15px] right-[10px] z-[100] flex h-[36px] w-[36px] items-center justify-center overflow-hidden rounded-full bg-[#E4E6EB] p-[9px] hover:bg-slate-300"
            onClick={handleChangeProfileImg}
          >
            <FaCamera className="h-full w-full" />
          </button>
        )}
      </div>
      {isBackground && <div className="w-[174px]" />}
    </>
  )
}
