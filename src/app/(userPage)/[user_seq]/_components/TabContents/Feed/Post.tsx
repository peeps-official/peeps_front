'use client'
import { POST_T } from '@/src/common/types/post'
import { formatTimeAgo } from '@/src/common/utils/Date/formatTimeAgo'
import NextImg from '@/src/common/utils/NextImg'
import dynamic from 'next/dynamic'
import { FaComment } from 'react-icons/fa6'
import { GoHeartFill } from 'react-icons/go'
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
  const { description, image, create_date, comments, boardLike } = post
  const srcs: string[] = JSON.parse(image)
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img src={srcs[i]} className="object-cover" />
        </a>
      )
    },
    dots: true,
    dotsClass: 'slick-thumb',
    infinite: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

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
          <div className="mb-8 h-fit w-[500px] overflow-hidden">
            <Slider {...settings}>
              {srcs &&
                srcs.map((src) => (
                  <div
                    key={src}
                    id="image"
                    className="mb-2 mt-4 h-[300px] w-[300px] max-w-[500px] overflow-hidden rounded-lg"
                  >
                    <NextImg src={src} alt="feed img" />
                  </div>
                ))}
            </Slider>
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

function PrevArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <button
      className={className}
      style={{ ...style, left: '10px', zIndex: 1, fontSize: '50px', color: 'white' }}
      onClick={onClick}
    />
  )
}

function NextArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <button
      className={className}
      style={{ ...style, right: '10px', zIndex: 1, fontSize: '50px', color: 'white' }}
      onClick={onClick}
    />
  )
}
