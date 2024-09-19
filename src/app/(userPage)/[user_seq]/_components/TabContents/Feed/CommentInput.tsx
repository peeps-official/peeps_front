'use client'

import { uploadPost } from '@/src/common/api/post'
import { useContentImage } from '@/src/common/hooks/useContentImage'
import { PostUpload_T } from '@/src/common/types/post'
import NextImg from '@/src/common/utils/NextImg'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaXmark } from 'react-icons/fa6'
import { PiImagesThin } from 'react-icons/pi'

export default function CommentInput() {
  const owner_user_seq = usePathname().slice(1)
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: async (post: PostUpload_T) => await uploadPost(owner_user_seq, post),
    onSuccess: () => {
      window.alert('게시글이 성공적으로 등록되었습니다.')
      removeAllimg()
      reset()
      setRowsNum(1) // 텍스트 영역의 행 수 초기화

      queryClient.invalidateQueries({ queryKey: ['ownerPostList', owner_user_seq] })
    },
  })

  const { files, imageUrls, contentInputRef, removeImage, handleUploadImage, removeAllimg } = useContentImage([])

  const { register, handleSubmit, reset } = useForm()
  const onSubmit = handleSubmit((data) => {
    const { contents, isPublic } = data

    if (!contents) return alert('내용을 입력해주세요.')

    const postData: PostUpload_T = {
      contents,
      imgs: files,
      isPublic: isPublic,
    }

    mutate(postData)
  })

  const [rowsNum, setRowsNum] = useState<number>(1)
  function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const text = e.target.value
    const rows = text.split('\n').length

    setRowsNum(rows)
  }

  return (
    <form className="rounded-lg bg-white p-4 shadow-popupBox" onSubmit={onSubmit}>
      <div className="flex w-full items-center gap-4">
        <div className="flex-1 rounded-lg bg-gray-100">
          <textarea
            id="text"
            {...register('contents')}
            placeholder="여기서 글을 작성하세요"
            rows={rowsNum}
            onChange={handleTextAreaChange}
            className="w-full resize-none p-3"
          />
        </div>
        <button className="btn w-fit rounded-[5px] bg-blue-primary text-white hover:bg-blue-primaryHover">
          <span>게시</span>
        </button>
      </div>
      {imageUrls?.length > 0 && <ImageViewer imageUrls={imageUrls} removeImage={removeImage} />}
      <div className="mt-4 flex items-center gap-1">
        <button
          type="button"
          className="btn w-full space-x-1 bg-gray-300 hover:bg-slate-300"
          onClick={(e) => {
            contentInputRef.current?.click()
          }}
        >
          <div className="mt-[-2px] h-[20px] w-[20px]">
            <PiImagesThin style={{ width: '100%', height: '100%' }} />
          </div>
          <span className="w-fit">이미지 / 동영상 추가</span>
          <input
            type="file"
            className="hidden"
            multiple
            accept="image/png, image/jpeg, image/jpg"
            ref={contentInputRef}
            onChange={handleUploadImage}
          />
        </button>
        <div className="btn h-full w-fit bg-gray-300">
          <select className="block h-full" {...register('isPublic')} defaultValue="true" required>
            <option value="true">🌎 전체 공개</option>
            <option value="false">🔒 나만 보기</option>
          </select>
        </div>
      </div>
    </form>
  )
}

type ImageViewerProps = {
  imageUrls: string[]
  removeImage: (url: string) => void
}
function ImageViewer({ imageUrls, removeImage }: ImageViewerProps) {
  return (
    <div className="border-1 mt-4 flex flex-wrap rounded-[5px] border border-solid border-[#CED0D4] bg-white">
      {imageUrls.map((imageUrl) => (
        <div className="relative m-2 mr-0" key={imageUrl}>
          <div key={imageUrl} className="h-[70px] w-[70px] overflow-hidden rounded-[15px]">
            <NextImg src={imageUrl} alt="content image" />
          </div>
          <div className="absolute right-[-8px] top-[-8px] rounded-full bg-white p-[3px]">
            <button
              className="flex h-fit w-fit items-center justify-center rounded-full bg-gray-300 p-[2px] text-white hover:bg-gray-900"
              onClick={() => removeImage(imageUrl)}
            >
              <FaXmark />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
