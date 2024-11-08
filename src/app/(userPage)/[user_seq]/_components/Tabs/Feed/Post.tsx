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
import { IoMdHeartEmpty } from 'react-icons/io'
import EditModal from './EditModal'
import PostDetailModal from './PostDetailModal'

type Props = {
  post: Post_T
}

export default function Post({ post }: Props) {
  const [isPostDetail, setIsPostDetail] = useState<Boolean>(false)
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
      queryClient.invalidateQueries({
        queryKey: ['clubFeed'],
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
          <div className="maxWidthWithoutPadding scrollbar-hide mb-2 mt-4 flex h-fit overflow-x-auto">
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
          <div className="flex items-center justify-between">
            <button onClick={() => setIsPostDetail(true)} className="w-full rounded-lg bg-gray-100">
              <div className="kr-medium-14 w-full rounded-lg border border-gray-300 p-2 text-left text-[#999]">
                댓글 달기...
              </div>
            </button>
          </div>
        </div>
      </div>
      {isEditPost && <EditModal isEdit={true} setIsOpen={setIsEditPost} post={post} />}
      {isPostDetail && <PostDetailModal setIsOpen={setIsPostDetail} post={post} />}
    </div>
  )
}

const sideBarBackground = `!w-[240px] before:fixed before:inset-0 before:z-popBack before:content-['']`

const LikeIcon = ({ width = 18.75, height = 19, fill = 'transparent' }) => {
  const isTransparent = fill === 'transparent'

  return (
    <svg
      aria-label="좋아요"
      role="img"
      viewBox="0 0 18 18"
      style={{
        fill: fill,
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      <title>좋아요</title>
      <path
        d="M1.34375 7.53125L1.34375 7.54043C1.34374 8.04211 1.34372 8.76295 1.6611 9.65585C1.9795 10.5516 2.60026 11.5779 3.77681 12.7544C5.59273 14.5704 7.58105 16.0215 8.33387 16.5497C8.73525 16.8313 9.26573 16.8313 9.66705 16.5496C10.4197 16.0213 12.4074 14.5703 14.2232 12.7544C15.3997 11.5779 16.0205 10.5516 16.3389 9.65585C16.6563 8.76296 16.6563 8.04211 16.6562 7.54043V7.53125C16.6562 5.23466 15.0849 3.25 12.6562 3.25C11.5214 3.25 10.6433 3.78244 9.99228 4.45476C9.59009 4.87012 9.26356 5.3491 9 5.81533C8.73645 5.3491 8.40991 4.87012 8.00772 4.45476C7.35672 3.78244 6.47861 3.25 5.34375 3.25C2.9151 3.25 1.34375 5.23466 1.34375 7.53125Z"
        strokeWidth="1.25"
        stroke={isTransparent ? 'black' : 'none'}
      />
    </svg>
  )
}
