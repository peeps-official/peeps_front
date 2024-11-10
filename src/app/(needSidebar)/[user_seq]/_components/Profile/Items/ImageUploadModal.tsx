import LoadingSpinner from '@/src/app/_styles/animation/LoadingSpinner'
import Ring from '@/src/app/_styles/animation/Ring'
import BasicCenterModal from '@/src/common/components/Modal/BasicCenterModal'
import Image from 'next/image'
import React, { useState } from 'react'

interface ImageUploadModalProps {
  src: string | null
  isLoading: boolean
  inputRef: React.RefObject<HTMLInputElement>
  uploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void
  setIsOpen: (state: boolean) => void
  onSubmit: () => void
}

export default function ImageUploadModal({
  setIsOpen,
  src,
  isLoading,
  inputRef,
  uploadImage,
  onSubmit,
}: ImageUploadModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  return (
    <BasicCenterModal setIsOpen={setIsOpen}>
      <div className="max-h-[80vh] min-h-[30vh] w-full max-w-md overflow-y-auto rounded-lg bg-white shadow-xl">
        <div className="p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">이미지 설정</h2>
          <div className="mb-4">
            <input
              ref={inputRef}
              type="file"
              id="image-upload"
              accept="image/png, image/jpeg, image/jpg, image/gif, image/webp"
              onChange={uploadImage}
              className="hidden"
            />
            <label
              htmlFor="image-upload"
              className="inline-block cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600"
            >
              이미지 선택하기
            </label>
          </div>
          {src ? (
            <div className="mb-4">
              <p className="mb-2 text-sm text-gray-600">미리보기:</p>
              <div className="relative w-full">
                <Image
                  src={src}
                  alt="Preview"
                  width={500}
                  height={300}
                  layout="responsive"
                  objectFit="cover"
                  className="rounded"
                />
                {isLoading && (
                  <div className="absolute left-0 top-0 h-full w-full bg-white bg-opacity-40">
                    <Ring styles="!absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 " />
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="border-1 my-4 flex h-[100px] w-full items-center justify-center border border-solid border-gray-200 p-4 text-center">
              <p className="text-gray-400">이미지를 선택해주세요.</p>
            </div>
          )}
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="mr-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              취소
            </button>
            <button
              onClick={onSubmit}
              disabled={isLoading}
              className={`rounded-md px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                !isLoading ? 'bg-blue-500 hover:bg-blue-600' : 'cursor-not-allowed bg-blue-300'
              }`}
            >
              {isLoading ? <LoadingSpinner /> : '업로드'}
            </button>
          </div>
        </div>
      </div>
    </BasicCenterModal>
  )
}
