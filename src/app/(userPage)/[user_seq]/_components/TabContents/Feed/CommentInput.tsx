'use client'

import { useContentImage } from '@/src/common/hooks/useContentImage'
import NextImg from '@/src/common/utils/NextImg'
import { useState } from 'react'
import { PiImagesThin } from 'react-icons/pi'
import { FaXmark } from 'react-icons/fa6'

type Post_T = {
  contents: string
  imgs: string[]
}

export default function CommentInput() {
  const [post, setPost] = useState<Post_T | null>(null)
  const [rowsNum, setRowsNum] = useState<number>(1)

  const { imageUrls, contentInputRef, removeImage, handleUploadImage } = useContentImage([])

  function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const text = e.target.value
    const rows = text.split('\n').length

    setRowsNum(rows)
  }

  console.log(imageUrls)

  return (
    <div className="rounded-lg bg-white p-4 shadow-popupBox">
      <div className="flex w-full items-start gap-4">
        <div className="flex-1 rounded-lg bg-gray-100 outline-none">
          <textarea
            id="text"
            placeholder="여기서 글을 작성하세요"
            rows={rowsNum}
            onChange={handleTextAreaChange}
            className="w-full resize-none p-3"
          />
        </div>
        <div className="kr-bold-12">
          <button className="btn w-fit rounded-[5px] bg-blue-primary text-white hover:bg-blue-primaryHover">
            <span>게시</span>
          </button>
        </div>
      </div>
      {imageUrls && imageUrls.length > 0 && (
        <div className="border-1 mt-4 flex flex-wrap rounded-[5px] border border-solid border-[#CED0D4] bg-white">
          {imageUrls.map((imageUrl) => (
            <div className="relative m-2 mr-0">
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
      )}
      <button
        className="btn mt-4 w-full space-x-1 bg-gray-300 hover:bg-slate-300"
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
          accept="image/png, image/jpeg"
          ref={contentInputRef}
          onChange={handleUploadImage}
        />
      </button>
    </div>
  )
}
