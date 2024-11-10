'use client'
import { Post_T } from '@/src/common/types/post'

import { useState } from 'react'
import EditModal from './EditModal'

import { PostContent, PostHeader } from './PostContent'
import PostDetailModal from './PostDetailModal'
import { useRouter } from 'next/navigation'
import NextImg from '@/src/common/utils/NextImg'

type Props = {
  post: Post_T
}

export default function Post({ post }: Props) {
  const [isPostDetail, setIsPostDetail] = useState<boolean>(false)
  const [isEditPost, setIsEditPost] = useState<boolean>(false)
  const [isOption, setIsOption] = useState<boolean>(false)

  const { description, image, create_date, comments, isLike } = post
  const route = useRouter()

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-popupBox">
      <div className="flex items-start space-x-4">
        <button
          onClick={() => route.push(`/${post.user.id}`)}
          className="h-12 w-12 overflow-hidden rounded-full object-cover"
        >
          <NextImg src={post.user.profileImage} alt="Profile" />
        </button>
        <div className="flex-1">
          <PostHeader post={post} isOption={isOption} setIsOption={setIsOption} setIsEditPost={setIsEditPost} />
          <PostContent description={description} images={image} />
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
