'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import { LogedInUserReqDataAtom } from '@/src/common/recoil/userAtom'
import { IsOwnerAtom } from '@/src/common/recoil/userHome'
import { Post_T } from '@/src/common/types/post'
import { LoginUserData_T } from '@/src/common/types/user'
import { formatTimeAgo } from '@/src/common/utils/Date/formatTimeAgo'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FiTrash } from 'react-icons/fi'
import { IoLockClosedOutline } from 'react-icons/io5'
import { useRecoilValue } from 'recoil'

type PostContentProps = {
  description: string
  images: string[]
}

export function PostContent({ description, images }: PostContentProps) {
  return (
    <>
      <p className="mt-4 text-gray-700">{description}</p>
      <div className="maxWidthWithoutPadding scrollbar-hide mb-2 mt-4 flex h-fit overflow-x-auto">
        {images &&
          images.map((src) => (
            <div key={src} id="image" className="mb-2 shrink-0 pr-[6px]">
              <Image
                src={src}
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                alt="feed img"
                className="max-h-[300px] max-w-full overflow-hidden rounded-lg border-[1px] border-solid border-black/40 object-cover"
              />
            </div>
          ))}
      </div>
    </>
  )
}

type PostHeaderProps = {
  post: Post_T
  isOption: boolean
  setIsOption: Dispatch<SetStateAction<boolean>>
  setIsEditPost: Dispatch<SetStateAction<boolean>>
}

export function PostHeader({ post, isOption, setIsOption, setIsEditPost }: PostHeaderProps) {
  const userLoginedData = useRecoilValue<LoginUserData_T>(LogedInUserReqDataAtom)
  const isOwner = useRecoilValue<boolean>(IsOwnerAtom)
  const isLogedIn = userLoginedData.user_data.user_seq !== ''

  const queryClient = useQueryClient()
  const route = useRouter()

  const { mutate: deletePost } = useMutation({
    mutationFn: async () => {
      await axiosWithAuth.delete(`/${userLoginedData.user_data.user_id}/post/${post.id}`)
    },
    onSuccess: () => {
      alert('게시글이 삭제되었습니다.')
      setIsOption(false)
      queryClient.invalidateQueries({
        queryKey: ['refreshWithPost'],
      })
      queryClient.invalidateQueries({
        queryKey: ['clubFeed'],
      })
    },
  })

  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-start gap-2">
        <button onClick={() => route.push(`/${post.user.id}`)}>
          <h2 className="text-lg font-semibold">{post.user.nickname}</h2>
        </button>
        <p className="text-sm text-gray-600"> {formatTimeAgo(post.create_date)}</p>
        {post.isPublic === false && (
          <p className="relative top-[-1px] h-[0.875rem] w-[0.875rem]">
            <IoLockClosedOutline className="h-full w-full" />
          </p>
        )}
      </div>
      <div className="relative h-6 w-6">
        <BsThreeDots
          className="h-full w-full cursor-pointer text-gray-600"
          onClick={() => setIsOption((prev) => !prev)}
        />
        {isOption &&
          (isOwner ? (
            <>
              <div className={`absolute right-0 top-8 z-pop w-56 rounded-lg bg-white p-[16px] shadow-popupBox`}>
                <button
                  className="kr-bold-18 flex w-full rounded-md p-2 text-center text-gray-600 hover:bg-[#eee]"
                  onClick={() => {
                    setIsOption(false)
                    setIsEditPost(true)
                  }}
                >
                  <span>수정</span>
                  <div className="h-5 w-5"></div>
                </button>
                <button
                  onClick={() => {
                    const res = confirm('삭제하시겠습니까?')
                    if (res) deletePost()
                  }}
                  className="kr-bold-18 flex w-full justify-between rounded-md p-2 text-center text-red-600 hover:bg-[#eee]"
                >
                  <span>삭제</span>
                  <div className="h-5 w-5">
                    <FiTrash className="h-full w-full" />
                  </div>
                </button>
              </div>
              <button className={sideBarBackground} onClick={() => setIsOption(false)} />
            </>
          ) : (
            <div className={`absolute right-0 top-8 z-pop w-56 rounded-lg bg-white p-[16px] shadow-popupBox`}>
              <button
                className="kr-bold-18 flex w-full rounded-md p-2 text-center text-gray-600 hover:bg-[#eee]"
                onClick={() => {
                  if (!isLogedIn) alert('로그인이 필요합니다.')
                  else alert('신고가 접수되었습니다.')
                }}
              >
                <span>신고하기</span>
                <div className="h-5 w-5"></div>
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

const sideBarBackground = `!w-[240px] before:fixed before:inset-0 before:z-popBack before:content-['']`
