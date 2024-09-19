'use client'
import { POST_T } from '@/src/common/types/post'
import { formatTimeAgo } from '@/src/common/utils/Date/formatTimeAgo'
import NextImg from '@/src/common/utils/NextImg'
import { FaComment } from 'react-icons/fa6'
import { GoHeartFill } from 'react-icons/go'

type Props = {
  post: POST_T
}

export default function Post({ post }: Props) {
  console.log(post)
  const { description, image, create_date, comments, boardLike } = post
  const srcs: string[] = JSON.parse(image)

  console.log(srcs)

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-popupBox">
      <div className="flex items-start space-x-4">
        <img src={post.user.profileImage} alt="Profile" className="h-12 w-12 rounded-full" />
        <div className="flex-1">
          <div className="flex items-center justify-start gap-2">
            <h2 className="text-lg font-semibold">{post.user.nickname}</h2>
            <p className="text-sm text-gray-600"> {formatTimeAgo(create_date)}</p>
          </div>
          <p className="mt-4 text-gray-700">{description}</p>
          <div className="mb-8 flex w-full">
            {srcs &&
              srcs.map((src) => (
                <div key={src} id="image" className="mt-4 h-[300px] max-h-[1000px] w-full max-w-[500px] rounded-lg">
                  <NextImg src={src} alt="feed img" />
                </div>
              ))}
          </div>
          <InteractionButtons comments={comments} boardLike={boardLike} />
        </div>
      </div>
    </div>
  )
}

const IconButton = ({ icon, label }: any) => {
  return (
    <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
      <span className="h-[15px] w-[15px]">{icon}</span>
      <span>{label}</span>
    </button>
  )
}

type InteractionButtonsProps = {
  comments: number
  boardLike: number
}

const InteractionButtons = ({ comments, boardLike }: InteractionButtonsProps) => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="flex space-x-4">
        <IconButton icon={<GoHeartFill style={{ width: '100%', height: '100%' }} />} label={boardLike.toString()} />
        <IconButton icon={<FaComment style={{ width: '100%', height: '100%' }} />} label={comments.toString()} />
      </div>
    </div>
  )
}
