'use client'

import { useState } from 'react'
import EditModal from '../Post/EditModal'

export default function CommentInput() {
  const [isEdit, setIsEdit] = useState<boolean>(false)

  return (
    <div className="rounded-lg bg-white p-4 shadow-popupBox">
      <div className="flex w-full items-center gap-4">
        <div onClick={() => setIsEdit(true)} className="flex-1 rounded-lg bg-gray-100">
          <input
            className="w-full resize-none p-3 caret-transparent"
            type="text"
            placeholder="여기서 글을 작성하세요"
            value={''}
            onChange={() => {
              // warning 방지용
            }}
          />
        </div>
        <button
          className="btn w-fit rounded-[5px] bg-blue-primary text-white hover:bg-blue-primaryHover"
          onClick={() => setIsEdit(true)}
        >
          <span>게시</span>
        </button>
      </div>
      {isEdit && <EditModal setIsOpen={setIsEdit} />}
    </div>
  )
}
