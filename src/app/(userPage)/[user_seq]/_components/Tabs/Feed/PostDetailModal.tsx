'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import BasicCenterModal from '@/src/common/components/Modal/BasicCenterModal'
import { Comment_T, Post_T } from '@/src/common/types/post'
import { formatTimeAgo } from '@/src/common/utils/Date/formatTimeAgo'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { PostContent, PostHeader } from '../Post/PostContent'
import EditModal from './EditModal'

type Props = {
  post: Post_T // 글 정보
  setIsOpen: (state: boolean) => void
}

export default function PostDetailModal({ post, setIsOpen }: Props) {
  const [isOption, setIsOption] = useState<boolean>(false)
  const [isEditPost, setIsEditPost] = useState<boolean>(false)

  const { id: post_id, description, image, user, create_date, comments, boardLike } = post
  const inputRef = useRef<HTMLInputElement>(null)
  const route = useRouter()
  const queryClient = useQueryClient()

  const { data: commentList, isSuccess } = useQuery({
    queryKey: ['comment', post_id],
    queryFn: async () => {
      const { data } = await axiosWithAuth.get(`/${user.id}/post/${post_id}/comment`)
      return data
    },
  })

  const { mutate: createComment } = useMutation({
    mutationFn: async () => {
      if (!inputRef?.current?.value) return alert('댓글을 입력해주세요.')

      return await axiosWithAuth.post(`/${user.id}/post/${post_id}/comment`, {
        description: inputRef.current.value,
      })
    },
    onSuccess: () => {
      alert('댓글이 등록되었습니다.')
      queryClient.invalidateQueries({ queryKey: ['comment', post_id] })
    },
    onError: (error) => {
      alert('댓글 등록에 실패했습니다.')
      console.error(error)
    },
  })

  const movePage = (url: string) => {
    setIsOpen(false)
    route.push(`/${url}`)
  }

  if (isSuccess) console.log(commentList)

  return (
    <BasicCenterModal setIsOpen={setIsOpen}>
      <div className="flex max-h-[80vh] min-h-[50vh] max-w-[90vw] gap-3 overflow-hidden rounded-lg bg-[#fff] shadow-popupBox">
        <div className="max-[640px] flex min-w-[420px] items-start space-x-4 overflow-auto rounded-lg p-4">
          <img src={post.user.profileImage} alt="Profile" className="h-12 w-12 rounded-full object-cover" />
          <div className="flex-1 overflow-hidden">
            <PostHeader post={post} isOption={isOption} setIsOption={setIsOption} setIsEditPost={setIsEditPost} />
            <PostContent description={description} images={image} />
          </div>
        </div>
        <div className="border-1 max-[640px] relative flex min-w-[420px] flex-col rounded-lg border border-solid border-[#d5d5d5] bg-[#fff] p-4">
          <div className="mb-10 flex w-full flex-col overflow-hidden">
            <p className="kr-bold-16 mb-4">댓글</p>
            <div className="flex flex-col gap-2 overflow-y-auto pb-5">
              {commentList?.map((comment: Comment_T) => (
                <div key={comment.id} className="flex items-start space-x-4 rounded-lg bg-[#fafafa] p-2 shadow-sm">
                  <img src={comment.user.profileImage} alt="Profile" className="h-10 w-10 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <button onClick={() => movePage(comment.user.id)} className="kr-bold-14">
                        {comment.user.user_id}
                      </button>
                      <p className="kr-regular-12">{formatTimeAgo(comment.create_date)}</p>
                    </div>
                    <p className="kr-regular-14">{comment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-1 left-0 w-full p-2">
            <div className="flex h-fit w-full justify-between rounded-lg border border-solid border-[#d5d5d5] p-2">
              <input type="text" ref={inputRef} className="w-full flex-1" placeholder="댓글 달기..." />
              <button
                type="button"
                onClick={() => createComment()}
                className="kr-bold-12 w-fit text-nowrap rounded-lg bg-[#f0f0f0] px-2 py-1 text-[#999] hover:bg-gray-300 hover:text-black"
              >
                게시
              </button>
            </div>
          </div>
        </div>
        {isEditPost && <EditModal isEdit={true} setIsOpen={setIsEditPost} post={post} />}
      </div>
    </BasicCenterModal>
  )
}
