'use client'
import { POST_T } from '@/src/common/types/post'
import { formatTimeAgo } from '@/src/common/utils/Date/formatTimeAgo'
import NextImg from '@/src/common/utils/NextImg'
import dynamic from 'next/dynamic'
import { FaComment } from 'react-icons/fa6'
import { GoHeartFill } from 'react-icons/go'
import { BsThreeDots } from 'react-icons/bs'
import { FiTrash } from 'react-icons/fi'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './post.css'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { axiosWithAuth } from '@/src/common/api/instance'
import { useRecoilValue } from 'recoil'
import { LoginUserDataReq_T } from '@/src/common/types/user'
import { LogedInUserReqDataAtom } from '@/src/common/recoil/userAtom'

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
        <img src={post.user.profileImage} alt="Profile" className="h-12 w-12 rounded-full object-cover" />
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="flex items-center justify-start gap-2">
              <h2 className="text-lg font-semibold">{post.user.nickname}</h2>
              <p className="text-sm text-gray-600"> {formatTimeAgo(create_date)}</p>
            </div>
            <div className="relative h-6 w-6">
              <BsThreeDots
                className="h-full w-full cursor-pointer text-gray-600"
                onClick={() => setIsOption((prev) => !prev)}
              />
              {isOption && (
                <>
                  <div className={`z-pop absolute right-0 top-8 w-56 rounded-lg bg-white p-4 shadow-popupBox`}>
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

const sideBarBackground = `!w-[240px] before:fixed before:inset-0 before:z-popBack before:content-['']`
