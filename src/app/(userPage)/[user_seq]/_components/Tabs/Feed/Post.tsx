'use client'
import { Post_T } from '@/src/common/types/post'
import { formatTimeAgo } from '@/src/common/utils/Date/formatTimeAgo'
import { BsThreeDots } from 'react-icons/bs'
import { FiTrash } from 'react-icons/fi'
import { IoLockClosedOutline } from 'react-icons/io5'

import { axiosWithAuth } from '@/src/common/api/instance'
import { LogedInUserReqDataAtom } from '@/src/common/recoil/userAtom'
import { LoginUserData_T } from '@/src/common/types/user'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import EditModal from './EditModal'

type Props = {
  post: Post_T
}

export default function Post({ post }: Props) {
  const [isEditPost, setIsEditPost] = useState<Boolean>(false)
  const [isOption, setIsOption] = useState<Boolean>(false)
  const userLoginedData = useRecoilValue<LoginUserData_T>(LogedInUserReqDataAtom)

  const queryClient = useQueryClient()

  const { mutate: deletePost } = useMutation({
    mutationFn: async () => {
      await axiosWithAuth.delete(`/${userLoginedData.user_data.user_id}/post/${post.id}`)
    },
    onSuccess: (variables) => {
      alert('게시글이 삭제되었습니다.')
      setIsOption(false)
      queryClient.invalidateQueries({
        queryKey: ['refreshWithPost'],
      })
    },
  })

  const { description, image, create_date, comments, boardLike } = post

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
              )}
            </div>
          </div>
          <p className="mt-4 text-gray-700">{description}</p>
          <div className="maxWidthWithoutPadding scrollbar-hide mb-8 mt-4 flex h-fit overflow-x-auto">
            {image &&
              image.map((src) => (
                <div key={src} id="image" className="mb-2 shrink-0 pr-[6px]">
                  <img
                    src={src}
                    alt="feed img"
                    className="max-h-[300px] max-w-full overflow-hidden rounded-lg border-[1px] border-solid border-black/40 object-cover"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      {isEditPost && <EditModal isEdit={true} setIsOpen={setIsEditPost} post={post} />}
    </div>
  )
}

const sideBarBackground = `!w-[240px] before:fixed before:inset-0 before:z-popBack before:content-['']`
