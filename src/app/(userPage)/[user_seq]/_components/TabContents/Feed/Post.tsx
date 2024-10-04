'use client'
import { POST_T } from '@/src/common/types/post'
import { formatTimeAgo } from '@/src/common/utils/Date/formatTimeAgo'
import NextImg from '@/src/common/utils/NextImg'
import dynamic from 'next/dynamic'
import { BsThreeDots } from 'react-icons/bs'
import { FaComment } from 'react-icons/fa6'
import { FiTrash } from 'react-icons/fi'
import { GoHeartFill } from 'react-icons/go'
import { IoLockClosedOutline } from 'react-icons/io5'

import { axiosWithAuth } from '@/src/common/api/instance'
import { LogedInUserReqDataAtom } from '@/src/common/recoil/userAtom'
import { LoginUserDataReq_T } from '@/src/common/types/user'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './post.css'

const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
})

type Props = {
  post: POST_T
}

export default function Post({ post }: Props) {
  const [isOption, setIsOption] = useState<Boolean>(false)
  const userLoginedData = useRecoilValue<LoginUserDataReq_T>(LogedInUserReqDataAtom)

  const queryClient = useQueryClient()

  const { mutate: deletePost } = useMutation({
    mutationFn: async () => {
      await axiosWithAuth.delete(`/${userLoginedData.user_data.user_id}/post/${post.id}`)
    },
    onSuccess: (variables) => {
      alert('게시글이 삭제되었습니다.')
      setIsOption(false)
      console.log(variables)
      queryClient.invalidateQueries({ queryKey: ['ownerPostList', userLoginedData.user_data.user_seq] })
    },
  })

  const { description, image, create_date, comments, boardLike } = post
  const srcs: string[] = JSON.parse(image)

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-popupBox">
      <div className="flex items-start space-x-4">
        <img src={post.user.profileImage} alt="Profile" className="h-12 w-12 rounded-full object-cover" />
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="flex items-center justify-start gap-2">
              <h2 className="text-lg font-semibold">{post.user.nickname}</h2>
              <p className="text-sm text-gray-600"> {formatTimeAgo(create_date)}</p>
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
              {isOption && (
                <>
                  <div className={`z-pop absolute right-0 top-8 w-56 rounded-lg bg-white p-[16px] shadow-popupBox`}>
                    <button className="kr-bold-18 flex w-full rounded-md p-2 text-center text-gray-600 hover:bg-[#eee]">
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
              )}
            </div>
          </div>
          <p className="mt-4 text-gray-700">{description}</p>
          <div className="maxWidthWithoutPadding scrollbar-hide mb-8 mt-4 flex h-fit overflow-x-auto">
            {srcs &&
              srcs.map((src) => (
                <div key={src} id="image" className="mb-2 shrink-0 pr-[6px]">
                  <img
                    src={src}
                    alt="feed img"
                    className="max-h-[400px] max-w-full overflow-hidden rounded-lg border-[1px] border-solid border-black/40 object-cover"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const sideBarBackground = `!w-[240px] before:fixed before:inset-0 before:z-popBack before:content-['']`
